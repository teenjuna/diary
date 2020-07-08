import React from "react"
import styled from "styled-components"
import { humanizeDate, dateToRecordID } from "../../lib/date"
import { useNavigate, RouteComponentProps, Link } from "@reach/router"
import { ArrowLeftIcon, PencilIcon } from "../../icons"
import {
	useGetRecordQuery,
	useDeleteRecordMutation,
} from "../../graphql/generated"
import Page, {
	Header,
	Title,
	Controls,
	IconButton,
	ActionButton,
} from "../../components/Page"

type Props = RouteComponentProps & {
	id?: string
}

export const RecordPage = (props: Props) => {
	const navigate = useNavigate()
	const [recordQuery] = useGetRecordQuery({
		variables: {
			id: props.id!,
		},
	})
	const [deleteRecordMutation, deleteRecord] = useDeleteRecordMutation()
	if (recordQuery.fetching) {
		return <>Fetching record...</>
	} else if (recordQuery.error) {
		return <>Error: {recordQuery.error}</>
	}
	if (deleteRecordMutation.fetching) {
		return <>Deleting record...</>
	} else if (deleteRecordMutation.error) {
		return <>Error: {deleteRecordMutation.error}</>
	}

	const record = recordQuery.data!.getRecord
	const showEditButton = dateToRecordID(new Date()) === record.id

	const handleClickBack = () => {
		navigate("/")
	}

	const handleClickDelete = () => {
		if (window.confirm("Do you really want to delete this record?")) {
			deleteRecord({ id: props.id! })
			navigate("/")
		}
	}

	return (
		<Page>
			<Header>
				<Title>{humanizeDate(new Date(record?.date))}</Title>
				<Controls>
					<IconButton onClick={handleClickBack}>
						<ArrowLeftIcon />
					</IconButton>
					{showEditButton && (
						<IconButton as={Link} to="/write">
							<PencilIcon />
						</IconButton>
					)}
					<ActionButton onClick={handleClickDelete}>Delete</ActionButton>
				</Controls>
			</Header>
			<RecordText>{record.text}</RecordText>
		</Page>
	)
}

const RecordText = styled.pre``
