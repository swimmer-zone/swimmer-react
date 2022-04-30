import React from 'react';
import {
	Switch,
	Route,
	useRouteMatch
} from 'react-router-dom';
import Rating from '../Components/Rating';
import whisky from '../json/whisky.json';
import '../Whisky.scss';

const Whisky = () => {
	let match = useRouteMatch();

  	return (<>
		<Switch>
			<Route path={match.path}>
			<section className="whisky">
                {Object.keys(whisky).map(key => {
                    return (<>
            			<h2>{whisky[key].brand}</h2>
                		<div>
	                    	<h3>Origin</h3>
	                    	{whisky[key].country} (Nearest town: {whisky[key].nearest_town})<br/>
            				<Rating value={whisky[key].tasting.rating} /><br/>
	                    	{whisky[key].tasting.would_buy && <>Would buy again<br /></>}
	                    	<ul>
	                    		<li>Age: <strong>{whisky[key].age}</strong></li>
	                    		<li>Strength: <strong>{whisky[key].strength}</strong></li>
	                    		{whisky[key].cask_strength && <li>Cask strength</li>}
	                    	</ul>
	                    	<a href={whisky[key].url}>Buy</a>
	                    	<strong className="price">&euro; {whisky[key].price}</strong>
            			</div>
            			<div>
	                    	<h3>Tasting</h3>
	                    	<ul>
	                    		<li>Date: <strong>{whisky[key].date_of_tasting}</strong></li>
	                    		<li>Flavour: <strong>{whisky[key].tasting.flavour}</strong></li>
	                    		<li>Finish: <strong>{whisky[key].tasting.finish}</strong></li>
	                    		<li>Glance: <strong>{whisky[key].tasting.glance}</strong></li>
	                    		<li>Color: <strong>{whisky[key].tasting.color}</strong></li>
	                    		<li>Rating: <strong>{whisky[key].tasting.rating} / 5</strong></li>
	                    	</ul>
	                    	{whisky[key].notes && <>Other notes: <strong>{whisky[key].notes}</strong></>}
	                    </div>
            			<div>
	                    	<img src={"../data/whisky/scotland_" + whisky[key].region + ".svg"} alt="" height="300" />
                    	</div><br/>
                    </>);
                })}
                	</section>
			</Route>
		</Switch>
  	</>);
}

export default Whisky;