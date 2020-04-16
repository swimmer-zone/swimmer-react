import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Async from 'react-async';

function getTime(time) {
	if (!isNaN(time)) {
		return (
			Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
		);
	}
}

const loadTracks = () =>
	fetch('http://swimmer.zone/json/tracks')
	.then(res => (res.ok ? res : Promise.reject(res)))
	.then(res => res.json());

const Music = () => {
  	const [state, setState] = useState({
		selectedTrack: null,
		player: 'stopped',
		currentTime: null,
		duration: null
  	});

    const componentDidMount = () => {
		player.addEventListener('timeupdate', e => {
	  		setState({
				currentTime: e.target.currentTime,
				duration: e.target.duration
	  		});
		});
  	};

    const componentWillUnmount = () => {
		player.removeEventListener('timeupdate', () => {});
  	};

    const componentDidUpdate = (prevProps, prevState) => {
		if (state.selectedTrack !== prevState.selectedTrack) {
	  		let track = state.selectedTrack;
	  		
		  	if (track) {
				player.src = track;
				player.play();
				setState({ player: 'playing', duration: player.duration });
		  	}
		}
		if (state.player !== prevState.player) {
		  	if (state.player === 'paused') {
				player.pause();
		  	} else if (state.player === 'stopped') {
				player.pause();
				player.currentTime = 0;
				setState({ selectedTrack: null });
		  	} else if (state.player === 'playing' && prevState.player === 'paused') {
				player.play();
		  	}
		}
  	}

	const currentTime = getTime(state.currentTime);
	const duration = getTime(state.duration);

	// Jump to the right section, when a hash is provided
	if (document.location.hash.length > 0) {
		if (document.location.hash.substring(0, 5) == '#blog') {
			//
		}
		else if (document.location.hash.substring(0, 6) == '#track') {
			//
		}
	}

	return (
		<section id="music">
			<h2>Music</h2>
			<p>
				I'm phlegmatic and I'm a Scorpio, both of which relate to water. Above all I like to swim, floating far and away... 
				in the water... in the music... and on many other journeys. With my music I like to create such journeys for others 
				to join me, that's why I call myself Swimmer. My music is mostly ambient, dub and techno, but I'm trying to infuse 
				some ethnic influences and even some psytrance tryouts.
			</p>

			<Async promiseFn={loadTracks}>
				<Async.Loading>Loading...</Async.Loading>
				<Async.Fulfilled>
					{data => {
						return (
							Object.keys(data).map(title => (<>
								<article id={"album_" + data[title].title_lower}>
									<h3 key={data[title].id}>
										{data[title].title}
									</h3>
									<img id={"cover_" + data[title].title_lower} src={data[title].cover} alt=""/>

									<ul className="sc-trackslist sc-player" data-set="the_pool">
										{Object.keys(data[title].tracks).map(track => (
											<li>
												<span className="a">
													<button 
														href="{data[title].tracks[track].filename}" 
														data-permalink="{data[title].tracks[track].title}"
														onClick={() => setState({ selectedTrack: data[title].tracks[track].filename })}>
														{data[title].tracks[track].title}
													</button>
												</span>
												<span 
													data-seconds="{data[title].tracks[track].playtime_seconds}" className="duration">{data[title].tracks[track].playtime_string}</span>
											</li>
										))}
									</ul>
								</article>
							</>))
						)
					}}
				</Async.Fulfilled>
				<Async.Rejected>
					{error => `Something went wrong: ${error.message}`}
				</Async.Rejected>
			</Async>

			<div>
		  		{state.player === "paused" && (<button onClick={() => setState({ player: "playing" })}>Play</button>)}
		  		{state.player === "playing" && (<button onClick={() => setState({ player: "paused" })}>Pause</button>)}
		  		{state.player === "playing" || state.player === "paused" ? (
					<button onClick={() => setState({ player: "stopped" })}>Stop</button>) : ("")}
			</div>
			{state.player === "playing" || state.player === "paused" ? (<div>{currentTime} / {duration}</div>) : ("")}
			<audio ref={ref => (player = ref)} />
		</section>
	);
};

export default Music;
