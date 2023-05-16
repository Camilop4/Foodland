import React from "react";
import "./rating.css"

function Rating(props) {
	const { rating, numReviews, caption, onClick } = props;

	return (
		<div className="rating">
			<span onClick={() => onClick(1)}>
				<i
					className={
						rating >= 1
							? "fa fa-star"
							: rating >= 0.5
							? "fa fa-star-half-o"
							: "fa fa-star-o"
					}
				></i>
			</span>
			<span onClick={() => onClick(2)}>
				<i
					className={
						rating >= 2
							? "fa fa-star"
							: rating >= 1.5
							? "fa fa-star-half-o"
							: "fa fa-star-o"
					}
				></i>
			</span>
			<span onClick={() => onClick(3)}>
				<i
					className={
						rating >= 3
							? "fa fa-star"
							: rating >= 2.5
							? "fa fa-star-half-o"
							: "fa fa-star-o"
					}
				></i>
			</span>
			<span onClick={() => onClick(4)}>
				<i
					className={
						rating >= 4
							? "fa fa-star"
							: rating >= 3.5
							? "fa fa-star-half-o"
							: "fa fa-star-o"
					}
				></i>
			</span>
			<span onClick={() => onClick(5)}>
				<i
					className={
						rating >= 5
							? "fa fa-star"
							: rating >= 4.5
							? "fa fa-star-half-o"
							: "fa fa-star-o"
					}
				></i>
			</span>
            
			{caption ? (
				<span>{caption}</span>
			) : (
				<span></span>
			)}
		</div>
	);
}

export default Rating;
