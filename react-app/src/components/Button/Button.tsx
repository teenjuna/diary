import styled from "styled-components"
import { space, SpaceProps, layout, LayoutProps } from "styled-system"

//prettier-ignore
type Props = 
	SpaceProps &
	LayoutProps

export const Button = styled.button<Props>`
	padding: 0.5rem 0.8rem;
	display: flex;
	align-items: center;
	justify-content: center;
	color: black;
	font-size: 1.1rem;
	font-weight: bold;
	text-transform: uppercase;
	background-color: #f5f5f5;
	border-radius: 0.6rem;
	border: 0;
	&:hover {
		background-color: #ebeaea;
		cursor: pointer;
	}
	${space}
	${layout}
`
