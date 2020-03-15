import React from 'react';
// import Frame from '../Blog/Frame';

const Modal = (colors) => {
    var styles = {
        modal: {
            backgroundColor: colors.modal,
            boxShadow: '0 4px 10px 5px rgba(0,0,0,0.25), 0 10px 15px 10px rgba(0,0,0,0.15), 0 16px 20px 15px rgba(0,0,0,0.1), 0 22px 25px 20px rgba(0,0,0,0.05)',
            position: 'fixed',
            top: '10vh',
            right: '19vw',
            bottom: '10vh',
            left: '19vw',
            display: 'none',
            zIndex: '100'
        },
        avatar: {
            backgroundColor: colors.modal,
            boxShadow: '0 6px 12px 6px rgba(0,0,0,0.2)',
            position: 'fixed',
            top: '11.6vh',
            left: '20vw',
            width: '180px',
            height: '180px',
            padding: '10px',
            display: 'none',
            zIndex: '99'
        },
        iframe: {
            opacity: '0'
        },
        img: {
            marginLeft: '0',
            zIndex: 99
        }
    };

    //     iframe.animate({'opacity':'1'}, 2000);
    //     $("#avatar").append(avatar).show().animate({'margin-left':'-184px'}, 2000, function() {
    //         $(this).css({'z-index':'101'});
    //     });

    const modalClose = (e) => {
    //     $("#modal").empty().hide();
    //     $("#avatar").empty().hide().css();
    };

    return(
        <>
            <section style={styles.modal}>
                {/* <iframe style={styles.iframe} src="blog_url" title=""></iframe> */}
                <button onClick={modalClose} value="&times;"/>
            </section>
            
            <figure style={styles.avatar}>
                <img style={styles.img} src="/storage' + blog_url.replace('blogs', 'www') + '.png" alt=""/>
            </figure>
        </>
    );
};

export default Modal;
