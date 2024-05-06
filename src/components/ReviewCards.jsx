import React from "react";
import styled from "styled-components";
import SVG from "../assets/star.svg";
const Wrapper = styled.div`
	border: 0.5rem solid orange;
	background: white;
	text-align: center;
	margin: 1rem;
	border-radius: 1rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	/* transform: translateX(-5px) translateY(-5px); */
	filter: drop-shadow(10px 10px 0px #0e0e0e);

	.description {
		font-size: 1.75rem;
		margin-bottom: 1rem;
		line-height: 1.1;
	}
	.rating {
		font-size: 1.2rem;
	}
`;
function ReviewCards({ name, rating, description }) {
	// Generate stars based on rating
	const renderStars = () => {
		const stars = [];
		for (let i = 0; i < rating; i++) {
			stars.push(<img src={SVG} alt='star' width={15} />);
		}
		return stars;
	};

	return (
		<Wrapper>
			<div className='description'>"{description}"</div>

			<span className='rating'>
				{name + " "}
				{renderStars()}
			</span>
		</Wrapper>
	);
}

export default ReviewCards;
