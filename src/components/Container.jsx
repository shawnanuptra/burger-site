import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
	max-width: 1100px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	padding: 20rem 0;
`;
function Container({ children }) {
	return <ContainerStyle>{children}</ContainerStyle>;
}

export default Container;
