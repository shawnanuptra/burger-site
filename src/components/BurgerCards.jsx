import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	max-width: calc(1100px / 4 - 30px);
	display: flex;
	flex-direction: column;
	background-color: white;
	text-align: center;
	margin-top: 2rem;
	border-radius: 1rem;
	box-sizing: border-box;
	border: 10px solid #ffed49;
	outline: 4px solid black;
	filter: drop-shadow(5px 5px 0px #000000);

	.card-img {
		img {
			aspect-ratio: 1/1;
			width: 100%;
			object-fit: cover;
			border-radius: 6px 6px 0 0;
		}
	}
	.card-body {
		padding: 1.5rem;
	}
	.card-title {
		text-transform: uppercase;
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1.1;
		margin-bottom: 0.3rem;
	}

	.card-description {
	}
`;

function BurgerCards({ name, description, imgSrc }) {
	return (
		<Wrapper>
			<div className='card-img'>
				<img src={imgSrc} alt='' />
			</div>
			<div className='card-body'>
				<div className='card-title'>{name}</div>
				<div className='card-description'>{description}</div>
			</div>
		</Wrapper>
	);
}

export default BurgerCards;
