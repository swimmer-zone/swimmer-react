import React, { useState } from 'react';
import { Back, Rating } from '../Components';
import { tastings } from '../json';
import '../assets/whisky.scss';

const Whisky = () => {
    const [ sorted, setSorted ] = useState(tastings);

// console.log(sorted)
    const sortByBrand = () => {
        sorted.sort(function (a, b) {
            return a.brand.localeCompare(b.brand);
        });
        setSorted(sorted);
    };
    const sortByCountry = () => {
        sorted.sort(function (a, b) {
            return a.country.localeCompare(b.country);
        });
        setSorted(sorted);
    };
    const sortByDate = () => {
        sorted.sort(function (a, b) {
            return a.dateOfTasting.localeCompare(b.dateOfTasting);
        });
        setSorted(sorted);
    };
    const sortByRating = () => {
        sorted.sort(function (a, b) {
            return a.tasting.rating.localeCompare(b.tasting.rating);
        });
        setSorted(sorted);
    };

    const filterByFlavour = (flavour) => {
        // sorted.filter((sort) => sort.tasting.flavour === flavour);
        // setSorted(sorted);
    };
    const filterByWouldBuy = () => {
        // console.log('filterByWouldBuy');
        // sorted.filter((sort) => sort.tasting.wouldBuy === true);
        // console.log(sorted);
        // setSorted(sorted);
    }

  	return (<section key="whisky_section" className="whisky">
        <p key="intro">
            My love for whisky began quite some time ago when I went to the liquor store and let them advise me a whisky
            that was not too peaty and I came home with the Tomatin Legacy, which was more of the spicy and fruity kind
            (vanilla and citrus). It really took off when I went to Edinburgh and visited the whisky museum. From that
            moment on I've tried {tastings.length} whisky's, starting with Scotch, but after visiting the Teeling
            distillery and the whiskey museum in Dublin my interest in Irish whiskey grew as well.
        </p>
        <nav key="sorting">
            <span key="label">Sort:</span>
            <button key="brand" onClick={sortByBrand}>Brand</button>
            <button key="country" onClick={sortByCountry}>Country / Region</button>
            <button key="rating" onClick={sortByRating}>Rating</button>
            <button key="dateOfTasting" onClick={sortByDate}>Date of Tasting</button>
        </nav>
        <nav key="filtering">
            <span key="label">Filter:</span>
            <button key="flavour">Flavour</button> [
                <button key="flavour-peaty" onClick={filterByFlavour('Peaty')}>Peaty</button>
                <button key="flavour-fruity" onClick={filterByFlavour('Fruity')}>Fruity</button>]
            <button key="wouldBuy" onClick={filterByWouldBuy}>Would Buy</button>
        </nav>
        {Object.keys(sorted).map(key => {
            const whisky = sorted[key];
            const tasting = sorted[key].tasting;
            return (<div className="whisky-wrapper" key={key + '_wrapper'}>
    			<h2 key={key + '_title'}>{whisky.brand}</h2>
    			<div className="whisky-map" key={key + '_map'}>
                	<img src={"../data/whisky/" + whisky.region + ".svg"} alt="" height="300" className="map" />
            	</div>
        		<div className="whisky-origin" key={key + '_origin'}>
                	<h3>Origin</h3>
                	{whisky.country} {whisky.nearestTown && <>(Nearest town: {whisky.nearestTown})</>}<br/>
                	<ul>
                        <li key="type">Type: <strong>{whisky.type}</strong></li>
                		<li key="age">Age: <strong>{whisky.age} years</strong></li>
                        <li key="strength">Strength: <strong>{whisky.strength} %</strong></li>
                        {whisky.caskStrength && <li key="caskStrength">Cask strength</li>}
                        {whisky.chillFiltered && <li key="chillFiltered">Chill filtered</li>}
                	</ul>
                	<a href={whisky.url} className="buy">Buy</a>
    			</div>
    			<div className="whisky-tasting" key={key + '_tasting'}>
                	<h3>Tasting</h3>
                    Location: <strong>{tasting.location}</strong> @ <strong>{whisky.dateOfTasting}</strong><br />
                	<ul>
                        {whisky.taster && <li key="taster"><strong>Taster</strong></li>}
                        <li key="color">Color: <strong>{tasting.color}</strong></li>
                        <li key="glance">Glance: <strong>{tasting.glance} % oily</strong></li>
                		<li key="flavour">Flavour: <strong>{tasting.flavour.replaceAll(',', ' / ')}</strong> with <strong>{tasting.finish}</strong> finish</li>
                        {tasting.notes && <>Other notes: <strong>{tasting.notes}</strong><br/></>}
                	</ul>
                    <Rating value={tasting.rating}/>
                    {tasting.wouldBuy && <small>Would buy again</small>}
                </div><br/>
            </div>);
        })}
        <Back />
    </section>);
}

export default Whisky;
