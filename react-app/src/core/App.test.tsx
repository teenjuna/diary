import React from "react"
import App from "./App"
import { render } from "@testing-library/react"
import { withThemeProvider } from "../lib/testHelpers"

it("renders without crash", () => {
  render(withThemeProvider(<App />))
})
