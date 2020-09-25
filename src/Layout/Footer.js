import React from 'react';
import Async from 'react-async';
import { Bounce } from 'react-reveal';
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
        <footer>
            <section className="intro">
                <h2>Blog & Links</h2>
                <p>
                    I'm a minimalist; throughout the years everything has shrunk, including my website. 
                    I'm hosting my tracks myself again, after some issues with the SoundCloud API. You can still find my music there though.
                    The other half are blog posts, my portfolio and a couple of my favorite resources. 
                    Please use the social media buttons to contact me about my music, blogs or any web-related topic.
                </p>
            </section>

            <section className="links">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 32" className="icon" title="Blog">
                    <path d="M28 8v-4h-28v22c0 1.105 0.895 2 2 2h27c1.657 0 3-1.343 3-3v-17h-4zM26 26h-24v-20h24v20zM4 10h20v2h-20zM16 14h8v2h-8zM16 18h8v2h-8zM16 22h6v2h-6zM4 14h10v10h-10z"></path>
                </svg>

                <Async promiseFn={loadBlogs}>
                    <Async.Loading>Loading...</Async.Loading>
                    <Async.Fulfilled>
                        {data => {
                            return (
                                <Bounce cascade>
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
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="icon" title="Portfolio">
                    <path d="M22 4h-4v-2c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v2h-4v4h16v-4zM16 4h-4v-1.996c0.001-0.001 0.002-0.002 0.004-0.004h3.993c0.001 0.001 0.003 0.002 0.004 0.004v1.996zM26 10v-5c0-0.55-0.45-1-1-1h-2v2h1v4h-6l-6 6v8h-8v-18h1v-2h-2c-0.55 0-1 0.45-1 1v20c0 0.55 0.45 1 1 1h9v6h20v-22h-6zM18 12.828v3.172h-3.172l3.172-3.172zM30 30h-16v-12h6v-6h10v18z"></path>
                </svg>

                <Async promiseFn={loadPortfolio}>
                    <Async.Loading>Loading...</Async.Loading>
                    <Async.Fulfilled>
                        {data => {
                            return (
                                <Bounce cascade>
                                    <ul>
                                        {Object.keys(data).map(key => (
                                            <li key={data[key].id}>
                                                <span className="a">
                                                    <a href={data[key].url}>{data[key].title}</a>
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
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="icon" title="Links">
                    <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 30c-1.967 0-3.84-0.407-5.538-1.139l7.286-8.197c0.163-0.183 0.253-0.419 0.253-0.664v-3c0-0.552-0.448-1-1-1-3.531 0-7.256-3.671-7.293-3.707-0.188-0.188-0.442-0.293-0.707-0.293h-4c-0.552 0-1 0.448-1 1v6c0 0.379 0.214 0.725 0.553 0.894l3.447 1.724v5.871c-3.627-2.53-6-6.732-6-11.489 0-2.147 0.484-4.181 1.348-6h3.652c0.265 0 0.52-0.105 0.707-0.293l4-4c0.188-0.188 0.293-0.442 0.293-0.707v-2.419c1.268-0.377 2.61-0.581 4-0.581 2.2 0 4.281 0.508 6.134 1.412-0.13 0.109-0.256 0.224-0.376 0.345-1.133 1.133-1.757 2.64-1.757 4.243s0.624 3.109 1.757 4.243c1.139 1.139 2.663 1.758 4.239 1.758 0.099 0 0.198-0.002 0.297-0.007 0.432 1.619 1.211 5.833-0.263 11.635-0.014 0.055-0.022 0.109-0.026 0.163-2.541 2.596-6.084 4.208-10.004 4.208z"></path>
                </svg>

                <Async promiseFn={loadLinks}>
                    <Async.Loading>Loading...</Async.Loading>
                    <Async.Fulfilled>
                        {data => {
                            return (
                                <Bounce cascade>
                                    <ul>
                                        {Object.keys(data).map(key => (
                                            <li key={data[key].id}>
                                                <span className="a">
                                                    <a href={data[key].url}>{data[key].title}</a>
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
            <div className="me">
                <img src={me} alt="" />
                <img src={meHover} alt="" />
            </div>
            <p className="copy">
                &copy; Swimmer 2005&thinsp;/&thinsp;{(new Date().getFullYear())} - Version 17.0.7<br />
                &copy; Header Movie from <a href="https://vimeo.com/103849476">https://vimeo.com/103849476</a>
            </p>
        </footer>
    );
};

export default Footer;
