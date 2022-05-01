import { Star } from 'react-feather';

const Rating = (props) => {
	const max = 5;
	const value = props.value;
  	const percentage = Math.round((value / max) * 100);

	return (<div className="stars" title={"Rating: " + value + " / 5"}>
		{Array.from(Array(max).keys()).map((_, i) => (
			<Star key={String(i)} className="star" />
		))}
		<div className="star-overlay" style={{ width: `${100 - percentage}%` }} />
	</div>);
}

export default Rating;