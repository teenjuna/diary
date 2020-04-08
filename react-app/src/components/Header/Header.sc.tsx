import styled from "styled-components"
import { Link } from "@reach/router"

export const Container = styled.div`
  width: 100%;
  height: 8rem;
  max-width: 60rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > * {
    margin-left: 1rem;
  }
  & > *:first-child {
    margin-left: 0;
  }
`

export const NavLink = styled(Link)`
  padding: 0.75rem;
  border-radius: 100%;
  text-decoration: none;
  &,
  &:visited {
    color: ${(props) => props.theme.colors.text};
  }
`
