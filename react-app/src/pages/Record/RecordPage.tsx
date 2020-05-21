import React, { FC } from "react"
import { humanizeDate } from "../../lib/date"
import { RouteComponentProps, Link } from "@reach/router"
import { useQuery, useMutation } from "@apollo/react-hooks"
import {
	GetRecordQuery,
	GetRecordQueryVariables,
} from "../../graphql/types/GetRecordQuery"
import {
	DeleteRecordMutation,
	DeleteRecordMutationVariables,
} from "../../graphql/types/DeleteRecordMutation"
import GET_RECORD_QUERY from "../../graphql/GetRecordQuery"
import GET_RECORDS_QUERY from "../../graphql/GetRecordsQuery"
import DELETE_RECORD_MUTATION from "../../graphql/DeleteRecordMutation"
import styled from "styled-components"
import Button from "../../components/Button"

type Props = RouteComponentProps & {
	id?: string
}

const RecordPage: FC<Props> = (props) => {
	const { data, loading } = useQuery<GetRecordQuery, GetRecordQueryVariables>(
		GET_RECORD_QUERY,
		{
			variables: { id: props.id! },
			onError: (error) => {
				alert(error.message)
			},
		}
	)
	const [deleteRecord] = useMutation<
		DeleteRecordMutation,
		DeleteRecordMutationVariables
	>(DELETE_RECORD_MUTATION, {
		refetchQueries: [{ query: GET_RECORDS_QUERY }],
		onError: (error) => {
			alert(error.message)
		},
		onCompleted: (data) => {
			props.navigate!("/")
		},
	})
	const handleDelete = () => {
		if (window.confirm("Do you really want to delete it?")) {
			deleteRecord({
				variables: {
					id: props.id!,
				},
			})
		}
	}

	if (loading || !data) {
		return null
	}

	const displayEditButton = () => {
		return (
			humanizeDate(new Date()) === humanizeDate(new Date(data.getRecord.date))
		)
	}

	return (
		<Container>
			<TextContainer>
				<Heading>{humanizeDate(new Date(data.getRecord.date))}</Heading>
				<Text>{data.getRecord.text}</Text>
			</TextContainer>
			<ButtonContainer>
				{displayEditButton() && (
					<Button to="/write" as={Link} mr="0.5rem">
						Edit
					</Button>
				)}
				<Button onClick={handleDelete}>Delete</Button>
			</ButtonContainer>
		</Container>
	)
}

export default RecordPage

const Container = styled.div`
	max-width: 25rem;

	margin: 0 auto;
`

const TextContainer = styled.div`
	width: 100%;

	padding: 0.8rem;

	border: 4px solid #f3f3f3;
	border-radius: 0.25rem;
`

const Heading = styled.h3`
	margin: 0;

	font-size: 0.875rem;
	text-transform: uppercase;
`

const Text = styled.pre`
	width: 100%;
	min-height: 15rem;

	margin-top: 0.8rem;

	color: black;
	font-family: inherit;
	font-weight: normal;
	word-wrap: break-word;
	white-space: pre-wrap;
	line-height: 1.4rem;
`

const ButtonContainer = styled.div`
	margin-top: 1rem;

	display: flex;
	align-items: center;
	justify-content: flex-end;
`
