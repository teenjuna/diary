import React, { FC } from "react"
import styled from "styled-components"
import Header from "./Header"
import CurrentPage from "./CurrentPage"

const Layout: FC = () => {
	return (
		<Container>
			<Header />
			<CurrentPage />
		</Container>
	)
}

export default Layout

const Container = styled.div`
	height: 100%;

	display: flex;
	flex-direction: column;
`
