import styled from "styled-components"

export interface Props {
  centered?: boolean
}

export default styled.h1<Props>`
  margin: 0;
  font-size: 2.25rem;
  font-weight: normal;
  text-align: ${(props) => (props.centered ? "centered" : "left")};
`
