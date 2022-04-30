import React from 'react';
import Header from './Layout/Header';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Whisky from './Pages/Whisky';
import './App.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

const App = () => {
  	return (
	    <Router>
      		<Header />
	        <Switch>
	          	<Route path="/blog">
	            	<Blog />
	          	</Route>
	          	<Route path="/whisky">
	            	<Whisky />
	          	</Route>
	          	<Route path="/">
	            	<Home />
	          	</Route>
	        </Switch>
	    </Router>
  	);
}

export default App;