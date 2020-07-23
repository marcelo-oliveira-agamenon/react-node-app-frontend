import styled from "styled-components";
import Image from "../../assets/image1.jpg";

export const MainScreen = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const SignInComponent = styled.div`
  border: 2px solid #000;
  border-radius: 5px;
  margin-top: 15px;
  background-color: #fff;
  height: 720px;
  width: 100%;
  max-width: 500px;
  box-shadow: -5px 0px 8px rgb(0, 0, 0, 0.25), 5px 0px 8px rgb(0, 0, 0, 0.25);
`;

export const ImageComponent = styled.div`
  margin-top: 15px;
  height: 720px;
  width: 100%;
  max-width: 750px;
  background-image: url(${Image});
  box-shadow: -5px 0px 15px rgb(0, 0, 0, 0.25), 5px 0px 15px rgb(0, 0, 0, 0.25);
`;
