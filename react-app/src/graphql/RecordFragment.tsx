import gql from "graphql-tag"

export default gql`
	fragment Record on Record {
		id
		text
		date
	}
`
