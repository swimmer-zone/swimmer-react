import React from 'react';
import '../assets/components/logo.scss';

const Logo = () => {
    return (<>
        <svg viewBox="0 0 800 290" id="logo">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop style={{stopColor: '#eeeeee'}} offset="0" />
                    <stop style={{stopColor: '#ffffff'}} offset="0.6" stopOpacity="1">
                        <animate attributeName="offset" dur="5s" values="0.7;0.4;0.7" repeatCount="indefinite" />
                    </stop>
                    <stop style={{stopColor: '#ffffff'}} offset="1" />
                </linearGradient>
            </defs>

            <path className="s" fill="url(#gradient)" d=" M10,130 a20,20 0 0 1 20,-20 h80 v20 h-60 v10 h60 v50 l-20,20 h-80 v-20 h40 v-20 h-40 z" />
            <path className="w" fill="url(#gradient)" d="M115,130 a20,20 0 0 1 20,-20 h10 v50 h20 v-30 h5 v-20 h1 v20 h4 v30 h20 v-50 h50 v80 l-20,20 h-110 z" />
            <g className="i">
                <path fill="url(#gradient)" d="M270,45 l5,-5 h10 l5,5 l-5,13 l5,7 h-20 l5,-7"/>
                <path fill="url(#gradient)" d="M270,70 h20 v15 h-20"/>
                <path fill="url(#gradient)" d="M270,90 h20 v15 h-20"/>
                <path fill="url(#gradient)" d="M250,130 a20,20 0 0 1 20,-20 h40 v80 l-20,20 h-40 z"/>
            </g>
            <path className="m" fill="url(#gradient)" d="M315,130 a20,20 0 0 1 20,-20 h110 v80 l-20,20 h-30 v-50 h-20 v30 h-4 v20 h-1 v-20 h-5 v-30 h-20 v50 h-30 z" />
            <path className="m" fill="url(#gradient)" d="M450,130 a20,20 0 0 1 20,-20 h110 v80 l-20,20 h-30 v-50 h-20 v30 h-4 v20 h-1 v-20 h-5 v-30 h-20 v50 h-30 z" />
            <path className="e" fill="url(#gradient)" d="M585,130 a20,20 0 0 1 20,-20 h80 v60 h-40 v-30 h20 v-10 h-20 v60 h40 h0 l-20,20 h-80 z" />
            <path className="r" fill="url(#gradient)" d="M690,130 a20,20 0 0 1 20,-20 h80 v20 h-40 v80 h-60 z" />
        </svg>


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
    </>);
}

export default Logo;