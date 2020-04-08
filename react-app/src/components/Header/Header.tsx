import React from "react"
import routes from "../../constants/routes"
import { Container, NavLink } from "./Header.sc"
import RecordsIcon from "../../icons/Records"
import PenIcon from "../../icons/Pen"

export default function Header() {
  return (
    <Container>
      <NavLink to={routes.records}>
        <RecordsIcon />
      </NavLink>
      <NavLink to={routes.write}>
        <PenIcon />
      </NavLink>
    </Container>
  )
}
