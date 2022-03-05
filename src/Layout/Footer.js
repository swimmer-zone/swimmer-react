import React from 'react';
import ReactMarkdown from 'react-markdown';
import Async from 'react-async';
import me from '../me.png';
import meHover from '../me-hover.png';
import blogs from '../json/blogs.json';
import links from '../json/links.json';

const Footer = () => {
    const loadIntro = () =>
        fetch('../data/README.md')
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.text());

    return (
        <footer id="footer">
            <section className="intro">
                <Async promiseFn={loadIntro}>
                    <Async.Loading>Loading...</Async.Loading>
                    <Async.Fulfilled>
                        {intro => {
                            return (<ReactMarkdown>{intro}</ReactMarkdown>)
                        }}
                    </Async.Fulfilled>
                    <Async.Rejected>
                        {error => `Something went wrong: ${error.message}`}
                    </Async.Rejected>
                </Async>
            </section>

            <h2>Blogs</h2>
            <ul>
                {Object.keys(blogs).map(key => (
                    <li key={key}>
                        <span className="a">
                            <a href={"/blog/" + blogs[key].title.toLowerCase().replace(/ /g, '-')} dataid={key} title={"Posted: " + blogs[key].created_at}>
                                {blogs[key].title}
                            </a>
                        </span>
                    </li>
                ))}
            </ul>

            <h2>Portfolio</h2>
            <ul>
                {Object.keys(links).map(key => {
                    if (links[key].is_portfolio === '1') {
                        return (
                            <li key={key}>
                                <span className="a">
                                    <a href={links[key].url}>{links[key].title}</a>
                                </span>
                            </li>);
                    } else return '';
                })}
            </ul>

            <h2>Links</h2>
            <ul>
                {Object.keys(links).map(key => {
                    if (links[key].is_portfolio === '0') {
                        return (
                            <li key={key}>
                                <span className="a">
                                    <a href={links[key].url}>{links[key].title}</a>
                                </span>
                            </li>);
                    } else return '';
                })}
            </ul>
			
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
