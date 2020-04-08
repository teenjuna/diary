import { DefaultTheme } from "styled-components"
import colors from "../constants/colors"

export const lightTheme: DefaultTheme = {
  borderRadius: "0.625rem",
  colors: {
    text: colors.black,
    bodyBackground: colors.white,
  },
}

export default lightTheme
