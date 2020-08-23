import React from 'react';
import Async from 'react-async';
import { Bounce } from 'react-reveal';

const loadBlogs = () =>
    fetch('http://swimmer.zone/json/blogs')
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

const loadLinks = () =>
    fetch('http://swimmer.zone/json/links')
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

const Footer = () => {
    return (
        <footer>
            <section className="intro">
                <h2>Blog & Links</h2>
                <p>
                    I'm a minimalist; throughout the years everything has shrunk, including my website. 
                    I'm hosting my tracks myself again, after some issues with the SoundCloud API. You can still find my music there though.
                    The other half are blog posts, my portfolio and a couple of my favorite resources. 
                    Please use the social media buttons to contact me about my music, blogs or any web-related topic.<br/>
                    <strong>Todo:</strong> Play next tracks &mdash; Portraits &mdash; Slug &mdash; Deployment
                </p>
            </section>

            <section className="links">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 32" className="icon">
                    <path d="M34 4h-32c-1.1 0-2 0.9-2 2v20c0 1.1 0.9 2 2 2h32c1.1 0 2-0.9 2-2v-20c0-1.1-0.9-2-2-2zM20 8h4v4h-4v-4zM26 14v4h-4v-4h4zM14 8h4v4h-4v-4zM20 14v4h-4v-4h4zM8 8h4v4h-4v-4zM14 14v4h-4v-4h4zM4 8h2v4h-2v-4zM4 14h4v4h-4v-4zM6 24h-2v-4h2v4zM24 24h-16v-4h16v4zM32 24h-6v-4h6v4zM32 18h-4v-4h4v4zM32 12h-6v-4h6v4z"></path>
                </svg>

                <Async promiseFn={loadBlogs}>
                    <Async.Loading>Loading...</Async.Loading>
                    <Async.Fulfilled>
                        {data => {
                            return (
                                <Bounce cascade>
                                    <ul>
                                        {data.data.map(blog => (
                                            <li key={blog.id}>
                                                <span className="a">
                                                    <a href={"/blog/" + blog.id} dataid={blog.id} title={"Posted: " + blog.created_at}>
                                                        {blog.title}
                                                    </a>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </Bounce>
                            )
                        }}
                    </Async.Fulfilled>
                    <Async.Rejected>
                        {error => `Something went wrong: ${error.message}`}
                    </Async.Rejected>
                </Async>
            </section>
            
            <section className="links">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="icon">
                    <path d="M0 2v20h32v-20h-32zM30 20h-28v-16h28v16zM21 24h-10l-1 4-2 2h16l-2-2z"></path>
                </svg>

                <Async promiseFn={loadLinks}>
                    <Async.Loading>Loading...</Async.Loading>
                    <Async.Fulfilled>
                        {data => {
                            return (
                                <Bounce cascade>
                                    <ul>
                                        {data.data.map(link => (
                                            <li key={link.id}>
                                                <span className="a">
                                                    <a href={link.url}>{link.title}</a>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </Bounce>
                            )
                        }}
                    </Async.Fulfilled>
                    <Async.Rejected>
                        {error => `Something went wrong: ${error.message}`}
                    </Async.Rejected>
                </Async>
            </section>
            <p className="copy">
                &copy; Swimmer 2005&thinsp;/&thinsp;2020 - Version 17.0.2<br />
                &copy; Header Movie from <a href="https://vimeo.com/103849476">https://vimeo.com/103849476</a>
            </p>
        </footer>
    );
};

export default Footer;
