import React from "react";
import styled from "styled-components";
import BurgerCards from "./components/BurgerCards";
import { device } from "./constants";
import Container from "./components/Container";

const Wrapper = styled.section`
	background-color: #ff8c49;

	/* Our Burgers title */
	h2 {
		font-size: 6rem;
		font-weight: 800;
		font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
		margin: 0;
		line-height: 1.1;
		text-transform: uppercase;
		color: #ffed49;
		-webkit-text-stroke: 4px black;
		text-shadow: 8px 6px black;
	}
	p {
		margin: 1rem 0;
		max-width: 1000px;
		font-size: 1.5rem;
	}

	.cards {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	@media ${device.sm} {
		.container {
			/* text-align: center;
			padding: 10vh 10vw;
			margin: 2rem auto; */

			h2 {
				text-align: center;
				font-size: 3rem;
				-webkit-text-stroke: 3px black;
				text-shadow: 4px 4px black;
				margin-bottom: 2rem;
			}
			p {
				font-size: 1.2rem;
			}
			.cards {
				justify-content: center;
			}
		}
	}
`;

const Card = styled.div``;
function OurBurgers() {
	return (
		<Wrapper>
			<Container>
				<div className='container'>
					<h2>Our Burgers</h2>
					<p>
						These are our specialties! Guaranteed to be mouth watering. Other
						than this we also do classics such as Double CheeseBorger. We make{" "}
						<strong>YOUR </strong>
						burger how <strong>YOU</strong> like it!
					</p>
					<div className='cards'>
						<BurgerCards
							name={"Borger"}
							description={"Classic borger. Can't complain"}
							imgSrc={
								"https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
							}
							key={1}
						/>
						<BurgerCards
							name={"DOUBLE Borger"}
							description={
								"ISSA DOUBLE BORGUR!! Make it big, make it nice, don't forget to slice!"
							}
							imgSrc={
								"https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg"
							}
							key={2}
						/>
						<BurgerCards
							name={"Bacom Chiz"}
							description={"MMMmfffggg.. bacom chiz.."}
							imgSrc={
								"https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg"
							}
							key={3}
						/>
						<BurgerCards
							name={"Nyaaa"}
							description={":3"}
							imgSrc={
								"https://as2.ftcdn.net/v2/jpg/03/65/97/83/1000_F_365978343_UyMQUIAg5F5RiU5vROGZ4qbfURLrOWNj.jpg"
							}
							key={4}
						/>
					</div>
				</div>
			</Container>
		</Wrapper>
	);
}

export default OurBurgers;
