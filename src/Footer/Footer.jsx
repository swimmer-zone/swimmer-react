import React from 'react';

const Footer = (colors) => {
    var styles = {
        footer: {
            top: '90vh',
            display: 'block',
            position: 'absolute',
            width: '80vw',
            left: '10vw',
            height: '60vh',
            backgroundColor: colors.purple,
            transition: 'all 1s ease-in-out',
            marginTop: '10vh',
            boxShadow:'0 4px 10px 5px rgba(0,0,0,0.05), 0 10px 15px 10px rgba(0,0,0,0.03), 0 16px 20px 15px rgba(0,0,0,0.02), 0 22px 25px 20px rgba(0,0,0,0.01)',
            zIndex: 2
        },
        p: {
            width: '76vw',
            margin: '-16px auto 22px auto',
            display: 'block',
            textAlign: 'left',
            color: colors.light
        },
        listicon: {
            display:"inline-block",
            width:'4vw',
            height:'4vw',
            margin:'20px 0 0 2vw'
        },
        path: {
            fill: colors.dark
        },
        ul: {
            width: '72vw',
            display: 'inline-block',
            verticalAlign: 'top'
        },
        li: {
            listStyle: 'none',
            display: 'inline-block',
            padding: '4px 10px',
            margin: '2px',
            textAlign: 'center',
            position: 'relative'
        },
        copy: {
            color: colors.dark,
            fontSize: '12px',
            position: 'relative',
            bottom: '4px',
            left: '64vw',
            marginTop: '20px'
        }
    };

    var blogs = {
        19: {
            'title': 'Boom',
            'created_at': '01-09-2018'
        },
        18: {
            'title': 'Audio Resources',
            'created_at': '03-01-2018'
        },
        17: {
            'title': 'xkcd',
            'created_at': '26-12-2017'
        },
        16: {
            'title': 'CodeIgniter',
            'created_at': '22-01-2016'
        },
        15: {
            'title': 'SoundCloud',
            'created_at': '20-06-2015'
        },
        14: {
            'title': 'Bookmarks',
            'created_at': '26-11-2014'
        },
        13: {
            'title': 'Aurora VPS',
            'created_at': '03-03-2014'
        },
        12: {
            'title': 'Conky',
            'created_at': '17-04-2013'
        },
        11: {
            'title': 'SQL Joins',
            'created_at': '08-11-2010'
        },
        10: {
            'title': 'Design Patterns',
            'created_at': '17-10-2010'
        },
        9: {
            'title': 'Casemod',
            'created_at': '18-07-2009'
        },
        8: {
            'title': 'VPS Tutorial',
            'created_at': '08-06-2009'
        },
        7: {
            'title': 'Fantastic Contraption',
            'created_at': '12-01-2009'
        },
        6: {
            'title': 'On My Way',
            'created_at': '20-05-2008'
        },
        5: {
            'title': 'Fire',
            'created_at': '04-01-2008'
        },
        4: {
            'title': 'Equalizer',
            'created_at': '29-08-2007'
        },
        3: {
            'title': 'One Terabyte',
            'created_at': '09-09-2006'
        },
        2: {
            'title': 'Clocky',
            'created_at': '17-06-2006'
        },
        1: {
            'title': 'Some history',
            'created_at': '29-04-2006'
        }
    };

    var links = {
        'http://blackhole.voyage/': 'Black Hole',
        'http://weerbaarworden.nl/': 'Weerbaar Worden',
        'http://rijles7sterren.nl/': '7 Sterren',
        'http://swimmer.zone/projects/record/': 'Dub of the Record',
        'http://swimmer.zone/projects/index/': 'Index',
        'http://swimmer.zone/projects/identity/': 'Identity',
        'http://swimmer.zone/projects/solari/': 'Solari',
        'http://tympanus.net/codrops/': 'Codrops',
        'http://css-tricks.com/': 'CSS Tricks',
        'https://caniuse.com/': 'Can I Use',
        'http://www.smashingmagazine.com/': 'Smashing Magazine',
        'http://blog.iusmentis.com/': 'Arnoud Engelfriet',
        'http://tweakers.net/': 'Tweakers',
        'http://gathering.tweakers.net/': 'Gathering of Tweakers',
        'http://tweakblogs.net/': 'Tweakblogs',
        'http://xkcd.com/': 'xkcd',
        'http://what-if.xkcd.com/': 'What If?',
        'http://www.speld.nl/': 'De Speld',
        'http://www.yankodesign.com/': 'Yanko Design',
        'https://freesound.org': 'Freesound',
        'https://www.looperman.com/': 'Looperman',
        'https://nextgtrgod.github.io/webaudio-synth/': 'Web Synth',
        'http://psytranceguide.com/': 'Psytrance Guide',
        'https://codepen.io/jcoulterdesign/full/ZxXbeP/': 'Solar System',
        'https://www.goabase.net/': 'Goa Base',
        'https://ektoplazm.com/section/free-music': 'Ektoplazm',
        'http://everynoise.com/': 'Every Noise',
        'https://dirpy.com/': 'Dirpy',
        'https://www.w3schools.com/colors/colors_converter.asp': 'Color Converter'
    };

    const renderedBlogs = Object.keys(blogs).map(key =>
        <li style={styles.li}><a className="blog_modal" href={"/blogs/" + key} title="Posted: {blogs[key].created_at}">{blogs[key].title}</a></li>
    );
    const renderedLinks = Object.keys(blogs).map(key =>
        <li style={styles.li}><a href={key}>{links[key]}</a></li>
    );

    return(
        <footer style={styles.footer}>
            <button id="up">
                <svg id="more-arrows" viewBox="0 0 75 65">
                    <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
                    <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
                    <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
                </svg>
            </button>

            <p style={styles.p}>
                I'm a minimalist; throughout the years everything has shrunk, including my website. Half of the content is hosted remotely, using the SoundCloud API. The other half are blog posts, my portfolio and a couple of my favorite resources. Please use the social media buttons below to contact me about my music, blogs or any web-related topic.
            </p>

            <svg style={styles.listicon} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 32">
                <path style={styles.path} d="M34 4h-32c-1.1 0-2 0.9-2 2v20c0 1.1 0.9 2 2 2h32c1.1 0 2-0.9 2-2v-20c0-1.1-0.9-2-2-2zM20 8h4v4h-4v-4zM26 14v4h-4v-4h4zM14 8h4v4h-4v-4zM20 14v4h-4v-4h4zM8 8h4v4h-4v-4zM14 14v4h-4v-4h4zM4 8h2v4h-2v-4zM4 14h4v4h-4v-4zM6 24h-2v-4h2v4zM24 24h-16v-4h16v4zM32 24h-6v-4h6v4zM32 18h-4v-4h4v4zM32 12h-6v-4h6v4z"></path>
            </svg>

            <ul style={styles.ul}>
                {renderedBlogs}
            </ul><br/>

            <svg style={styles.listicon} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path style={styles.path} d="M0 2v20h32v-20h-32zM30 20h-28v-16h28v16zM21 24h-10l-1 4-2 2h16l-2-2z"></path>
            </svg>

            <ul style={styles.ul}>
                {renderedLinks}
            </ul><br/>

            <p style={styles.copy}>&copy; Swimmer 2005&thinsp;/&thinsp;2019 - Version 17.0.0</p>

        </footer>
    );
};

export default Footer;
