import styled from "styled-components"
import Button from "../Button"

export const Page = styled.div`
	margin: 0 auto;
	margin-top: 4rem;
	max-width: 30rem;
`

export const Header = styled.header`
	margin-bottom: 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Title = styled.h1`
	margin: 0;
	font-size: 2rem;
	justify-self: flex-start;
`

export const Controls = styled.div`
	display: flex;
	align-items: center;
	justify-self: flex-end;
	& > *:not(:first-child) {
		margin-left: 0.5rem;
	}
`

export const ActionButton = styled(Button)`
	width: 8rem;
	height: 2.5rem;
	padding: 0;
`

export const IconButton = styled(Button)`
	width: 3rem;
	height: 2.5rem;
	padding: 0;
`
