import React, { FC } from "react"
import { RouteComponentProps } from "@reach/router"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { dateToRecordID } from "../../lib/date"
import {
	SaveRecordMutation,
	SaveRecordMutationVariables,
} from "../../graphql/types/SaveRecordMutation"
import {
	GetRecordQuery,
	GetRecordQueryVariables,
} from "../../graphql/types/GetRecordQuery"
import SAVE_RECORD_MUTATION from "../../graphql/SaveRecordMutation"
import GET_RECORD_QUERY from "../../graphql/GetRecordQuery"
import GET_RECORDS_QUERY from "../../graphql/GetRecordsQuery"
import styled from "styled-components"
import Form from "./Form"

const WritePage: FC<RouteComponentProps> = (props) => {
	// If a record was already saved today,
	// get it's text and show it in the form.
	const { data } = useQuery<GetRecordQuery, GetRecordQueryVariables>(
		GET_RECORD_QUERY,
		{
			variables: { id: dateToRecordID(new Date()) },
		}
	)

	// If save button was clicked, save the record
	// in the system.
	const [saveRecord] = useMutation<
		SaveRecordMutation,
		SaveRecordMutationVariables
	>(SAVE_RECORD_MUTATION, {
		refetchQueries: [{ query: GET_RECORDS_QUERY }],
		onCompleted: (data) => {
			props.navigate!("/" + data.saveRecord.id)
		},
		onError: (error) => {
			alert(error.message)
		},
	})
	const handleSubmit = (text: string) => {
		saveRecord({ variables: { text } })
	}
	return (
		<Container>
			<Form onSubmit={handleSubmit} previousText={data?.getRecord.text} />
		</Container>
	)
}

export default WritePage

const Container = styled.div`
	max-width: 25rem;

	margin: 0 auto;
`
