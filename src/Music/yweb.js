var yWeb = {

	//	Document ready
	init: function() {

    	var self = this;

		//	Connect to Soundcloud, retrieve data and build player
		self.connectSoundcloud();

		//	Show playlist on click
		$("nav").delegate("a", "click", function(e) {

			//	Prevent Soundcloud from being visited, which is the default action
			e.preventDefault();

			//	Scroll to the clicked playlist
			$("#carousel").scrollTo("#" + $(this).data("article"), 1000, {axis: "x0", onAfter: function() {

				$("article.active").find("ul").animate({"height": "100%"}, 200);
			}});

			$(".covers").scrollTo("#cover_" + $(this).data("article"), 1000, {offset: -10, axis: "x0"});

			//	Animations of image and list
			$("article.active").find("ul").animate({"height": "0"}, 200);

			//	Add active class to the clicked menu item and the playlist
			$("article#" + $(this).data("article")).addClass("active");
			$("nav .active").removeClass("active");
			$(this).parent().addClass("active");
		});

		//	Play the track when clicked
		$("#carousel_scroll").delegate(".play", "click autoClick", function(e) {

			//	Prevent Soundcloud from being visited, which is the default action
			e.preventDefault();

			//	Make shareable
			window.location.hash = "#track_" + $(this).attr("href").slice($(this).attr("href").lastIndexOf("/") + 1);
			self.playTrack($(this).attr("href").slice($(this).attr("href").lastIndexOf("/") + 1));
		});

		//	Jump to the right section, when a hash is provided
		if (document.location.hash.length > 0) {

			if (document.location.hash.substring(0, 5) == "#blog") {

				$("body").scrollTo("#portfolio");
				
				self.modalOpen(document.location.hash.substring(6));
			}
			else if (document.location.hash.substring(0, 6) == "#track") {

				setTimeout(function() {

					$("a[data-permalink='" + document.location.hash.substring(7) + "']").parent().parent().parent().addClass("active");

					$("#carousel").scrollTo("article.active", 1000, {axis: "x0", onAfter: function() {

						$("article.active").find("ul").animate({"height": "100%"}, 200);
					}});

					self.playTrack(document.location.hash.substring(7));
				}, 1000);
			}
		}

		//	Open modal window for blogs
		$(".blog_modal").on("click", function(e) {

			if ($(window).width() >= 1366) {
				e.preventDefault();

				self.modalOpen($(this).attr("href"));
			}
		});
	},


	//	Userdata: avatar_url; followers_count; followings_count; id; plan; subscriptions; track_count; username; website; website_title
	connectSoundcloud: function() {

    	var self = this,
    		user = "722173945";

		// 	Initialize client with app credentials
		SC.initialize({
			client_id: "ded74e4c81cd4e66c3dd68d1d22fbbe1",
			redirect_uri: "http://swimmer.zone/callback.html"
		});

		//	Get userdata, like the description
		SC.get("/users/" + user).then(function(me) {

			$("header p").html(me.description);
		});

		//	Retrieve all playlists
		SC.get("/users/" + user + "/playlists").then(function(all) {

			all.sort(function(a, b) {
			    return b.release_year - a.release_year;
			});
			$(all).each(self.displayPlaylist);
		});
	},


	//	Show playlist
	displayPlaylist: function(k, pl) {

		var self = yWeb;	//	Should be 'this'

    	//	Only load playlists without prefix
		if (pl.permalink.substring(0, 2) == 'z-') return;

		var albumContainer 	= $("#carousel_scroll"),
			album 			= $('<article id="album_' + pl.permalink + '"></article>'),
			albumImage 		= $('<img id="cover_album_' + pl.permalink + '" src="' + pl.artwork_url.replace('large.jpg', 't300x300.jpg') + '">'),
			albumNav 		= $('<li><div class="anim"></div><a data-article="album_' + pl.permalink + '" href="https://soundcloud.com/swimmer-zone/sets/' + pl.permalink + '">' + pl.title + '</a></li>');
		window.albumList 	= $('<ul class="sc-trackslist sc-player" data-set="' + pl.permalink + '"></ul>');

		albumContainer.append(album);
		album.append(albumList);
		$('header .covers').append(albumImage);
		$("nav").append(albumNav);

		//	If the menu is complete, remove all active states and make the first one active
		$("nav li").removeClass("active");
		$("nav li:first-child").addClass("active");

		//	Iterate through trackdata and build tracklist
		pl.tracks.sort(function(a, b) {
		    return a.release_day - b.release_day;
		});
		$.each(pl.tracks, self.displayTrack);
	},


	//	Add leading zeroes when necessary
	leadingZero: function(int) {

		return (int < 10 ? "0" + int : int);
	},


	//	Show playlist track
	displayTrack: function(k, tr) {

		var minutes = Math.floor((tr.duration / 1000) / 60),
			seconds = yWeb.leadingZero(Math.floor((tr.duration / 1000) % 60));

		albumList.append('<li><a class="play" href="' + tr.permalink_url + '" data-track="' + tr.id + '" data-permalink="' + tr.permalink + '">' + tr.title + '</a><span data-seconds="' + tr.duration + '">' + minutes + ':' + seconds + '</span></li>');
	},


	//	Play track on click
	playTrack: function(track) {

		//	Remove progress bar before playing
		$("#sc-progress").remove();

		//	First make all spans with track details that still are visible, invisible
		$(".visible").addClass("invisible").removeClass("visible");

		//	Insert span in the header to display a timer
		var self = this,
			totalTime = $("a[data-permalink='" + track + "']").next("span").data("seconds"),
			playerTime = $('<span id="sc-progress"><span id="sc-played"></span></span>');

		$(playerTime).insertAfter("#carousel");

	  	//	Add stop button to current track and remove from other tracks
		$(".stop_parent").remove();
		$("a[data-permalink='" + track + "']").parent().append('<em class="stop_parent"><a class="stop">■</a></em>');

		//	And start streaming
		SC.stream("/users/43451866/tracks/" + $("a[data-permalink='" + track + "']").data("track")).then(function(player) {

		  	player.play();

			player.on("time", function() {

				var minutes = Math.floor(((totalTime - player.currentTime()) / 1000) / 60),
					seconds = self.leadingZero(Math.floor(((totalTime - player.currentTime()) / 1000) % 60)),
					percent = (player.currentTime() / player.streamInfo.duration * 100);

				$("#sc-played").css({"width": percent + "%"});

				$("a[data-permalink='" + track + "']").next("span").html(minutes + ":" + seconds);

			});

			//	If the track is finished, play the next track, if there is a next track
			player.on("finish", function() {

				if (typeof $("a[data-permalink='" + track + "']").parent().next().find("a[data-permalink]").data("permalink") != 'undefined') {

					document.location.hash = "track_" + $("a[data-permalink='" + track + "']").parent().next().find("a[data-permalink]").data("permalink");

					var minutes = Math.floor((totalTime / 1000) / 60),
						seconds = self.leadingZero(Math.floor((totalTime / 1000) % 60));

					//	Reset the timer of the previous track and add some transparency
					$("a[data-permalink='" + track + "']").next("span").html(minutes + ":" + seconds);
					$("a[data-permalink='" + track + "']").parent().css({"opacity":"0.7"});

					self.playTrack($("a[data-permalink='" + track + "']").parent().next().find("a[data-permalink]").data("permalink"));
				}
			});

		  	$("a[data-permalink='" + track + "']").parent().find(".stop").on("click", function() {

				player.pause();

				document.location.hash = "";

				//	Remove progress bar and reset clock on stop
				$("#sc-progress").remove();

				var minutes = Math.floor((totalTime / 1000) / 60),
					seconds = self.leadingZero(Math.floor((totalTime / 1000) % 60));

				$("a[data-permalink='" + track + "']").next("span").html(minutes + ":" + seconds);

			  	//	Remove stop button from current track
				$("a[data-permalink='" + track + "']").parent().find(".stop_parent").remove();
		  	});
		});
	},


	//	Show modal for blogs
	modalOpen: function(blog_url) {

		if ($("#modal").is(':empty')) {

			var self = this,
				closeButton = $('<a id="modal_close">&times;</a>'),
				iframe = $('<iframe src="' + blog_url + '"></iframe>').css({'opacity':'0'}),
				avatar = $('<img src="/storage' + blog_url.replace('blogs', 'www') + '.png" alt="">');

			$("#modal").append(closeButton, iframe).show();
			iframe.animate({'opacity':'1'}, 2000);
			$("#avatar").append(avatar).show().animate({'margin-left':'-184px'}, 2000, function() {
				$(this).css({'z-index':'101'});
			});

			closeButton.on("click", self.modalClose);
		}
	},


	//	Close modal window
	modalClose: function() {

		$("#modal").empty().hide();
		$("#avatar").empty().hide().css({'margin-left':'0', 'z-index':'99'});
	}
};


yWeb.init();