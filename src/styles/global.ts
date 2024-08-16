import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body {
        background-color: ${props => props.theme.background};
    }

    h1 {
        font-family: sans-serif;
        font-size: 20px;
        text-align: center;
    }

    p {
        font-family: sans-serif;
    }

`