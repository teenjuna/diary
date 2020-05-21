import { gql } from "apollo-boost"
import RecordFragment from "./RecordFragment"

export default gql`
	query GetRecordQuery($id: RecordID!) {
		getRecord(id: $id) {
			...Record
		}
	}
	${RecordFragment}
`
