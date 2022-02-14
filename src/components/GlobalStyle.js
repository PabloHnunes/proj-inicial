import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: grey;
}
:root{
    --color-itens-bg: #9FCAEC;
    --bg: #1D4064;
    --back-dash: #E0E0E0;
    --bg-accent: #9FCAEC;
    --text-color: #F0F8FF;
    --nav-size: 60px;
    --border: 1px solid #003366;
    --border-radius: 8px;
    --speed: 500ms;
    }
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        }
    a{
        text-decoration: none;
        color: var(--text-color);
     }
`;