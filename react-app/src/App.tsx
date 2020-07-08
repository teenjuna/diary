import React from "react"
import { createClient, dedupExchange, fetchExchange } from "@urql/core"
import { cacheExchange } from "@urql/exchange-graphcache"
import { Provider as URQLProvider } from "urql"
import { Record } from "./graphql/generated"
import GetRecordsQuery from "./graphql/GetRecordsQuery"
import UI from "./components/UI"

const client = createClient({
	url:
		process.env.NODE_ENV === "production"
			? "/graphql"
			: "http://localhost:4000/graphql",
	fetchOptions: {
		mode: "cors",
	},
	maskTypename: true,
	exchanges: [
		dedupExchange,
		cacheExchange({
			updates: {
				Mutation: {
					deleteRecord: (result, args, cache, info) => {
						const id = args.id as string
						cache.invalidate({ __typename: "Record", id })
					},
					saveRecord: (result, args, cache, info) => {
						const record = result.saveRecord as Record
						cache.updateQuery({ query: GetRecordsQuery }, (data) => {
							if (data) {
								const records = data?.getRecords as Record[] | Record[]
								const i = records.findIndex((rec) => rec.id === record.id)
								if (i === -1) {
									records.unshift(record)
								} else {
									records[i] = record
								}
								data.getRecords = records
							}
							return data
						})
					},
				},
			},
		}),
		fetchExchange,
	],
})

const App = () => {
	return (
		<URQLProvider value={client}>
			<UI />
		</URQLProvider>
	)
}

export default App
