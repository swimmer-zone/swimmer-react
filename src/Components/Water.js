import React from 'react';
import '../assets/components/water.scss';

const Water = () => {
    return (<>
		<svg viewBox="0 0 1920 1080" id="waves" preserveAspectRatio="none">
			<path fill="#6c6eec" fillOpacity='0.5'/>
			<path fill="#6c6eec" fillOpacity='0.5'/>
			<path fill="#6c6eec" fillOpacity='0.5'/>
			<path fill="#6c6eec" fillOpacity='0.5'/>
		</svg>
		<div id="bubbles">
			<div className="bubble"></div>
			<div className="bubble"></div>
			<div className="bubble"></div>
			<div className="bubble"></div>
			<div className="bubble"></div>
			<div className="bubble"></div>
			<div className="bubble"></div>
			<div className="bubble"></div>
			<div className="bubble"></div>
			<div className="bubble"></div>
		</div>
	</>);
};

export default Water;
