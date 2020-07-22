import styled from "styled-components";

export const MainScreen = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginComponent = styled.div`
  border: 2px solid #000;
  border-radius: 4px;
  width: 100%;
  max-width: 1100px;
  height: 600px;
  background-color: #fff;
  margin-top: 55px;
  box-shadow: 0px 6px 8px 2px rgb(0, 0, 0, 0.25),
    6px 0px 8px 2px rgb(0, 0, 0, 0.25);
`;

export const FormComponent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageComponent = styled.div`
  display: flex;
  height: 600px;
  width: 650px;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;
