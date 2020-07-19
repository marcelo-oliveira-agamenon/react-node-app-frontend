import React from "react";
import Userform from "../../components/Login/userform";
import {
  MainScreen,
  LoginComponent,
  FormComponent,
  ImageComponent,
} from "./styles";
import Image from "../../assets/image2.png";

function Login() {
  return (
    <>
      <MainScreen>
        <LoginComponent>
          <FormComponent>
            <h1>bem vindo!</h1>
            <Userform />
            <ImageComponent>
              <img src={Image} alt="" />
            </ImageComponent>
          </FormComponent>
        </LoginComponent>
      </MainScreen>
    </>
  );
}

export default Login;
