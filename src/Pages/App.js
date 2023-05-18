import React from 'react';
import { Home, Blog, Whisky } from '../Pages';
import { Social, Logo, Water } from '../Components';
import '../assets/app.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

const App = () => {
  	return (
	    <Router>
			<header>
				<Logo />

	            <Social location="header" />
			</header>
	        <Switch>
	          	<Route path="/blog">
	            	<Blog />
	          	</Route>
	          	<Route path="/whisky">
	            	<Whisky />
	          	</Route>
	          	<Route path="/">
					<Water />
	            	<Home />
	          	</Route>
	        </Switch>
	    </Router>
  	);
}

export default App;