import React, { FC, useState, useEffect, ChangeEvent, FormEvent } from "react"
import { humanizeDate } from "../../lib/date"
import styled from "styled-components"
import Button from "../../components/Button"
import TextareaAutosize from "react-textarea-autosize"

type Props = {
	onSubmit: (text: string) => void
	previousText?: string
}

const Form: FC<Props> = (props) => {
	const [text, setText] = useState("")
	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value)
		sessionStorage.setItem("text", e.target.value)
	}
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		sessionStorage.removeItem("text")
		if (!text.trim()) {
			alert("Probably you should write something!")
			return
		}
		props.onSubmit(text)
	}

	useEffect(() => {
		// Two variants:
		// 1) If we have text saved in sessionStorage, use it.
		// This will prevent user from losing input after
		// accident navigatio or tab refresh.
		// 2) Otherwise, if we have text from previous version
		// of this record, use it.
		const textCopy = sessionStorage.getItem("text")
		if (!textCopy && props.previousText) {
			setText(props.previousText)
		} else if (textCopy) {
			setText(textCopy)
		}
	}, [setText, props.previousText])

	const currentDate = humanizeDate(new Date())

	return (
		<Container onSubmit={handleSubmit}>
			<TextareaContainer>
				<Heading>{currentDate}</Heading>
				<Textarea value={text} onChange={handleChange} />
			</TextareaContainer>
			<ButtonContainer>
				<Button type="submit">Save</Button>
			</ButtonContainer>
		</Container>
	)
}

export default Form

const Container = styled.form``

const TextareaContainer = styled.div`
	width: 100%;

	padding: 0.8rem;

	border: 4px solid #f3f3f3;
	border-radius: 0.25rem;

	&:focus-within {
		border-color: #d8d8d8;
	}
`

const Heading = styled.h3`
	margin: 0;

	font-size: 0.875rem;
	text-transform: uppercase;
`

const Textarea = styled(TextareaAutosize)`
	width: 100%;
	min-height: 15rem;

	margin-top: 0.8rem;

	color: black;
	font-weight: normal;
	line-height: 1.4rem;

	border: 0;

	resize: none;

	&:hover:not(:focus) {
		cursor: pointer;
	}
`

const ButtonContainer = styled.div`
	margin-top: 1rem;

	display: flex;
	align-items: center;
	justify-content: right;
`
