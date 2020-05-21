import { gql } from "apollo-boost"

export default gql`
	fragment Record on Record {
		id
		text
		date
	}
`
