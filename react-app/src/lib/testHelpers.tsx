import React from "react"
import { ThemeProvider } from "styled-components"
import lightTheme from "../themes/light"

export function withThemeProvider(element: JSX.Element) {
  return <ThemeProvider theme={lightTheme}>{element}</ThemeProvider>
}
