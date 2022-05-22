import React, { useState, useEffect, useRef } from 'react';
import Slider from './Slider';
import '../assets/components/music.scss';
import { albums } from '../json';

function countDown(duration, time) {
    if (!isNaN(time)) {
        var timeLeft = duration - time;
        return (
            Math.floor(timeLeft / 60) + ":" + ("0" + Math.floor(timeLeft % 60)).slice(-2)
        );
    }
}

const Music = () => {
    const player = useRef(null);
    const [ state, setState ] = useState({
        currentTrack: null,
        currentTime: null,
        duration: null
    });

    let timeLeft = countDown(state.duration, state.currentTime);

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
    }, [state.currentTrack]);

  	return (
		<section className="music" id="music">
			<Slider infinite={false}>
	      		{Object.keys(albums).map(key => {
	      			let album = albums[key];
					let timer;

	      			return(
						<article key={"album_" + key} id={"album_" + key}>
							<div className="cover-wrapper">
								<img src={"/data/albums/" + album.title.toLowerCase().replace(/ /g, '-') + "/cover.jpg"} alt="cover" className="cover" />
							</div>
							<div className="tracklist" data-set={key}>

								<h2 key={key}>
									{album.title}
								</h2>

								<p>{album.comment}</p>

								<ul>
									{Object.keys(album.tracks).map(trackKey => {
										let track = album.tracks[trackKey];
										let scName = 'https://feeds.soundcloud.com/stream/' + track.filename + '.mp3';
										let playTime = Math.floor(track.playtime / 60) + ":" + ("0" + Math.floor(track.playtime % 60)).slice(-2);

										if (state.currentTime && state.currentTrack === scName) {
											timer = <span className="duration">{timeLeft}</span>
										}
										else {
											timer = <span 
													data-seconds="{track.playtime}" 
													className="duration">{playTime}</span>
										}

										return (
											<li key={track.filename}>
												<span className="a">
													<button 
														data-permalink={track.title}
														onClick={() => setState({currentTrack: scName})}>
														{track.title}
													</button>
												</span>
												{timer}
											</li>
										);
									})}
								</ul>
							</div>
						</article>
					)
				})}
			</Slider>
			<audio ref={player} />
		</section>
  	);
};

export default Music;
