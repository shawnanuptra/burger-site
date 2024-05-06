import styled from "styled-components";
import HeroImage from "./assets/hero.jpg";
import { device } from "./constants";
import Introduction from "./Introduction";
import OurBurgers from "./OurBurgers";
import Reviews from "./Reviews";

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
		margin: 0 auto;
		padding: 0 3vw; //-3px for border bottom
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

	.nav-hamburger-wrapper {
		display: none;
	}

	// mobile
	@media ${device.sm} {
		/* hides the menu until toggle (?) */
		.nav-wrapper {
			position: relative;
			max-width: 300px;

			/* background-color: white; */
		}
		.nav-menu {
			display: none;
			z-index: 999;
		}
		.nav-menu.open {
			background-color: white;
			position: absolute;
			display: flex;
			width: 100%;
			top: 6rem;
			left: 0;
			ul {
				flex-direction: column;
				place-items: center;

				li {
				}
			}
		}

		.nav-hamburger-wrapper {
			display: block;
			overflow: visible;
			svg {
				overflow: visible;
			}
			.line {
				transition: all 0.1s ease-in;
				transform-origin: left center;
			}
		}

		.nav-hamburger-wrapper.open {
			.top-line {
				rotate: 45deg;
				translate: 0 -4px;
			}
			.middle-line {
				opacity: 0;
			}
			.bot-line {
				rotate: -45deg;
				translate: 0 4px;
			}
		}
	}
`;

const Hero = styled.main`
	background-color: #ff8c49;
	margin: 10rem 0;
	.hero-wrapper {
		max-width: 1100px;
		display: flex;
		flex-direction: row;
		margin: 0 auto;
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

	@media ${device.sm} {
		padding: 0 10vw;
		margin-top: 2rem;
		.hero-grid {
			display: grid;
			grid-template-columns: 1fr;

			.hero-grid-left {
				order: 1;
				text-align: center;
				place-items: center;
				margin-top: 2rem;
				.hero-cta {
					margin-top: 2rem;
				}
				h1 {
					font-size: 3rem;
					-webkit-text-stroke: 3px black;
					text-shadow: 4px 4px black;
				}
			}

			.hero-grid-right {
				order: -1;
				.hero-img-wrapper {
					img {
						border: 0.5rem solid #ffed49;
						filter: drop-shadow(5px 9px 0px #000000);
					}
				}
			}
		}
	}
`;
function App() {
	const handleClick = () => {
		// toggle
		let el = document.getElementsByClassName("nav-menu").item(0);

		if (el.matches(".open")) {
			//close
			el.classList.remove("open");
			document
				.getElementsByClassName("nav-hamburger-wrapper")
				.item(0)
				.classList.remove("open");
		} else {
			el.classList.add("open");
			document
				.getElementsByClassName("nav-hamburger-wrapper")
				.item(0)
				.classList.add("open");
		}
	};
	return (
		<>
			<NavBar>
				<div className='nav-wrapper'>
					<div className='logo-wrapper'>
						<span className='logo'>SAM'S</span>
					</div>
					<div className='nav-hamburger-wrapper' onClick={handleClick}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
							class='icon icon-tabler icons-tabler-outline icon-tabler-menu-2'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path className='line top-line' d='M4 6l16 0' />
							<path className='line middle-line' d='M4 12l16 0' />
							<path className='line bot-line' d='M4 18l16 0' />
						</svg>
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
			<Introduction />
			<OurBurgers />
			<Reviews />
		</>
	);
}

export default App;
