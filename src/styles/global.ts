import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*   {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    }
:focus {
      outline: 0;
}
body {
    -webkit-font-smoothing: antialised;
    background-color: black;
    color: white;
}
body, input-security, textarea, button {
    font: 400 1rem 'Corbel', sans-serif;
}
`
