import { gql } from "apollo-boost"
import RecordFragment from "./RecordFragment"

export default gql`
	mutation SaveRecordMutation($text: String!) {
		saveRecord(text: $text) {
			...Record
		}
	}
	${RecordFragment}
`
