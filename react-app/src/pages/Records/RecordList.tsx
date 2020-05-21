import React, { FC } from "react"
import styled from "styled-components"
import { humanizeDate } from "../../lib/date"
import { Record } from "../../graphql/types/Record"
import { Link } from "@reach/router"

type Props = {
	records: Record[]
}

const RecordList: FC<Props> = ({ records }) => {
	return (
		<Container>
			{records.map((record, i) => (
				<RecordLink to={"/" + record.id} key={i}>
					{humanizeDate(new Date(record.date))}
				</RecordLink>
			))}
		</Container>
	)
}

export default RecordList

const Container = styled.div``

const RecordLink = styled(Link)`
	width: 100%;
	height: 4rem;

	display: flex;
	align-items: center;
	justify-content: center;

	color: black;
	font-size: 1.125rem;
	text-decoration: none;
	text-transform: uppercase;

	border-radius: 0.25rem;
	border: 4px solid #f3f3f3;

	&:hover {
		background-color: #f3f3f3;
	}
`
