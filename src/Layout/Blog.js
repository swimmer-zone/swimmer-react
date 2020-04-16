import React from 'react';
import Async from 'react-async';

const loadBlogs = () =>
    fetch('http://swimmer.zone/json/blogs')
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

const Blog = () => {
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

    return (
        <section id="blog">
        	<h3>Blog</h3>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 32" class="listicon">
				<path d="M34 4h-32c-1.1 0-2 0.9-2 2v20c0 1.1 0.9 2 2 2h32c1.1 0 2-0.9 2-2v-20c0-1.1-0.9-2-2-2zM20 8h4v4h-4v-4zM26 14v4h-4v-4h4zM14 8h4v4h-4v-4zM20 14v4h-4v-4h4zM8 8h4v4h-4v-4zM14 14v4h-4v-4h4zM4 8h2v4h-2v-4zM4 14h4v4h-4v-4zM6 24h-2v-4h2v4zM24 24h-16v-4h16v4zM32 24h-6v-4h6v4zM32 18h-4v-4h4v4zM32 12h-6v-4h6v4z"></path>
			</svg>

            <p>
                I'm a minimalist; throughout the years everything has shrunk, including my website. Half of the content is hosted remotely, using the SoundCloud API. The other half are blog posts, my portfolio and a couple of my favorite resources. Please use the social media buttons below to contact me about my music, blogs or any web-related topic.
            </p>

            <Async promiseFn={loadBlogs}>
                <Async.Loading>Loading...</Async.Loading>
                <Async.Fulfilled>
                    {data => {
                        return (
                            <ul>
                                {data.data.map(blog => (
                                    <li key={blog.id}>
                                        <span className="a">
                                        <a 
                                            className="blog_modal" 
                                            href={"/blogs/" + blog.id} 
                                            dataid={blog.id} 
                                            title="Posted: {blog.created_at}" 
                                            onClick={modalOpen}>{blog.title}</a></span>
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
        </section>
    );
};

export default Blog;