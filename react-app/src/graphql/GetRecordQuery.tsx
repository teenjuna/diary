import gql from "graphql-tag"
import RecordFragment from "./RecordFragment"

export default gql`
	query GetRecord($id: RecordID!) {
		getRecord(id: $id) {
			...Record
		}
	}
	${RecordFragment}
`
