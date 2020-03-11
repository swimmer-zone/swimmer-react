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

// body.blog,
// #body,
// .note-editable {
//     overflow-x:hidden;
//     overflow-y:auto;
//     background-color:$modal !important;
//     background-image:none;
//     height:100%;
//     animation:none;
//     padding:0 2vw !important;

//     p {
//         color:$light;
//     }
//     h2 {
//         color:$light;
//         font-family:$font_header;
//         font-size:72px;
//         font-weight:normal;
//         margin:40px 0;
//         text-shadow:2px 6px 8px rgba(90, 92, 220, 1);
//     }
//     h3 {
//         font-family:$font_header;
//         font-size:56px;
//         font-weight:normal;
//         color:$dark;
//         text-shadow:0 2px 2px rgba(0,0,0,0.1);
//     }
//     h4 {
//         font-size:18px;
//     }
//     figure,
//     a {
//         color:$light;
//     }

//     p > code,
//     li > code {
//         font-family:$font_code;
//         background-color:$quotes;
//         padding:0 2px;
//         color:$code;
//         font-size:16px;
//         line-height:20px;
//         letter-spacing:2px;
//         text-shadow:0 2px 2px rgba(0,0,0,0.1);
//         box-shadow:inset 0 2px 2px 2px rgba(0,0,0,0.05);
//     }
//     blockquote {
//         border-left:4px solid $quotes;
//         margin-left:20px;
//         padding-left:20px;
//         position:relative;

//         &:before {
//             color:$quotes;
//             content:"\201D";
//             speak:none;
//             font-style:normal;
//             font-weight:bold;
//             text-transform:none;
//             line-height:1;
//             font-size:56px;
//             left:100%;
//             padding-left:20px;
//             top:0;
//             position:absolute;
//         }
//     }
//     sourcecode,
//     pre {
//         font-family:$font_code;
//         white-space:pre;
//         background-color:$quotes;
//         margin:20px;
//         padding:20px;
//         display:block;
//         min-width:80%;
//         max-width:90%;
//         font-size:16px;
//         line-height:20px;
//         letter-spacing:2px;
//         position:relative;
//         color:$code;
//         overflow-x:scroll;
//         text-shadow:0 2px 2px rgba(0,0,0,0.1);
//         box-shadow:inset 0 2px 2px 2px rgba(0,0,0,0.05);
//     }
//     sourcecode:after,
//     code:after {
//         content:attr(language);
//         display:block;
//         position:absolute;
//         right:20px;
//         top:20px;
//         font-size:32px;
//         color:$modal;
//         font-weight:bold;
//         text-transform:uppercase;
//     }
//     table {
//         width:80%;
//         background-color:$quotes;
//         margin:20px;

//         td {
//             padding:5px;
//             background-color:$modal;
//         }
//     }
//     p {
//         line-height:24px;
//         margin-bottom:32px;
//     }
//     iframe {
//         border:0;
//         display:block;
//         margin-bottom:10px;
//     }
//     img {
//         max-width:600px;
//         margin-bottom:10px;
//         box-shadow:0 2px 2px 2px rgba(0,0,0,0.1);
//     }
//     table {
//         table-layout:fixed;
//     }
//     sup a {
//         color:$purple !important;
//         padding-left:1px;
//     }
//     hr {
//         box-shadow:-6px -6px 0 0 $purple;
//         border:1px solid $purple;
//         margin:60px auto 80px;
//         width:60%;
//     }
//     ul li:nth-of-type(10n) {
//         margin-bottom:25px;
//     }

//     ::-webkit-scrollbar-thumb,
//     ::-webkit-scrollbar-button {
//         border:2px solid $modal !important;
//     }
//     ::-webkit-scrollbar,
//     ::-webkit-scrollbar-track,
//     ::-webkit-scrollbar-track-piece,
//     ::-webkit-scrollbar-corner,
//     ::-webkit-scrollbar-thumb:window-inactive {
//         background:$modal !important;
//     }
// }