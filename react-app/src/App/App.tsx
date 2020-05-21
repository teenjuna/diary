import React, { FC } from "react"
import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import { ApolloProvider } from "@apollo/react-hooks"
import ApolloClient from "apollo-boost"
import Layout from "../components/Layout/Layout"

const client = new ApolloClient({
	uri:
		process.env.NODE_ENV === "production"
			? "/graphql"
			: "http://localhost:4000/graphql",
})

const App: FC = () => {
	return (
		<ApolloProvider client={client}>
			<GlobalStyle />
			<Layout />
		</ApolloProvider>
	)
}

export default App

const GlobalStyle = createGlobalStyle`
    ${normalize}

    html, body, #root {
        width: 100%;
        height: 100%;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;

        outline: 0 !important;
    }

    a {
        text-decoration: none;
    }
`
