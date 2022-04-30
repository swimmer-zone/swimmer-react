import React from 'react';
import Music from '../Layout/Music';
import Footer from '../Layout/Footer';
import Error from '../Pages/Error';

const Home = () => {
    if (false) {
        return (<Error/>);
    }
  	return (
    	<>
      		<Music />
      		<Footer />
    	</>
  	);
}

export default Home;