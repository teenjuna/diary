import { gql } from "apollo-boost"
import RecordFragment from "./RecordFragment"

export default gql`
	query GetRecordsQuery {
		getRecords {
			...Record
		}
	}
	${RecordFragment}
`
