import React, { FC } from "react"
import styled from "styled-components"
import { Link } from "@reach/router"

const Header: FC = () => {
	return (
		<Container>
			<Nav>
				<NavLink to="/list">List</NavLink>
				<NavLink to="/write">Write</NavLink>
			</Nav>
		</Container>
	)
}

export default Header

const Container = styled.header`
	height: 8rem;

	display: flex;
	align-items: center;
	justify-content: center;
`

const Nav = styled.nav`
	width: 14rem;
	max-width: 14rem;

	display: flex;
	align-items: center;
	justify-content: space-between;
`

const NavLink = styled(Link)`
	width: 6.25rem;
	height: 3rem;

	display: flex;
	align-items: center;
	justify-content: center;

	color: black;
	font-size: 0.875rem;
	font-weight: bold;
	text-decoration: none;
	text-transform: uppercase;

	border-radius: 0.25rem;
	border: 4px solid white;

	&[aria-current] {
		border-color: #f3f3f3;
	}
`
