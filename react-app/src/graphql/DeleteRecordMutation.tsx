import gql from "graphql-tag"

export default gql`
	mutation DeleteRecord($id: RecordID!) {
		deleteRecord(id: $id)
	}
`
