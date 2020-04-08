import React from "react"
import { RouteComponentProps } from "@reach/router"
import Page from "../../components/Page"
import Header from "../../components/Page/Header"

export interface Props extends RouteComponentProps {}

export default function RecordsPage(props: Props) {
  return (
    <Page>
      <Header>Records</Header>
    </Page>
  )
}
