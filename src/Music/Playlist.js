import React from 'react';

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


// article {
//     width:62vw;
//     height:36vh;
//     margin:0;
//     box-sizing:border-box;
//     position:relative;
//     padding:1vh 2vw;/*vw*/
//     display:inline-block;

//     img:nth-child(1) {
//         width:8vw;
//         height:8vw;
//         display:inline-block;
//         box-sizing:border-box;
//         margin:0;
//         box-shadow:0 4px 10px 5px rgba(0,0,0,0.15), 0 10px 15px 10px rgba(0,0,0,0.05), 0 16px 20px 15px rgba(0,0,0,0.05), 0 22px 25px 20px rgba(0,0,0,0.02);
//         border-radius:50%;
//     }
//     ul {
//         list-style:none;
//         display:inline-block;
//         vertical-align:top;
//         width:50vw;
//         margin:0;
//         overflow-y:scroll;
//         height:18vh;
//         padding-bottom:240px;

//         li {
//             display:block;
//             padding:10px 20px;
//             margin-bottom:12px;
//             margin-right:2vw;
//             background-color:rgba(106, 107, 112, 0.1);

//             a {
//                 color:$dark;
//             }
//             span {
//                 float:right;
//                 color:$dark;
                
//                 &:after {
//                     content:"";
//                     clear:both;
//                 }
//             }
//         }
//     }
// }
// article:not(:first-child) {
//     img {
//         opacity:0.2;
//     }
//     ul {
//         height:0;
//     }
// }
// .sc-player-engine-container {
//     position:absolute;
// }

// #sc-progress {
//     z-index:-1;
//     position:absolute;
//     top:0;
//     left:0;
//     width:100vw;
//     height:100vh;
// }
// #sc-played {
//     width:0;
//     height:100vh;
//     padding:0;
//     margin:0;
//     display:block;
//     background-color:$white;
//     background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='373' height='373' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='%23dddddd' stroke-width='0.6' %3E%3Crect x='-40' y='40' width='75' height='75'/%3E%3Crect x='-35' y='45' width='65' height='65'/%3E%3Crect x='-30' y='50' width='55' height='55'/%3E%3Crect x='-25' y='55' width='45' height='45'/%3E%3Crect x='-20' y='60' width='35' height='35'/%3E%3Crect x='-15' y='65' width='25' height='25'/%3E%3Crect x='-10' y='70' width='15' height='15'/%3E%3Crect x='-5' y='75' width='5' height='5'/%3E%3Crect width='35' height='35'/%3E%3Crect x='5' y='5' width='25' height='25'/%3E%3Crect x='10' y='10' width='15' height='15'/%3E%3Crect x='15' y='15' width='5' height='5'/%3E%3Crect x='40' width='75' height='75'/%3E%3Crect x='45' y='5' width='65' height='65'/%3E%3Crect x='50' y='10' width='55' height='55'/%3E%3Crect x='55' y='15' width='45' height='45'/%3E%3Crect x='60' y='20' width='35' height='35'/%3E%3Crect x='65' y='25' width='25' height='25'/%3E%3Crect x='70' y='30' width='15' height='15'/%3E%3Crect x='75' y='35' width='5' height='5'/%3E%3Crect x='40' y='80' width='35' height='35'/%3E%3Crect x='45' y='85' width='25' height='25'/%3E%3Crect x='50' y='90' width='15' height='15'/%3E%3Crect x='55' y='95' width='5' height='5'/%3E%3Crect x='120' y='-40' width='75' height='75'/%3E%3Crect x='125' y='-35' width='65' height='65'/%3E%3Crect x='130' y='-30' width='55' height='55'/%3E%3Crect x='135' y='-25' width='45' height='45'/%3E%3Crect x='140' y='-20' width='35' height='35'/%3E%3Crect x='145' y='-15' width='25' height='25'/%3E%3Crect x='150' y='-10' width='15' height='15'/%3E%3Crect x='155' y='-5' width='5' height='5'/%3E%3Crect x='120' y='40' width='35' height='35'/%3E%3Crect x='125' y='45' width='25' height='25'/%3E%3Crect x='130' y='50' width='15' height='15'/%3E%3Crect x='135' y='55' width='5' height='5'/%3E%3Crect y='120' width='75' height='75'/%3E%3Crect x='5' y='125' width='65' height='65'/%3E%3Crect x='10' y='130' width='55' height='55'/%3E%3Crect x='15' y='135' width='45' height='45'/%3E%3Crect x='20' y='140' width='35' height='35'/%3E%3Crect x='25' y='145' width='25' height='25'/%3E%3Crect x='30' y='150' width='15' height='15'/%3E%3Crect x='35' y='155' width='5' height='5'/%3E%3Crect x='200' y='120' width='75' height='75'/%3E%3Crect x='40' y='200' width='75' height='75'/%3E%3Crect x='80' y='80' width='75' height='75'/%3E%3Crect x='85' y='85' width='65' height='65'/%3E%3Crect x='90' y='90' width='55' height='55'/%3E%3Crect x='95' y='95' width='45' height='45'/%3E%3Crect x='100' y='100' width='35' height='35'/%3E%3Crect x='105' y='105' width='25' height='25'/%3E%3Crect x='110' y='110' width='15' height='15'/%3E%3Crect x='115' y='115' width='5' height='5'/%3E%3Crect x='80' y='160' width='35' height='35'/%3E%3Crect x='85' y='165' width='25' height='25'/%3E%3Crect x='90' y='170' width='15' height='15'/%3E%3Crect x='95' y='175' width='5' height='5'/%3E%3Crect x='120' y='160' width='75' height='75'/%3E%3Crect x='125' y='165' width='65' height='65'/%3E%3Crect x='130' y='170' width='55' height='55'/%3E%3Crect x='135' y='175' width='45' height='45'/%3E%3Crect x='140' y='180' width='35' height='35'/%3E%3Crect x='145' y='185' width='25' height='25'/%3E%3Crect x='150' y='190' width='15' height='15'/%3E%3Crect x='155' y='195' width='5' height='5'/%3E%3Crect x='160' y='40' width='75' height='75'/%3E%3Crect x='165' y='45' width='65' height='65'/%3E%3Crect x='170' y='50' width='55' height='55'/%3E%3Crect x='175' y='55' width='45' height='45'/%3E%3Crect x='180' y='60' width='35' height='35'/%3E%3Crect x='185' y='65' width='25' height='25'/%3E%3Crect x='190' y='70' width='15' height='15'/%3E%3Crect x='195' y='75' width='5' height='5'/%3E%3Crect x='160' y='120' width='35' height='35'/%3E%3Crect x='165' y='125' width='25' height='25'/%3E%3Crect x='170' y='130' width='15' height='15'/%3E%3Crect x='175' y='135' width='5' height='5'/%3E%3Crect x='200' y='200' width='35' height='35'/%3E%3Crect x='200' width='35' height='35'/%3E%3Crect y='200' width='35' height='35'/%3E%3C/g%3E%3C/svg%3E");
// }
// .stop_parent {
//     margin-left:50px;
// }