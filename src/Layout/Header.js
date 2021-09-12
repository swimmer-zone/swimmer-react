import React from 'react';
import Social from '../Layout/Social';
import Logo from '../Components/Logo';
import Wave from '../Components/Wave';
import Jack from '../Components/Jack';

const Header = () => {
	return (
		<header>
			<Wave />
			<Logo />
			<Jack />

            <Social />
		</header>
	);
}

export default Header;
