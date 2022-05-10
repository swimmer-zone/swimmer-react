import React from 'react';
import { links } from '../json';
import '../assets/components/list.scss';

const List = (props) => {
	let typeId = '0';
	if (props.type === 'Portfolio') {
		typeId = '1';
	}

	return (<>
		<h2>{props.type}</h2>

        <ul>
            {Object.keys(links).map(key => {
                if (links[key].is_portfolio === typeId) {
                    return (
                        <li key={key}>
                            <span className="a">
                                <a href={links[key].url}>{links[key].title}</a>
                            </span>
                        </li>);
                } else return '';
            })}
        </ul>
	</>);
};

export default List;