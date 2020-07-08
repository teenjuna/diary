import gql from "graphql-tag"
import RecordFragment from "./RecordFragment"

export default gql`
	query GetRecords {
		getRecords {
			...Record
		}
	}
	${RecordFragment}
`
