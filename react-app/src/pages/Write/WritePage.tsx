import React, { ChangeEvent, useState, useEffect } from "react"
import styled from "styled-components"
import { humanizeDate, dateToRecordID } from "../../lib/date"
import { RouteComponentProps, useNavigate } from "@reach/router"
import {
	useSaveRecordMutation,
	useGetRecordQuery,
} from "../../graphql/generated"
import { ArrowLeftIcon } from "../../icons"
import AutosizeTextarea from "react-autosize-textarea"
import Page, {
	Header,
	Title,
	Controls,
	ActionButton,
	IconButton,
} from "../../components/Page"

type Props = RouteComponentProps

export const WritePage = (props: Props) => {
	const navigate = useNavigate()
	const [text, setText] = useState("")
	const [, saveRecord] = useSaveRecordMutation()
	const [recordQuery] = useGetRecordQuery({
		variables: { id: dateToRecordID(new Date()) },
	})

	useEffect(() => {
		if (recordQuery.data) {
			setText(recordQuery.data.getRecord.text)
		}
	}, [recordQuery, setText])

	const handleClickBack = () => {
		navigate("/")
	}

	const handleClickSave = async () => {
		setText(text.trim())
		if (!text) {
			alert("Can't save empty record :(")
			return
		}

		const result = await saveRecord({ text })
		if (result.error) {
			alert(result.error)
			return
		}

		const record = result.data!.saveRecord
		navigate(`/${record.id}`)
	}

	const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value)
	}

	return (
		<Page>
			<Header>
				<Title>{humanizeDate(new Date())}</Title>
				<Controls>
					<IconButton onClick={handleClickBack}>
						<ArrowLeftIcon />
					</IconButton>
					<ActionButton onClick={handleClickSave}>Save</ActionButton>
				</Controls>
			</Header>
			<Textarea
				value={text}
				onChange={handleTextChange}
				placeholder="Start typing..."
				spellCheck={false}
				rows={5}
			/>
		</Page>
	)
}

const Textarea = styled(AutosizeTextarea)`
	width: 100%;
	color: inherit;
	font-size: 1.1rem;
	border: none;
	resize: none;

	&::placeholder {
		color: #666666;
		opacity: 1 !important;
	}
`
