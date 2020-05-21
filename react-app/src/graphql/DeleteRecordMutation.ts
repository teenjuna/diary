import { gql } from "apollo-boost"

export default gql`
	mutation DeleteRecordMutation($id: RecordID!) {
		deleteRecord(id: $id)
	}
`
