import React from 'react';
import Async from 'react-async';
import me from '../me.png';
import meHover from '../me-hover.png';

const loadBlogs = () =>
    fetch('https://sww.tf/blogs')
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

const loadPortfolio = () =>
    fetch('https://sww.tf/portfolio')
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

const loadLinks = () =>
    fetch('https://sww.tf/links')
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

const Footer = () => {
    return (
        <footer id="footer">
            <section className="intro">
                <h2>Hey guys, I'm Swimmer</h2>
                <p>
                    I'm phlegmatic and I'm a Scorpio, both of which relate to water. Above all I like to swim, floating far and away... in the water... 
                    in the music... and on many other journeys. With my music I like to create such journeys for others to join me, that's why I call 
                    myself Swimmer. My music is mostly ambient, dub and techno, but I'm trying to infuse some ethnic influences and even some psytrance 
                    tryouts.
                </p>
                <p>
                    I'm a minimalist; throughout the years everything has shrunk, including my website. 
                    I'm hosting my tracks myself again, after some issues with the SoundCloud API. You can still find my music there though.
                    The other half are blog posts, my portfolio and a couple of my favorite resources. 
                    Please use the social media buttons to contact me about my music, blogs or any web-related topic.
                </p>
            </section>

            <h2>Blogs</h2>
            <Async promiseFn={loadBlogs}>
                <Async.Loading>Loading...</Async.Loading>
                <Async.Fulfilled>
                    {data => {
                        return (
                            <ul>
                                {Object.keys(data).map(key => (
                                    <li key={data[key].id}>
                                        <span className="a">
                                            <a href={"/blog/" + data[key].title.toLowerCase().replace(/ /g, '-')} dataid={data[key].id} title={"Posted: " + data[key].created_at}>
                                                {data[key].title}
                                            </a>
                                        </span>
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

            <h2>Portfolio</h2>
            <Async promiseFn={loadPortfolio}>
                <Async.Loading>Loading...</Async.Loading>
                <Async.Fulfilled>
                    {data => {
                        return (
                            <ul>
                                {Object.keys(data).map(key => (
                                    <li key={data[key].id}>
                                        <span className="a">
                                            <a href={data[key].url}>{data[key].title}</a>
                                        </span>
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

            <h2>Links</h2>
            <Async promiseFn={loadLinks}>
                <Async.Loading>Loading...</Async.Loading>
                <Async.Fulfilled>
                    {data => {
                        return (
                            <ul>
                                {Object.keys(data).map(key => (
                                    <li key={data[key].id}>
                                        <span className="a">
                                            <a href={data[key].url}>{data[key].title}</a>
                                        </span>
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
                
            <p className="copy">
                &copy; Swimmer 2005&thinsp;/&thinsp;{(new Date().getFullYear())} - Version 17.2.0
            </p>
            <div className="me">
                <img src={me} alt="" />
                <img src={meHover} alt="" />
            </div>
        </footer>
    );
};

export default Footer;
