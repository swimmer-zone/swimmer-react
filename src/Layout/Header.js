import React from 'react';
import Social from '../Layout/Social';
import Logo from '../Layout/Logo';

const Header = () => {
	return (
		<header>
			<video controls autoPlay muted loop controlsList="nodownload" preload="true">
  				<source src="http://api.swimmer.zone/storage/boom.mp4" type="video/mp4" />
  			</video>
  			<div className="wrapper">
			<div>
				<h1>Hey guys, I'm Swimmer</h1>
				<p className="intro">
					I'm phlegmatic and I'm a Scorpio, both of which relate to water. Above all I like to swim, floating far and away... in the water... 
					in the music... and on many other journeys. With my music I like to create such journeys for others to join me, that's why I call 
					myself Swimmer. My music is mostly ambient, dub and techno, but I'm trying to infuse some ethnic influences and even some psytrance 
					tryouts.
				</p>
				<a href="#album_collectifest" className="button">Check out my albums!</a>
			</div>
			</div>
			<Logo />

            <Social />
		</header>
	);
}

export default Header;
