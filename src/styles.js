import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
body{
   background-color: ${(props) => props.theme.mainColor}
}

*{
    box-sizing: border-box;
}
`;

const Title = styled.h1`
  color: ${(props) => props.theme.descriptiveTextColor};
  border: solid;
  border-margin: 5px;
  text-align: center;
  border-width: 2px;
`;
const Date = styled.h2`
  display: flex;
  align-self: center;
  justify-content: center;
  color: ${(props) => props.theme.headerTextColor};
  border: dotted;
  border-width: 2px;
  border-color: ${(props) => props.theme.borderColor};
  text-align: center;
  width: 20%;
  margin-left: 40%;
`;

const ListContainer = styled.div`
  display: block;
  justify-items: center;
  width: 75%;
  border: 3px solid;
  padding: 25px 25px 25px;
  margin-left: 15%;
  margin-top: 50px;
  background: black;
`;

export { Title, Date, GlobalStyle, ListContainer };
