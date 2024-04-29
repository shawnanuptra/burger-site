import styled from "styled-components";
import HeroImage from "./assets/hero.jpg";
const NavBar = styled.nav`
	background-color: #ef491f;
	text-transform: uppercase;
	font-weight: 900;
	height: 5rem;
	place-content: center;

	.nav-wrapper {
		max-width: 1100px;
		display: flex;
		flex-direction: row;
		margin: 0 auto;
	}

	.logo-wrapper {
		margin: 0 auto 0 0;
		.logo {
			font-size: 2rem;
			font-weight: bolder;
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
		}
	}
`;

const Hero = styled.main`
	background-color: #ef491f;
	padding-top: 5rem;
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
				font-weight: 700;
				margin-top: 2rem;
				font-size: 1.2rem;
			}
			h1 {
				font-size: 5rem;
				font-weight: 900;
				margin: 0;
				line-height: 1.1;
				text-transform: uppercase;
			}

			.hero-cta {
				text-decoration: none;
				color: white;
				text-transform: uppercase;
				background-color: black;
				padding: 1rem 2rem;
				width: fit-content;
				margin-top: 3rem;
				font-weight: 700;
			}
		}

		.hero-grid-right {
			display: flex;
			.hero-wrapper {
			}
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 2rem;
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
							<div className='hero-wrapper'>
								<img src={HeroImage} alt='' />
							</div>
						</div>
					</div>
				</div>
			</Hero>
		</>
	);
}

export default App;
