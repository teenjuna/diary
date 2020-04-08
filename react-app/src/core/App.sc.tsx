import styled, { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import { Router as ReachRouter } from "@reach/router"

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    html,
    body,
    #root {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

    * {
        box-sizing: inherit;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Roboto Condensed', sans-serif;
        background-color: ${(props) => props.theme.colors.bodyBackground};
    }

    #root {
        display: flex;
        flex-direction: column;
    }
`

export const Router = styled(ReachRouter)`
  flex-grow: 1;
`
