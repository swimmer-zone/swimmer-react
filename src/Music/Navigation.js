import React from 'react';

const Navigation = (colors) => {
    var styles = {
        nav: {
            display: 'block',
            width: '100vw',
            margin: '0',
            marginBottom: '64px',
            paddingRight: '2vw',
            background: 'linear-gradient(to left, rgba(106, 107, 112, 0.1), rgba(106, 107, 112, 0.2), rgba(106, 107, 112, 0.01))',
            textAlign: 'right',
            height: '44px'
        },
        li: {
            listStyle: 'none',
            display: 'inline-block',
            backgroundColor: 'rgba(106, 107, 112, 0.3)',
            padding: '10px',
            margin: '7px 1vw 2px 1vw',
            minWidth: '12vw',
            textAlign: 'center',
            position: 'relative',
            zIndex: '0',
            overflow: 'hidden',
            backgroundAttachment: 'fixed',
            backgroundPosition: '50% 50%',
            fontWeight: 'bold',
            letterSpacing: '0.5px',
            height: '44px'
        },
        newAfter: {
            content: 'New',
            fontVariant: 'small-caps',
            color: colors.white,
            backgroundColor: colors.purple,
            fontSize: '10px',
            transform: 'rotate(-45deg)',
            display: 'block',
            width: '70px',
            height: '16px',
            position: 'absolute',
            right: '-24px',
            top: '24px',
            letterSpacing: '1px'
        },
        liHover: {
            width: '105%',
            transition: 'width 1s ease-in-out'
        },
        liActive: {
            borderBottom: '3px solid' + colors.purple
        },
        liHoverBefore: {
            borderColor: colors.modal + ' ' + colors.purple
        },
        anim: {
            transform: 'translateY(-50%) translateX(-50%)',
            position: 'absolute',
            top: '50%',
            left: "50%",
            zIndex: '-1',
            width: '0',
            transition: 'width 0.5s ease-in-out'
        },
        animBefore: {
            position: 'relative',
            content: '',
            display: 'block',
            marginTop: '100%'
        },
        aniAfter: {
            content: '',
            position: 'absolute',
            top: "0",
            bottom: '0',
            left: '0',
            right: '0',
            borderRadius: '50%',
            backgroundColor: colors.purple
        },
        a: {
            border: '0',
            width: '100%',
            height: '100%',
            display: 'block'
        }
    };

    // var soundcloud = {
    //     userId: '722173945',
    //     clientId: 'ded74e4c81cd4e66c3dd68d1d22fbbe1',
    //     redirectUri: 'http://swimmer.zone/callback.html'
    // };

    //  Connect to Soundcloud, retrieve data and build player
    //connectSoundcloud();

    //  Show playlist on click
    function clickHandler() {
        //  Prevent Soundcloud from being visited, which is the default action
        // e.preventDefault();

        // //   Scroll to the clicked playlist
        // $("#carousel").scrollTo("#" + $(this).data("article"), 1000, {
        //     axis: "x0", onAfter: function () {
        //
        //         $("article.active").find("ul").animate({"height": "100%"}, 200);
        //     }
        // });
        //
        // $(".covers").scrollTo("#cover_" + $(this).data("article"), 1000, {offset: -10, axis: "x0"});
        //
        // //   Animations of image and list
        // $("article.active").find("ul").animate({"height": "0"}, 200);
        //
        // //   Add active class to the clicked menu item and the playlist
        // $("article#" + $(this).data("article")).addClass("active");
        // $("nav .active").removeClass("active");
        // $(this).parent().addClass("active");
    }

    return (
        <nav style={styles.nav} onClick={clickHandler}></nav>
    );
};

export default Navigation;
