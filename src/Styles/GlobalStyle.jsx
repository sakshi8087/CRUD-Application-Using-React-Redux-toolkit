import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


*{
  padding:0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
 
}

html{
  font-size: 62.5%;

}

body{

  background-color: #EFEDEE; 
   
}

h1{
  font-size:2.6rem;
}

p{
  font-size: 1.6rem;
}
input[type="radio"] {
    appearance: none;
    width: 14px;
    height: 14px;
    border: 2px solid #8c7569;
    border-radius: 50%;
    margin-right: 8px;
    cursor: pointer;
  }

  input[type="radio"]:checked {
    background-color: #8c7569;
  }
  .input-label1{
    font-size: 16px;
    color: #8c7569;
    cursor: pointer;
    margin-left:10px;
    
  }
`;