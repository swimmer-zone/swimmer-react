import React from 'react';

const Logo = (colors) => {
    var styles = {
        logo: {
            width: '28vw',
            maxWidth: '480px',
            margin: '3vh 2vw 4vh',
            display: 'inline-block',
            height: 'auto'
        },
        dark: {
            stopColor: '#2c2ebc'
        },
        light: {
            stopColor: '#7c7efc'
        },
        purple: {
            stopColor: colors.purple
        },
        black: {
            fill: '#00000080'
        }
    };

    return(
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 830 290" style={styles.logo}>
            <defs>
                <linearGradient id="gradient_1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop style={styles.dark} offset="0"/>
                    <stop style={styles.light} offset="0.6">
                        <animate attributeName="offset" dur="7s" values="0.7;0.4;0.7" repeatCount="indefinite"/>
                    </stop>
                    <stop style={styles.purple} offset="1"/>
                </linearGradient>
                <linearGradient id="gradient_2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop style={styles.dark} offset="0"/>
                    <stop style={styles.light} offset="0.6">
                        <animate attributeName="offset" dur="5s" values="0.6;0.4;0.6" repeatCount="indefinite"/>
                    </stop>
                    <stop style={styles.purple} offset="1"/>
                </linearGradient>
                <linearGradient id="gradient_3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop style={styles.dark} offset="0"/>
                    <stop style={styles.light} offset="0.6">
                        <animate attributeName="offset" dur="3s" values="0.6;0.4;0.6" repeatCount="indefinite"/>
                    </stop>
                    <stop style={styles.purple} offset="1"/>
                </linearGradient>
                <filter id="dropshadow" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feComponentTransfer in="SourceAlpha">
                        <feFuncA type="linear" slope="0.6"/>
                        <feFuncR type="discrete" tableValues="0.7"/>
                        <feFuncG type="discrete" tableValues="0.3"/>
                        <feFuncB type="discrete" tableValues="0.3"/>
                    </feComponentTransfer>
                    <feGaussianBlur stdDeviation="4"/>
                    <feOffset dx="6" dy="6" result="shadow"/>
                    <feComposite in="SourceGraphic" in2="shadow" operator="over"/>
                </filter>
            </defs>
            <polygon fill="url(#gradient_1)" filter="url(#dropshadow)" className="s"
                     points="10,110 110,110 110,130 50,130 50,140 110,140 110,190 90,210 10,210 10,190 50,190 50,170 10,170"/>
            <polygon fill="url(#gradient_2)" filter="url(#dropshadow)" className="w"
                     points="120,110 150,110 150,160 170,160 170,130 175,130 175,110 176,110 176,130 180,130 180,110 180,160 200,160 200,110 250,110 250,190 230,210 120,210"/>
            <g className="i">
                <polygon style={styles.black} points="280,45 285,40 295,40 300,45 295,58 300,65 280,65 285,58"/>
                <polygon style={styles.black} points="280,70 300,70 300,85 280,85"/>
                <polygon style={styles.black} points="280,90 300,90 300,105 280,105"/>
                <polygon fill="url(#gradient_1)" filter="url(#dropshadow)"
                         points="260,110 320,110 320,190 300,210 260,210"/>
            </g>
            <polygon fill="url(#gradient_3)" filter="url(#dropshadow)" className="m"
                     points="330,110 460,110 460,190 440,210 410,210 410,160 390,160 390,190 386,190 386,210 385,210 385,190 380,190 380,160 360,160 360,210 330,210"/>
            <polygon fill="url(#gradient_2)" filter="url(#dropshadow)" className="m"
                     points="470,110 600,110 600,190 580,210 550,210 550,160 530,160 530,190 526,190 526,210 525,210 525,190 520,190 520,160 500,160 500,210 470,210"/>
            <polygon fill="url(#gradient_1)" filter="url(#dropshadow)" className="e"
                     points="610,110 710,110 710,170 670,170 670,140 690,140 690,130 670,130 670,190 710,190 710,190 690,210 610,210"/>
            <polygon fill="url(#gradient_2)" filter="url(#dropshadow)" className="e"
                     points="720,110 820,110 820,130 780,130 780,210 720,210"/>
        </svg>
    );
};

export default Logo;
