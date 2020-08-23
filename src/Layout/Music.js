import React, { useState, useEffect, useRef } from 'react';
import Async from 'react-async';
import { Roll, Bounce } from 'react-reveal';

function countDown(duration, time) {
    if (!isNaN(time)) {
        var timeLeft = duration - time;
        return (
            Math.floor(timeLeft / 60) + ":" + ("0" + Math.floor(timeLeft % 60)).slice(-2)
        );
    }
}

const loadTracks = () =>
	fetch('http://swimmer.zone/json/tracks')
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

const Music = () => {
    const player = useRef(null);
    const [ state, setState ] = useState({
        currentTrack: null,
        currentTime: null,
        duration: null
    });
    let timeLeft = countDown(state.duration, state.currentTime);
    let currentTrack = null;

    useEffect(() => {
        if (state.currentTrack) {
            player.current.src = state.currentTrack;
            player.current.play();
        }
        player.current.addEventListener('timeupdate', e => {
            setState(prevState => ({
                currentTime: e.target.currentTime,
                duration: e.target.duration,
                currentTrack: prevState.currentTrack
            }));
        });

        return function cleanup() {
            player.current.removeEventListener('timeupdate', () => {});
        }
    }, [state.currentTrack]);

    return (
		<section className="music">
			<Async promiseFn={loadTracks}>
				<Async.Loading>Loading...</Async.Loading>
				<Async.Fulfilled>
					{data => {
						return (
							Object.keys(data).map(title => (<>
								<article key={"album_" + data[title].title_lower} id={"album_" + data[title].title_lower}>
									<Roll>
										<div className="cover-wrapper">
											<img src={data[title].cover} alt="cover" className="cover" />
										</div>
									</Roll>
									<div className="tracklist" data-set={data[title].title_lower}>

										<h2 key={data[title].id}>
											{data[title].title}
										</h2>

										<p>{data[title].comment}</p>

        								<Bounce right cascade>
											<ul>
												{Object.keys(data[title].tracks).map(track => {													
													let timer;
													if (state.currentTime && state.currentTrack == data[title].tracks[track].filename) {
														timer = <span className="duration">{timeLeft}</span>
													}
													else {
														timer = <span 
																data-seconds="{data[title].tracks[track].playtime_seconds}" 
																className="duration">{data[title].tracks[track].playtime_string}</span>
													}
													return(
														<li key={data[title].tracks[track].filename}>
															<span className="a">
																<button 
																	data-permalink={data[title].tracks[track].title}
																	onClick={() => setState({currentTrack: data[title].tracks[track].filename})}>
																	{data[title].tracks[track].title}
																</button>
															</span>
															{timer}
														</li>
													)
												})}
											</ul>
										</Bounce>
									</div>
								</article>
							</>))
						)
					}}
				</Async.Fulfilled>
				<Async.Rejected>
					{error => `Something went wrong: ${error.message}`}
				</Async.Rejected>
			</Async>
			<audio ref={player} />
		</section>
	);
}

export default Music;
