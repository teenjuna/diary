import React from "react"
import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import { Router } from "@reach/router"
import RecordsPage from "../../pages/Records"
import RecordPage from "../../pages/Record"
import WritePage from "../../pages/Write"

type Props = {
	className?: string
}

export const UI = (props: Props) => {
	return (
		<>
			<GlobalStyle />
			<Router {...props}>
				<WritePage path="/write" />
				<RecordPage path="/:id" />
				<RecordsPage path="/" />
			</Router>
		</>
	)
}

const GlobalStyle = createGlobalStyle`
    ${normalize}

    html {
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

    p, pre, textarea, textarea::placeholder {
        color: inherit;
        line-height: 125%;
        letter-spacing: 0.01em;
        font-size: 1.1rem;
        font-weight: normal;
        font-family: inherit
    }

    pre {
        white-space: pre-wrap;
    }
`
