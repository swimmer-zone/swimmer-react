import React from 'react';
import { Me, Music, List, ListBlogs, Social, Intro } from '../Components';
import '../assets/home.scss';

const Home = () => {
  	return (
    	<>
      		<Music />
            <footer id="footer">
                <Intro />
                
                <ListBlogs />

                <List type="Portfolio" />
                <List type="Links" />

                <Social location="footer" />
                    
                <p className="copy">
                    &copy; Swimmer 2005&thinsp;/&thinsp;{(new Date().getFullYear())} - Version 18.1.0
                </p>
                <Me />
            </footer>
    	</>
  	);
}

export default Home;