import React from 'react';
//import SC from '../Music/sdk-3.1.2';

const Playlist = () => {
    var styles = {
        carousel: {
            width:'53vw',
            height:'22vw',
            margin:'40px 16vw 40px 33vw',
            padding:'0',
            boxSizing:'border-box',
            position:'relative',
            overflow:'hidden'
        },
        scroll: {
            width: '600vw',
            height: '36vh',
            margin: '0',
            padding: '0',
            border: '0'
        }
    };


    // //	Play the track when clicked
    // $("#carousel_scroll").delegate(".play", "click autoClick", function(e) {
    //     document.getElementById('carousel_scroll').onClick = function() {
    //
    //     //	Prevent Soundcloud from being visited, which is the default action
    //     e.preventDefault();
    //
    //     //	Make shareable
    //     window.location.hash = "#track_" + $(this).attr("href").slice($(this).attr("href").lastIndexOf("/") + 1);
    //     playTrack($(this).attr("href").slice($(this).attr("href").lastIndexOf("/") + 1));
    // });
    //
    // //	Jump to the right section, when a hash is provided
    // if (document.location.hash.length > 0) {
    //
    //     if (document.location.hash.substring(0, 5) == "#blog") {
    //
    //         $("body").scrollTo("#portfolio");
    //
    //         modalOpen(document.location.hash.substring(6));
    //     }
    //     else if (document.location.hash.substring(0, 6) == "#track") {
    //
    //         setTimeout(function() {
    //
    //             $("a[data-permalink='" + document.location.hash.substring(7) + "']").parent().parent().parent().addClass("active");
    //
    //             $("#carousel").scrollTo("article.active", 1000, {axis: "x0", onAfter: function() {
    //
    //                     $("article.active").find("ul").animate({"height": "100%"}, 200);
    //                 }});
    //
    //             playTrack(document.location.hash.substring(7));
    //         }, 1000);
    //     }
    // }
    //
    // //	Open modal window for blogs
    // $(".blog_modal").on("click", function(e) {
    //
    //     if ($(window).width() >= 1366) {
    //         e.preventDefault();
    //
    //         modalOpen($(this).attr("href"));
    //     }
    // });
    //
    // //	Userdata: avatar_url; followers_count; followings_count; id; plan; subscriptions; track_count; username; website; website_title
    // const connectSoundcloud = function() {
    //
    //     // 	Initialize client with app credentials
    //     SC.initialize({
    //         client_id: soundcloud.clientId,
    //         redirect_uri: soundcloud.redirectUri
    //     });
    //
    //     //	Get userdata, like the description
    //     SC.get("/users/" + soundcloud.userId).then(function(me) {
    //
    //         $("header p").html(me.description);
    //     });
    //
    //     //	Retrieve all playlists
    //     SC.get("/users/" + user + "/playlists").then(function(all) {
    //
    //         all.sort(function(a, b) {
    //             return b.release_year - a.release_year;
    //         });
    //         $(all).each(self.displayPlaylist);
    //     });
    // };
    //
    // //	Show playlist
    // const displayPlaylist = function(k, pl) {
    //
    //     //	Only load playlists without prefix
    //     if (pl.permalink.substring(0, 2) == 'z-') return;
    //
    //     var albumContainer 	= $("#carousel_scroll"),
    //         album 			= $('<article id="album_' + pl.permalink + '"></article>'),
    //         albumImage 		= $('<img id="cover_album_' + pl.permalink + '" src="' + pl.artwork_url.replace('large.jpg', 't300x300.jpg') + '">'),
    //         albumNav 		= $('<li><div class="anim"></div><a data-article="album_' + pl.permalink + '" href="https://soundcloud.com/swimmer-zone/sets/' + pl.permalink + '">' + pl.title + '</a></li>');
    //     window.albumList 	= $('<ul class="sc-trackslist sc-player" data-set="' + pl.permalink + '"></ul>');
    //
    //     albumContainer.append(album);
    //     album.append(albumList);
    //     $('header .covers').append(albumImage);
    //     $("nav").append(albumNav);
    //
    //     //	If the menu is complete, remove all active states and make the first one active
    //     $("nav li").removeClass("active");
    //     $("nav li:first-child").addClass("active");
    //
    //     //	Iterate through trackdata and build tracklist
    //     pl.tracks.sort(function(a, b) {
    //         return a.release_day - b.release_day;
    //     });
    //     $.each(pl.tracks, displayTrack);
    // };
    //
    // //	Add leading zeroes when necessary
    // const leadingZero = function(int) {
    //     return (int < 10 ? "0" + int : int);
    // };
    //
    // //	Show playlist track
    // const displayTrack = function(k, tr) {
    //
    //     var minutes = Math.floor((tr.duration / 1000) / 60),
    //         seconds = leadingZero(Math.floor((tr.duration / 1000) % 60));
    //
    //     albumList.append('<li><a class="play" href="' + tr.permalink_url + '" data-track="' + tr.id + '" data-permalink="' + tr.permalink + '">' + tr.title + '</a><span data-seconds="' + tr.duration + '">' + minutes + ':' + seconds + '</span></li>');
    // };
    //
    // //	Play track on click
    // const playTrack = function(track) {
    //
    //     //	Remove progress bar before playing
    //     $("#sc-progress").remove();
    //
    //     //	First make all spans with track details that still are visible, invisible
    //     $(".visible").addClass("invisible").removeClass("visible");
    //
    //     //	Insert span in the header to display a timer
    //     var totalTime = $("a[data-permalink='" + track + "']").next("span").data("seconds"),
    //         playerTime = $('<span id="sc-progress"><span id="sc-played"></span></span>');
    //
    //     $(playerTime).insertAfter("#carousel");
    //
    //     //	Add stop button to current track and remove from other tracks
    //     $(".stop_parent").remove();
    //     $("a[data-permalink='" + track + "']").parent().append('<em class="stop_parent"><a class="stop">■</a></em>');
    //
    //     //	And start streaming
    //     SC.stream("/users/43451866/tracks/" + $("a[data-permalink='" + track + "']").data("track")).then(function(player) {
    //
    //         player.play();
    //
    //         player.on("time", function() {
    //
    //             var minutes = Math.floor(((totalTime - player.currentTime()) / 1000) / 60),
    //                 seconds = self.leadingZero(Math.floor(((totalTime - player.currentTime()) / 1000) % 60)),
    //                 percent = (player.currentTime() / player.streamInfo.duration * 100);
    //
    //             $("#sc-played").css({"width": percent + "%"});
    //
    //             $("a[data-permalink='" + track + "']").next("span").html(minutes + ":" + seconds);
    //
    //         });
    //
    //         //	If the track is finished, play the next track, if there is a next track
    //         player.on("finish", function() {
    //
    //             if (typeof $("a[data-permalink='" + track + "']").parent().next().find("a[data-permalink]").data("permalink") != 'undefined') {
    //
    //                 document.location.hash = "track_" + $("a[data-permalink='" + track + "']").parent().next().find("a[data-permalink]").data("permalink");
    //
    //                 var minutes = Math.floor((totalTime / 1000) / 60),
    //                     seconds = self.leadingZero(Math.floor((totalTime / 1000) % 60));
    //
    //                 //	Reset the timer of the previous track and add some transparency
    //                 $("a[data-permalink='" + track + "']").next("span").html(minutes + ":" + seconds);
    //                 $("a[data-permalink='" + track + "']").parent().css({"opacity":"0.7"});
    //
    //                 self.playTrack($("a[data-permalink='" + track + "']").parent().next().find("a[data-permalink]").data("permalink"));
    //             }
    //         });
    //
    //         $("a[data-permalink='" + track + "']").parent().find(".stop").on("click", function() {
    //
    //             player.pause();
    //
    //             document.location.hash = "";
    //
    //             //	Remove progress bar and reset clock on stop
    //             $("#sc-progress").remove();
    //
    //             var minutes = Math.floor((totalTime / 1000) / 60),
    //                 seconds = self.leadingZero(Math.floor((totalTime / 1000) % 60));
    //
    //             $("a[data-permalink='" + track + "']").next("span").html(minutes + ":" + seconds);
    //
    //             //	Remove stop button from current track
    //             $("a[data-permalink='" + track + "']").parent().find(".stop_parent").remove();
    //         });
    //     });
    // };

    return(
        <div style={styles.carousel}>
            <div stye={styles.scroll}></div>
        </div>
    );
};

export default Playlist;
