import React from 'react';
import Async from 'react-async';

const loadLinks = () =>
    fetch('http://swimmer.zone/json/links')
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

const Links = () => {
    return (
        <section id="links">
            <h3>Links</h3>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="listicon">
                <path d="M0 2v20h32v-20h-32zM30 20h-28v-16h28v16zM21 24h-10l-1 4-2 2h16l-2-2z"></path>
            </svg>

            <Async promiseFn={loadLinks}>
                <Async.Loading>Loading...</Async.Loading>
                <Async.Fulfilled>
                    {data => {
                        return (
                            <ul>
                                {data.data.map(link => (
                                    <li key={link.id}>
                                        <span className="a">
                                        <a href={link.url}>{link.title}</a></span>
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

export default Links;
