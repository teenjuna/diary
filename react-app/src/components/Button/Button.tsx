import styled from "styled-components"
import { space, SpaceProps } from "styled-system"

export default styled.button<SpaceProps>`
	${space}

	width: 6.25rem;
	height: 3rem;

	display: flex;
	align-items: center;
	justify-content: center;

	color: black;
	font-size: 0.875rem;
	font-weight: bold;
	text-transform: uppercase;

	background-color: inherit;

	border-radius: 0.25rem;
	border: 4px solid #f3f3f3;

	&:hover,
	&:focus {
		background-color: #f3f3f3;
		cursor: pointer;
	}
`
