import React from "react";
import styled from "styled-components";
import { device } from "../constants";

const ContainerStyle = styled.div`
	max-width: 1100px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	padding: 20rem 0;

	@media ${device.sm} {
		text-align: center;
		padding: 10vh 10vw;
	}
`;
function Container({ children }) {
	return <ContainerStyle>{children}</ContainerStyle>;
}

export default Container;
