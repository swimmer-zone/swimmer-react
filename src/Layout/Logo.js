import React from 'react';

const Logo = () => {
    return(
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 100 215" id="logo">
            <defs>
                <filter id="dropshadow" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feComponentTransfer in="SourceAlpha">
                        <feFuncA type="linear" slope="0.5"/>
                        <feFuncR type="discrete" tableValues="0.7"/>
                        <feFuncG type="discrete" tableValues="0.7"/>
                        <feFuncB type="discrete" tableValues="0.9"/>
                    </feComponentTransfer>
                    <feGaussianBlur stdDeviation="1"/>
                    <feOffset dx="4" dy="4" result="shadow"/>
                    <feComposite in="SourceGraphic" in2="shadow" operator="over"/>
                </filter>
            </defs>
            <g className="i">
                <path filter="url(#dropshadow)" d="M30,20 l5,-5 h10 l5,5 l-5,13 l5,7 h-20 l5,-7"/>
                <path filter="url(#dropshadow)" d="M30,45 h20 v15 h-20"/>
                <path filter="url(#dropshadow)" d="M30,65 h20 v15 h-20"/>
                <path filter="url(#dropshadow)" d="M10,95 h60 v80 l-20,20 h-40 z"/>
            </g>
        </svg>
    );
};

export default Logo;
