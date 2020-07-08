import React from "react"
import { RouteComponentProps, Link } from "@reach/router"
import { useGetRecordsQuery } from "../../graphql/generated"
import Page, {
	Header,
	Title,
	Controls,
	ActionButton,
} from "../../components/Page"
import { RecordLink } from "./RecordLink"

type Props = RouteComponentProps

export const RecordsPage = (props: Props) => {
	const [recordsQuery] = useGetRecordsQuery()
	if (recordsQuery.fetching) {
		return <>Fetching records...</>
	} else if (recordsQuery.error) {
		return <>Error: {recordsQuery.error}</>
	}

	const records = recordsQuery.data!.getRecords

	return (
		<Page>
			<Header>
				<Title>All records</Title>
				<Controls>
					<ActionButton as={Link} to="/write">
						Add record
					</ActionButton>
				</Controls>
			</Header>
			{records?.map((record, i) => (
				<RecordLink record={record} key={i} />
			))}
		</Page>
	)
}
