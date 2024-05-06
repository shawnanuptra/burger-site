import React from "react";
import styled from "styled-components";
import Container from "./components/Container";
import ReviewCards from "./components/ReviewCards";
import { device } from "./constants";

const Wrapper = styled.section`
	background-color: white;
	h2 {
		font-size: 6rem;
		text-align: center;
		font-weight: 800;
		font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
		margin: 0 0 2rem 0;
		line-height: 1.1;
		text-transform: uppercase;
		color: #ffed49;
		-webkit-text-stroke: 4px black;
		text-shadow: 8px 6px black;
	}
	.reviews-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media ${device.sm} {
		.reviews-grid {
			display: flex;
			flex-direction: column;
		}

		h2 {
			font-size: 3rem;
			-webkit-text-stroke: 3px black;
			text-shadow: 4px 4px black;
		}
	}
`;

function Reviews() {
	return (
		<Wrapper>
			<Container>
				<h2>Customer Reviews</h2>
				<div className='reviews-grid'>
					<ReviewCards
						name={"Shawn"}
						rating={"5"}
						description={
							"This is the most awesome burger I've ever had!! Super yummy bears :>"
						}
					/>
					<ReviewCards
						name={"Bob"}
						rating={"4.5"}
						description={"Juiciest of the juiciest borgerm."}
					/>
					<ReviewCards
						name={"The Pope"}
						rating={"5"}
						description={"Holy Moly, this is a blessing to us all."}
					/>
				</div>
			</Container>
		</Wrapper>
	);
}

export default Reviews;
