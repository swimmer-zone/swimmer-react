import React from 'react';

import Logo from '../Header/Logo';
import Cover from '../Header/Cover';

const Header = (colors) => {
    var styles = {
        header: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        p: {
            width: '44vw',
            margin: '9vh 2vw 2vh 2vw',
            display: 'inline-block',
            verticalAlign: 'top'
        },
        logo: {
            width: '32vw',
            margin: '2vh 2vw',
            display: 'inline-block'
        },
        cover: {
            overflow: 'hidden',
            width: '14vw',
            display: 'inline-block',
            height: 'calc(4vh + 150px)',
            verticalAlign: 'top',
            marginTop: '5vh'
        },
        img: {
            width: '150px',
            display: 'inline-block',
            boxSizing: 'border-box',
            margin: '1vh 3vw 3vh 3vw',
            boxShadow: '0 4px 10px 5px rgba(0, 0, 0, 0.15), 0 10px 15px 10px rgba(0, 0, 0, 0.05), 0 16px 20px 15px rgba(0, 0, 0, 0.05), 0 22px 25px 20px rgba(0, 0, 0, 0.02)',
            borderRadius: '50%'
        }
    };

    return(
        <header style={styles.header}>
            <Logo style={styles.logo} colors={colors}/>
            <p style={styles.p}></p>
            <Cover style={styles.cover}/>
        </header>
    );
};

export default Header;
