import React from "react";
import Container from "./components/Container";
import styled from "styled-components";
import Facebook from "./assets/facebook.svg";
import Twitter from "./assets/Twitter.svg";
import Instagram from "./assets/Instagram.svg";
import { device } from "./constants";

const Wrapper = styled.div`
	box-sizing: content-box;
	max-width: 1100px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin: 0 auto;
	padding: 3rem 3vw; //-3px for border bottom: ;
	height: 100%;

	.logo {
		font-size: 2rem;
		font-weight: 700;
		font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
		letter-spacing: 3px;
		cursor: pointer;
	}

	p {
		font-size: 1.2rem;
		margin: 0.5rem 0;
	}

	h2 {
		margin-top: 0;
		margin-bottom: 0.8rem;

		font-size: 1.8rem;
	}
	.socials {
		display: flex;
		gap: 1rem;

		.social-icon {
			width: 40px;
			cursor: pointer;
			background-color: orange;
			border-radius: 50%;
			transition: all 0.1s ease-in;
			filter: drop-shadow(4px 3px 0px #000000);

			&:hover {
				transform: translateX(-1px) translateY(-1px);
				filter: drop-shadow(6px 5px 0px #000000);
				background-color: white;
			}
		}
	}

	@media ${device.sm} {
		grid-template-columns: 1fr;
		padding: 1rem 2rem 2rem 2rem;
		h2 {
			font-size: 1.5rem;
		}
		p {
			margin: 0.1rem;
		}

		gap: 1rem;
	}
`;

function Footer() {
	return (
		<Wrapper>
			<div className='left'>
				<div className='logo'> SAM'S</div>
				<div className='pages'>
					<p>About</p>
					<p>Menu</p>
					<p>Reviews</p>
					<p>Social</p>
				</div>
			</div>
			<div className='right'>
				<h2>Find us here!</h2>
				<div className='socials'>
					<img src={Facebook} alt='' className='social-icon' />
					<img src={Instagram} alt='' className='social-icon' />
					<img src={Twitter} alt='' className='social-icon' />
				</div>
			</div>
		</Wrapper>
	);
}

export default Footer;
