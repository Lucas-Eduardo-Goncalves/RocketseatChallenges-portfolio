import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background-primary: #22212C;
    --background-secondary: #302F3D;

    --text: #837E9F;
    --primary: #00FF00;
    --secondary: #CB92B1;
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Merriweather Sans', sans-serif;
    background-color: var(--background-primary);
    color: var(--text);
  }

  a {
    color: var(--text);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .blockComponent {
    border-radius: 20px;
    padding: 32px;
    background-color: var(--background-secondary);
  }
`;
