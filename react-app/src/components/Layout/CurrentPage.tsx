import React, { FC } from "react"
import styled from "styled-components"
import { Router, Redirect } from "@reach/router"
import RecordsPage from "../../pages/Records"
import RecordPage from "../../pages/Record"
import WritePage from "../../pages/Write"

const CurrentPage: FC = () => {
	return (
		<Container>
			<RecordsPage path="/list" />
			<RecordPage path="/:id" />
			<WritePage path="/write" />
			<Redirect from="/" to="/list" noThrow />
		</Container>
	)
}

export default CurrentPage

const Container = styled(Router)`
	flex-grow: 1;
`
