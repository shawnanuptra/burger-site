import React from "react";
import styled from "styled-components";
import { device } from "./constants";

const Wrapper = styled.section`
	background-color: white;
	.container {
		max-width: 1100px;
		display: flex;
		flex-direction: row;
		margin: 0 auto;
		padding: 20rem 0;
		gap: 3rem;
		align-items: center;

		h2 {
			color: #ff8c49;
			text-transform: uppercase;
			font-size: 5rem;
			z-index: 9;
			max-width: 800px;
			font-weight: 900;
			line-height: 1.2;
			margin: 0 0 2rem 0;
			text-shadow: 1px 1px white;
			z-index: 9;
			position: relative;
		}
		.subtitle {
			font-size: 3rem;
			font-weight: 900;
			text-transform: uppercase;
			color: #ff8c49;
			z-index: 9;
			position: relative;
			text-shadow: 1px 1px white;
		}

		.text {
			flex: 1 1 0px;
		}
		.img-wrapper {
			flex: 1 1 0px;
			margin: 0;
			z-index: 1;

			h2,
			.subtitle {
				display: none;
			}

			img {
				filter: grayscale(1) brightness(0.6);
				width: 100%;
				border-radius: 0.8rem;
			}
			figcaption {
				margin: 0.5rem 0 0 0;
				text-align: center;
				font-size: 1.2rem;
			}
		}
	}

	@media ${device.sm} {
		.container {
			padding: 5rem 10vw;
			display: flex;
			flex-direction: column-reverse;
			margin: 2rem auto;
			gap: 1rem;
			text-align: center;

			h2 {
				color: #ff8c49;
				text-transform: uppercase;
				font-size: 3rem;
				z-index: 9;
				max-width: 800px;
				font-weight: 900;
				line-height: 1.2;
				margin: 0 0 2rem 0;
				text-shadow: 1px 1px white;
				z-index: 9;
				position: relative;
			}
			.subtitle {
				font-size: 2rem;
				font-weight: 900;
				text-transform: uppercase;
				color: #ff8c49;
				z-index: 9;
				position: relative;
				text-shadow: 1px 1px white;
			}

			.text {
				display: block;
				h2 {
					font-size: 2.5rem;
				}
				.subtitle {
					font-size: 1.5rem;
					text-transform: none;
					font-weight: 500;
				}
			}
			.img-wrapper {
				/* flex: 1 1 0px; */
				margin: 0;
				z-index: 1;

				img {
					filter: grayscale(1) brightness(0.6);
					width: 100%;
					border-radius: 0.8rem;
				}
				figcaption {
					display: none;
				}
			}
		}
	}
`;
function Introduction() {
	return (
		<Wrapper>
			<div className='container'>
				<div className='text'>
					<h2>Hi, we're sam's Burgers.</h2>
					<span className='subtitle'>
						A collective of creators who love burger and good mood.
					</span>
				</div>
				<figure className='img-wrapper'>
					<h2>Hi, we're sam's burgers.</h2>
					<img
						src='https://media.istockphoto.com/id/1333388037/photo/two-guys-grilling-at-backyard.jpg?s=612x612&w=0&k=20&c=N229r30b-BDhV6qtTnOAr2pj5Q500mSn2opm4YNQZ-U='
						alt=''
					/>
					<figcaption>
						This is Sam. He started everything 20 years ago.
					</figcaption>
					<span className='subtitle'>
						A collective of creators who love burger and good mood.
					</span>
				</figure>
			</div>
		</Wrapper>
	);
}

export default Introduction;
