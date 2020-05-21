import React, { FC } from "react"
import { RouteComponentProps } from "@reach/router"
import { useQuery } from "@apollo/react-hooks"
import { GetRecordsQuery } from "../../graphql/types/GetRecordsQuery"
import GET_RECORDS_QUERY from "../../graphql/GetRecordsQuery"
import styled from "styled-components"
import RecordList from "./RecordList"

const RecordsPage: FC<RouteComponentProps> = () => {
	const { data, loading } = useQuery<GetRecordsQuery>(GET_RECORDS_QUERY, {
		onError: (error) => {
			alert(error.message)
		},
	})

	if (loading || !data) {
		return null
	}

	return (
		<Container>
			<RecordList records={data.getRecords} />
		</Container>
	)
}

export default RecordsPage

const Container = styled.div`
	max-width: 14rem;

	margin: 0 auto;
`
