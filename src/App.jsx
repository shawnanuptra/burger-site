import styled from "styled-components";
import HeroImage from "./assets/hero.jpg";

const NavBar = styled.nav`
	background-color: #ff8c49;
	text-transform: uppercase;
	font-weight: 900;
	height: 6rem;

	.nav-wrapper {
		box-sizing: content-box;
		max-width: 1100px;
		display: flex;
		flex-direction: row;
		margin: 0 auto 0 auto; //-3px for border bottom
		height: 100%;
		place-items: center;
		border-bottom: 5px solid black;
	}

	.logo-wrapper {
		margin: 0 auto 0 0;
		.logo {
			font-size: 2rem;
			font-weight: 700;
			font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
			letter-spacing: 3px;
			cursor: pointer;
		}
	}

	.nav-menu {
		display: flex;
		justify-content: center;
		ul {
			display: flex;
			flex-direction: row;
			place-items: center;
			list-style-type: none;
			gap: 1rem;
			margin: 0;
			padding: 0;

			/* list items */
			li {
				border: 3px solid transparent;
				border-radius: 5px;
				padding: 10px 15px;
				transition: all 0.1s ease-out;

				&:hover {
					border: 3px solid black;
					background-color: white;
					cursor: pointer;
					filter: drop-shadow(5px 5px 0px #000000);
				}
			}
		}
	}
`;

const Hero = styled.main`
	background-color: #ff8c49;
	margin-top: 5rem;
	.hero-wrapper {
		max-width: 1100px;
		display: flex;
		flex-direction: row;
		margin: 0 auto;
		padding-bottom: 5rem; // todo: remove this when adding more components after Hero - used for temporary space for the borderbottom line

		border-bottom: 5px solid black;
	}

	.hero-grid {
		display: grid;
		grid-template-columns: 1.1fr 1fr;
		gap: 20px;

		.hero-grid-left {
			display: flex;
			flex-direction: column;
			p {
				max-width: 500px;
				margin: 0;
				font-weight: 500;
				margin-top: 2rem;
				font-size: 1.2rem;
			}
			h1 {
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

			.hero-cta {
				text-decoration: none;
				color: black;
				text-transform: uppercase;
				background-color: #ffed49;
				padding: 1rem 2rem;
				width: fit-content;
				margin-top: 3rem;
				font-weight: 600;
				font-size: 1.2rem;
				letter-spacing: 0.1ch;
				border-radius: 0.5rem;
				border: 5px solid black;
				transition: all 0.1s ease-out;
				filter: drop-shadow(5px 5px 0px #000000);

				&:hover {
					transform: translateX(-3px) translateY(-3px);
					filter: drop-shadow(9px 11px 0px #000000);
					color: black;
					background-color: white;
				}
			}
		}

		.hero-grid-right {
			display: flex;
			.hero-img-wrapper {
			}
			img {
				transition: all 0.1s ease-out;
				box-sizing: border-box;
				border: 1rem solid #ffed49;
				outline: 0.3rem solid black;
				border-radius: 1rem;
				width: 100%;
				height: 100%;
				object-fit: cover;
				filter: drop-shadow(5px 5px 0px #000000);

				&:hover {
					cursor: pointer;
					border-color: white;
					transform: translateX(-5px) translateY(-5px);
					filter: drop-shadow(20px 20px 0px black);
				}
			}
		}
	}
`;
function App() {
	return (
		<>
			<NavBar>
				<div className='nav-wrapper'>
					<div className='logo-wrapper'>
						<span className='logo'>SAM'S</span>
					</div>
					<div className='nav-menu'>
						<ul>
							<li>About</li>
							<li>Menu</li>
							<li>Reviews</li>
							<li>Social</li>
						</ul>
					</div>
				</div>
			</NavBar>
			<Hero>
				<div className='hero-wrapper'>
					<div className='hero-grid'>
						{/* HERO LEFT */}
						<div className='hero-grid-left'>
							<h1>New York's Favourite Burger</h1>
							<p>
								In a world so painfully serious, yet so ridiculous, you knew it
								was only a matter fo time before plant-based steak became a
								thing.
							</p>
							<a href='#' className='hero-cta'>
								Browse Menu
							</a>
						</div>

						{/* HERO RIGHT */}
						<div className='hero-grid-right'>
							<div className='hero-img-wrapper'>
								<img
									src={
										"https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
									}
									alt=''
								/>
							</div>
						</div>
					</div>
				</div>
			</Hero>
		</>
	);
}

export default App;
