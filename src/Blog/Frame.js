import React from 'react';

const Frame = (colors) => {
    var styles = {
        iframe: {
            border: '0',
            width: '62vw',
            height: '80vh',
            padding: '2vh 2vw'
        },
        a: {
            borderRadius: '50%',
            backgroundColor: colors.purple,
            width: '40px',
            height: '40px',
            color: colors.dark,
            fontSize :'32px',
            fontWeight: 'bold',
            display: 'block',
            textAlign: 'center',
            lineHeight: '42px',
            cursor: 'pointer',
            position: 'absolute',
            top: '-18px',
            right: '-18px',
            boxShadow: '0 6px 12px 6px rgba(0,0,0,0.1)'
        },
        ahover: {
            color: colors.purple,
            backgroundColor: colors.dark
        },
        aafter: {
            position: 'absolute',
            top: '10px',
            left: '10px',
            bottom: '10px',
            right: '10px',
            content: ''
        },
        img: {
            width: '160px'
        }
    };

    return(
        <>
            <section style={styles.modal}></section>
            <figure style={styles.avatar}></figure>
        </>
    );
};

export default Frame;
