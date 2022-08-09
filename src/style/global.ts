import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    font-family: 'Poppins', sans-seri;
    font-weight: 300;

  }

  body {
    height: 100%;
    width: 100%;
  }

  button {
    cursor: pointer;
  }

`