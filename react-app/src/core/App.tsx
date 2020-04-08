import React from "react"
import { GlobalStyle, Router } from "./App.sc"
import routes from "../constants/routes"
import RecordsPage from "../pages/Records"
import Header from "../components/Header"
import WritePage from "../pages/Write"

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router primary={false}>
        <RecordsPage path={routes.records} />
        <WritePage path={routes.write} />
      </Router>
    </>
  )
}
