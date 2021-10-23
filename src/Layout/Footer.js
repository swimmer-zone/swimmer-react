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
			
			<div className="social footer">
				<a href="https://www.weprovide.com" title="WeProvide">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 64" className="weprovide">
						<polygon points="54.011 .433 58.432 8.084 112.319 8.084 116.742 .433" />
						<polygon points="62.855 15.737 67.277 23.388 103.474 23.388 107.898 15.737" />
						<polygon points="71.701 31.042 76.122 38.694 94.628 38.694 99.054 31.042" />
						<polygon points="36.317 .434 58.431 38.695 67.276 38.695 45.164 .434" />
						<polygon points="18.633 .434 40.746 38.695 49.59 38.695 27.477 .434" />
						<polygon points=".943 .434 23.055 38.695 31.9 38.695 9.787 .434" />
					</svg>
				</a>

				<a href="https://iodigital.com" title="iO">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 56" className="io">
						<path d="M12.235 20.574L0 48.257l14.129 6.34L20.07 41.15c3.477-7.869-.034-17.079-7.837-20.576zM4.39 0c-3.471 7.862.04 17.072 7.842 20.575L18.525 6.34 4.39 0zm49.194 15.75c7.34 0 13.314 6.019 13.314 13.413 0 7.395-5.974 13.415-13.314 13.415S40.27 36.558 40.27 29.163c0-7.394 5.975-13.414 13.314-13.414zm0-13.422c-14.712 0-26.635 12.013-26.635 26.835C26.95 43.986 38.872 56 53.584 56c14.712 0 26.635-12.013 26.635-26.836 0-14.815-11.923-26.835-26.635-26.835z"></path>
					</svg>
				</a>
			</div>
                
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
