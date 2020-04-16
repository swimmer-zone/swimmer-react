import React from 'react';
// import Frame from '../Blog/Frame';

const Modal = () => {
    //     iframe.animate({'opacity':'1'}, 2000);
    //     $("#avatar").append(avatar).show().animate({'margin-left':'-184px'}, 2000, function() {
    //         $(this).css({'z-index':'101'});
    //     });

    const modalClose = (e) => {
    //     $("#modal").empty().hide();
    //     $("#avatar").empty().hide().css();
    };

    return(
        <>
            <section>
                {/* <iframe src="blog_url" title=""></iframe> */}
                <button onClick={modalClose} value="&times;"/>
            </section>
            
            <figure>
                <img src="/storage' + blog_url.replace('blogs', 'www') + '.png" alt=""/>
            </figure>
        </>
    );
};

export default Modal;
