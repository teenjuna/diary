import React from "react"
import ReactDOM from "react-dom"
import App from "./core"
import * as serviceWorker from "./lib/serviceWorker"
import { ThemeProvider } from "styled-components"
import lightTheme from "./themes/light"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.unregister()
