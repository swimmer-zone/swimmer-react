import React from 'react';
import Frame from '../Blog/Frame';

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
        }
    };

    return(
        <>
            <section style={styles.modal}></section>
            <Frame/>
            <figure style={styles.avatar}></figure>
        </>
    );
};

export default Modal;
