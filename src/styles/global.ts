import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*   {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
:focus {
      outline: 0;
}
body {
    -webkit-font-smoothing: antialised;
    background-color: black;
    color: white;
    overflow-x: hidden;
}
body, input-security, textarea, button {
    font: 400 1rem 'Corbel', sans-serif;
}
`
