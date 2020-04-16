import React from 'react';
import panorama from './panorama.png';

import Logo from './Layout/Logo';
import Social from './Layout/Social';
import Modal from './Layout/BlogModal';
import Error from './Error';

import Music from './Layout/Music';
import Blog from './Layout/Blog';
import Links from './Layout/Links';

const App = () => {

    var colors = {
        'purple': '#6c6eec',
        'purpleDark': '#5c5edc',
        'dark': '#4a4b50',
        'quotes': '#5c5d62',
        'modal': '#6a6b70',
        'code': '#aaaaaa',
        'light': '#dddddd',
        'white': '#ffffff',
        'black': '#000000',

        'soundcloud': '#ff5500',
        'youtube': '#e62117',
        'facebook': '#3b5998',
        'instagram': '#ee583f',
        'linkedin': '#0077B5',
        'twitter': '#1da1f2',
        'github': '#fafbfc'
    };

    if (false) {
        return (<Error/>);
    }
    return(
        <>
            <Logo/>
            <Music/>
            <Blog/>
            <Links/>

            <footer>
                <Social/>
                <img src={panorama} alt="" className="panorama"/>
                <p>&copy; Swimmer 2005&thinsp;/&thinsp;2020 - Version 17.0.0</p>
            </footer>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.min.js"></script>
            <script src="/js/app.js"></script>
        </>
    );
};

export default App;
