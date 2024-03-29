import React from 'react';
import { Me, Music, List, ListBlogs, Intro } from '../Components';
import '../assets/home.scss';
import packageJson from '../../package.json';

const Home = () => {
  	return (
    	<>
      		<Music />
            <footer id="footer">
                <Intro />

                <ListBlogs />

                <List type="Portfolio" />
                <List type="Links" />

                <p className="copy">
                    &copy; Swimmer 2005&thinsp;/&thinsp;{(new Date().getFullYear())} - Version {packageJson.version}
                </p>
                <Me />
            </footer>
    	</>
  	);
}

export default Home;
