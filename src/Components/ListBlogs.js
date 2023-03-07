import React from 'react';
import { blogs } from '../json';

const ListBlogs = () => {
	return (<>
        <h2>Blogs</h2>
        <ul>
            {Object.keys(blogs).map(key => (
                <li key={key}>
                    <span className="a">
                        <a href={"/blog/" + blogs[key].title.toLowerCase().replace(/ /g, '-')}
                           dataid={key} title={"Posted: " + blogs[key].created_at}>
                            {blogs[key].title}
                        </a>
                    </span>
                </li>
            ))}
        </ul>
	</>);
};

export default ListBlogs;
