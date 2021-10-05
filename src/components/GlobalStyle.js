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
    --bg: #242526;
    --bg-accent: #484a4d;
    --text-color: #dadce1;
    --nav-size: 60px;
    --border: 1px solid #474a4d;
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