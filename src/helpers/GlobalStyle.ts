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
  --color-background: #060412;
  --color-text: #b3b3b3;
  --color-accent: #204ffe;

  --font-family: 'Noto Sans KR', sans-serif;
  --title-font-family: "Kanit", sans-serif;
  
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
  font-family: var(--font-family);
  background-color: var(--color-background);
  color: var(--color-text);
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
