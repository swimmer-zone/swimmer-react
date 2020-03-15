import React from 'react';
import Async from 'react-async';

const loadBlogs = () =>
    fetch('http://swimmer.zone/json/blogs')
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

const loadLinks = () =>
    fetch('http://swimmer.zone/json/links')
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

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

    const modalOpen = (e) => {
        console.log(e.target.dataid);
    //     if ($("#modal").is(':empty')) {
    //
    //         var closeButton = $('<a id="modal_close">&times;</a>'),
    //             iframe = $('<iframe src="' + blog_url + '"></iframe>').css({'opacity':'0'}),
    //             avatar = $('<img src="/storage' + blog_url.replace('blogs', 'www') + '.png" alt="">');
    //
    //         $("#modal").append(closeButton, iframe).show();
    //         iframe.animate({'opacity':'1'}, 2000);
    //         $("#avatar").append(avatar).show().animate({'margin-left':'-184px'}, 2000, function() {
    //             $(this).css({'z-index':'101'});
    //         });
    //
    //         closeButton.on("click", modalClose);
    //     }
    };

    // const modalClose = (e) => {
    // //     $("#modal").empty().hide();
    // //     $("#avatar").empty().hide().css({'margin-left':'0', 'z-index':'99'});
    // };

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


            <Async promiseFn={loadBlogs}>
                <Async.Loading>Loading...</Async.Loading>
                <Async.Fulfilled>
                    {data => {
                        return (
                            <ul style={styles.ul}>
                                {data.data.map(blog => (
                                    <li style={styles.li} key={blog.id}>
                                        <a 
                                            className="blog_modal" 
                                            href={"/blogs/" + blog.id} 
                                            dataid={blog.id} 
                                            title="Posted: {blog.created_at}" 
                                            onClick={modalOpen}>{blog.title}</a>
                                    </li>
                                ))}
                            </ul>
                        )
                    }}
                </Async.Fulfilled>
                <Async.Rejected>
                    {error => `Something went wrong: ${error.message}`}
                </Async.Rejected>
            </Async>
            <br/>

            <svg style={styles.listicon} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path style={styles.path} d="M0 2v20h32v-20h-32zM30 20h-28v-16h28v16zM21 24h-10l-1 4-2 2h16l-2-2z"></path>
            </svg>

            <Async promiseFn={loadLinks}>
                <Async.Loading>Loading...</Async.Loading>
                <Async.Fulfilled>
                    {data => {
                        return (
                            <ul style={styles.ul}>
                                {data.data.map(link => (
                                    <li style={styles.li} key={link.id}>
                                        <a href={link.url}>{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                        )
                    }}
                </Async.Fulfilled>
                <Async.Rejected>
                    {error => `Something went wrong: ${error.message}`}
                </Async.Rejected>
            </Async>
            <br/>

            <p style={styles.copy}>&copy; Swimmer 2005&thinsp;/&thinsp;2019 - Version 17.0.0</p>
        </footer>
    );
};

export default Footer;

// footer {
//     a {
//         border-bottom:0;

//         &:before {
//             content:"";
//             position:absolute;
//             width:100%;
//             height:1px;
//             bottom:0;
//             left:0;
//             background-color:$dark;
//             visibility:hidden;
//             transform:scaleX(0);
//             transition:all 0.3s ease-in-out;
//         }
//         &:hover:before {
//             visibility:visible;
//             transform:scaleX(0.7);
//         }
//     }
//     ul:nth-of-type(2) li:nth-of-type(4):after {
//         content:"\a";
//         white-space:pre;
//     }
//     ul,
//     p,
//     .listicon {
//         opacity:0;
//         transition:opacity 1s ease-in-out;
//     }

//     &:hover {
//         top:40vh;
//         transition:all .6s ease-in-out;
//         box-shadow:0 4px 10px 5px rgba(0,0,0,0.25), 0 10px 15px 10px rgba(0,0,0,0.15), 0 16px 20px 15px rgba(0,0,0,0.1), 0 22px 25px 20px rgba(0,0,0,0.05);

//         polygon {
//             fill:$purple;
//             transition:all .2s ease-out;

//             &.arrow-bottom {
//                 transform:translateY(-18px);
//             }
//             &.arrow-top {
//                 transform:translateY(18px);
//             }
//         }
//         ul,
//         p,
//         .listicon {
//             opacity:1;
//             transition-delay:2s;
//             transition:opacity 1s ease-in-out;
//         }
//     }
// }

// section > img {
//     position:absolute;
//     left:0;
//     bottom:0;
//     right:0;
//     width:100vw;
//     z-index:2;
// }
// #up {
//     display:block;
//     width:4vw;
//     height:4vw;
//     position:relative;
//     top:-12vh;
//     left:76vw;
//     cursor:pointer;

//     svg {
//         width:3vw;
//         height:3vw;
//         transform:rotate(180deg);
//     }
//     polygon {
//         fill:$white;
//         transition:all .2s ease-out;

//         &.arrow-middle {
//           opacity: 0.75;
//         }
//         &.arrow-top {
//           opacity: 0.5;
//         }
//     }
// }
// svg {
//     width:32px;
//     height:32px;
//     cursor:pointer;

//     path {
//         fill:$light;
//         transition:fill .3s ease-in-out;
//     }
// }
