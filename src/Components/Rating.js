import { useState } from 'react';
import { Star } from 'react-feather';

const Rating = ({value}) => {
	const max = 5;
  	const percentage = 50;//Math.round((value / max) * 100);
console.log(value)

	return (<div className="stars">
		{Array.from(Array(max).keys()).map((_, i) => (
			<Star key={String(i)} className="star" />
		))}
		<div className="star-overlay" style={{ width: `${100 - percentage}%` }} />
	</div>);
}

export default Rating;