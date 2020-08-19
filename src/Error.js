import React from 'react';
import Logo from "./Layout/Logo";

const Error = (colors) => {
	var styles = {
		h1: {
			'color': colors.purple,
			'fontSize': '100px',
			'position': 'absolute',
			'left': '10vw',
			'top': '10vh',
			'display': 'block',
			'textAlign': 'right',
			'width': '15vw',
			'paddingTop': '40px'
		},
		p1: {
			'width': 'calc(75vw - 40px)',
			'left': '25vw',
			'position': 'absolute',
			'display': 'block',
			'padding': '20px',
			'color': colors.white,
			'fontSize': '40px',
			'backgroundColor': colors.purple,
			'top': '10vh',
			'margin': '140px 0 0 40px'
		},
		p2: {
			'width': 'calc(75vw - 40px)',
			'left': '25vw',
			'position': 'absolute',
			'display': 'block',
			'padding': '20px',
			'color': colors.code,
			'fontSize': '20px',
			'top': '32vh',
			'margin': '0 0 0 40px'
		},
		img: {
			'position': 'absolute',
			'bottom': '2vh',
			'right': '2vw',
			'width': '16vw !important'
		},
		a: {
			'color': colors.code
		}
	};

	return (
		<>
			<header id="menu">
				<Logo/>
			</header>

			<section>
				<h1 style={styles.h1}>404</h1>
				<p style={styles.p1}>Not found</p>
				<p style={styles.p2}>Why don't you try my <a href="/" style={styles.a}>homepage</a>?</p>
			</section>
		</>
	);
}

export default Error;
