import React from 'react';
import '../assets/components/water.scss';

const Water = () => {
    return (<>
		<svg viewBox="0 0 1920 1080" id="waves" preserveAspectRatio="none">
			<path fill="#6c6eec" fill-opacity='0.5'/>
			<path fill="#6c6eec" fill-opacity='0.5'/>
			<path fill="#6c6eec" fill-opacity='0.5'/>
			<path fill="#6c6eec" fill-opacity='0.5'/>
		</svg>
		<div id="bubbles">
			<div class="bubble"></div>
			<div class="bubble"></div>
			<div class="bubble"></div>
			<div class="bubble"></div>
			<div class="bubble"></div>
			<div class="bubble"></div>
			<div class="bubble"></div>
			<div class="bubble"></div>
			<div class="bubble"></div>
			<div class="bubble"></div>
		</div>
	</>);
};

export default Water;
