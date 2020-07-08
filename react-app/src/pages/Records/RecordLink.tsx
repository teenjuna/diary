import React from "react"
import styled from "styled-components"
import { humanizeDate } from "../../lib/date"
import { Link } from "@reach/router"
import { Record } from "../../graphql/generated"

type Props = {
	record: Record
}

export const RecordLink = (props: Props) => {
	return (
		<Container to={`/${props.record.id}`}>
			<RecordDate>{humanizeDate(new Date(props.record.date))}</RecordDate>
			<RecordText>{props.record.text}</RecordText>
		</Container>
	)
}

const Container = styled(Link)`
	display: block;
	margin-bottom: 1.5rem;
	color: black;
`

const RecordDate = styled.h2`
	margin-bottom: 0.25rem;
	font-size: 1.35rem;
	font-weight: bold;
`

const RecordText = styled.pre`
	font-size: 1.1rem;
	white-space: normal;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 5;
	overflow: hidden;
`
