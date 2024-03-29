import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
	Switch,
	Route,
	useRouteMatch,
	useParams
} from 'react-router-dom';
import Async from 'react-async';
import { Back } from '../Components';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import '../assets/blog.scss';

const Blog = () => {
	let match = useRouteMatch();

  	return (<>
		<Switch>
			<Route path={`${match.path}/:blogId`}>
				<Post />
			</Route>
			<Route path={match.path}>
				<h3>Please select a post.</h3>
			</Route>
		</Switch>
	</>);
}

const Post = () => {
  	let { blogId } = useParams();

	const loadBlog = () =>
	    fetch('../data/blogs/' + blogId + '/README.md')
	    .then(res => (res.ok ? res : Promise.reject(res)))
	    .then(res => res.text());

	const options = {
  		settings: {
			autoplaySpeed: 3000
		},
  		buttons: {
	    	backgroundColor: 'rgba(30,30,36,0)',
	    	iconColor: 'rgba(108, 110, 236, 0.9)',
    		showDownloadButton: false
  		},
  		caption: {
		    captionColor: 'rgba(108, 110, 236, 1)',
	    	captionFontSize: '1.2rem',
		    captionFontWeight: 'bold'
  		},
		progressBar: {
			backgroundColor: 'rgba(108, 110, 236, 0)',
			fillColor: 'rgba(108, 110, 236, 1)'
		}
	};

	return (<>
        <Async promiseFn={loadBlog}>
            <Async.Loading>Loading...</Async.Loading>
            <Async.Fulfilled>
                {blog => {
                    return (
	                    <>
	                        <section className="blog">
	                        	<img className="avatar" src={"../data/blogs/" + blogId + "/avatar.png"} alt="Avatar"/>
								
								<SimpleReactLightbox>
		      						<SRLWrapper options={options}>
		                        		<div className="article"><ReactMarkdown>{blog}</ReactMarkdown></div>
		      						</SRLWrapper>
		      					</SimpleReactLightbox>
	                        </section>
	                    </>
                    )
                }}
            </Async.Fulfilled>
            <Async.Rejected>
                {error => `Something went wrong: ${error.message}`}
            </Async.Rejected>
        </Async>
        <Back />
    </>);
}

export default Blog;