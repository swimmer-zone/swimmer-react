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

    return (
        <nav style={styles.nav}></nav>
    );
};

export default Navigation;
