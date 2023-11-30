import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

:root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  
  margin-left: auto;
  margin-right: auto;

  max-width: 1440px;
  min-height: 100vh;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  border: none;
  font-family: inherit;
  cursor: pointer;
}
`;
