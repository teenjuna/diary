import gql from "graphql-tag"
import RecordFragment from "./RecordFragment"

export default gql`
	mutation SaveRecord($text: String!) {
		saveRecord(text: $text) {
			...Record
		}
	}
	${RecordFragment}
`
