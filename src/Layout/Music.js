import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-animated-slider';
import '../Carousel.scss';

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
  	const [ albums, setAlbums ] = useState([]);
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

        return function cleanup() {
        //    player.current.removeEventListener('timeupdate', () => {});
        }
    }, [state.currentTrack]);

  	useEffect(() => {
    	getAlbums();
  	}, []);

  	async function getAlbums() {
    	const response = await fetch('https://sww.tf/tracks');
    	const albums = await response.json();
    	setAlbums(albums);
  	}

  	return (
		<section className="music" id="music">
			<Slider infinite={false}>
	      		{Object.keys(albums).map(key => {
	      			let album = albums[key];
	      			return(
						<article key={"album_" + album.title_lower} id={"album_" + album.title_lower}>
							<div className="cover-wrapper">
								<img src={album.cover} alt="cover" className="cover" />
							</div>
							<div className="tracklist" data-set={album.title_lower}>

								<h2 key={album.id}>
									{album.title}
								</h2>

								<p>{album.comment}</p>

								<ul>
									{Object.keys(album.tracks).map(trackKey => {
										let timer;
										let track = album.tracks[trackKey];
										if (state.currentTime && state.currentTrack === track.filename) {
											timer = <span className="duration">{timeLeft}</span>
										}
										else {
											timer = <span 
													data-seconds="{track.playtime_seconds}" 
													className="duration">{track.playtime_string}</span>
										}
										return(
											<li key={track.filename}>
												<span className="a">
													<button 
														data-permalink={track.title}
														onClick={() => setState({currentTrack: track.filename})}>
														{track.title}
													</button>
												</span>
												{timer}
											</li>
										)
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
