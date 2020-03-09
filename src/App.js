import React from 'react';
import panorama from './panorama.png';
import './App.css';

import Logo from './Header/Logo';
import Navigation from './Music/Navigation';
import Playlist from './Music/Playlist';
import Social from './Footer/Social';
import Footer from './Footer/Footer';
import Modal from './Blog/Modal';
import Error from './Error';


const App = () => {
    var colors = {
        'purple': '#6c6eec',//	rgb(108, 110, 236) 		hsl(239,  77%,  67%)
        'purpleDark': '#5c5edc',//	rgb( 92,  94, 220)		hsl(239,  65%,  61%)
        'dark': '#4a4b50',	//	rgb( 74,  75,  80)		hsl(230,   4%,  30%)
        'quotes': '#5c5d62',//	rgb( 92,  93,  98)		hsl(230,   3%,  37%)
        'modal': '#6a6b70',	//	rgb(106, 107, 112)		hsl(230,   3%,  43%)
        'code': '#aaaaaa',	//	rgb(170, 170, 170)		hsl(  0,   0%,  67%)
        'light': '#dddddd',	//	rgb(221, 221, 221) 		hsl(  0,   0%,  87%)
        'white': '#ffffff',	//	rgb(255, 255, 255)		hsl(  0,   0%, 100%)
        'black': '#000000',	//	rgb(  0,   0,   0)		hsl(  0,   0%,   0%)

        'soundcloud': '#ff5500',	//	rgb(255,  85,   0)		hsl( 20, 100%,  50%)
        'youtube': '#e62117',	//	rgb(230,  33,  23)		hsl(  3,  82%,  50%)
        'facebook': '#3b5998',	//	rgb( 59,  89, 152) 		hsl(221,  44%,  41%)
        'instagram': '#ee583f',	//	rgb(238,  88,  63)		hsl(  9,  84%,  59%)
        'linkedin': '#0077B5',	//	rgb(  0, 119, 181)		hsl(201, 100%,  35%)
        'twitter': '#1da1f2',	//	rgb( 29, 161, 242)		hsl(203,  89%,  53%)
        'github': '#fafbfc'	//	rgb(250, 251, 252)		hsl(210,  25%,  98%)
    };

    if (false) {
        return (<Error colors={colors}/>);
    }
    return(
        <>
            <header id="menu">
                <Logo/>
                <p></p>
                <div className="covers"></div>
            </header>

            <section id="music">
                <img src={panorama} alt=""/>

                <Navigation/>
                <Playlist/>
                <Social colors={colors}/>
            </section>

            <Footer colors={colors}/>
            <Modal colors={colors}/>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.min.js"></script>
            <script src="/js/app.js"></script>
        </>
    );
};

export default App;
