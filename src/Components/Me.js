import React from 'react';
import '../assets/components/me.scss';
import me from '../assets/components/me.png';
import meHover from '../assets/components/me-hover.png';

const Me = () => {
    return (<>
        <div className="me">
            <img src={me} alt="" />
            <img src={meHover} alt="" />
        </div>
    </>);
};

export default Me;
