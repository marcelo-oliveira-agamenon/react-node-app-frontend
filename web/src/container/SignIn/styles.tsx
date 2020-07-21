import styled from "styled-components";

export const MainScreen = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #a7d6d4;
`;

export const SignInComponent = styled.div`
  border: 2px solid #000;
  border-radius: 5px;
  background-color: #fff;
  height: 720px;
  width: 500px;
  box-shadow: -5px 0px 8px rgb(0, 0, 0, 0.25), 5px 0px 8px rgb(0, 0, 0, 0.25);
`;

export const ImageComponent = styled.div`
  height: 720px;
  width: 500px;
  border: 1px solid red;
`;
