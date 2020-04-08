import React from "react"
import Page from "./WritePage"
import { render } from "@testing-library/react"

it("renders without crashing", () => {
  render(<Page />)
})
