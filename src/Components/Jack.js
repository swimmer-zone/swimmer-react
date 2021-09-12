import React from 'react';

const Jack = () => {
    return (
        <svg viewBox="0 0 100 215" id="jack">
            <defs>
                <linearGradient id="gradientj" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop style={{stopColor: '#eeeeee'}} offset="0" />
                    <stop style={{stopColor: '#ffffff'}} offset="0.6" stopOpacity="1">
                        <animate attributeName="offset" dur="5s" values="0.7;0.4;0.7" repeatCount="indefinite" />
                    </stop>
                    <stop style={{stopColor: '#ffffff'}} offset="1" />
                </linearGradient>
            </defs>

            <g className="i">
                <path fill="url(#gradientj)" d="M30,20 l5,-5 h10 l5,5 l-5,13 l5,7 h-20 l5,-7"/>
                <path fill="url(#gradientj)" d="M30,45 h20 v15 h-20"/>
                <path fill="url(#gradientj)" d="M30,65 h20 v15 h-20"/>
                <path fill="#ffffff" d="M10,105 a20,20 0 0 1 20,-20 h40 v120  h-60 z"/>
            </g>
        </svg>
    );
};

export default Jack;
