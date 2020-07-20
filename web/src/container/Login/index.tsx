import React from "react";
import Userform from "../../components/Login";
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
            <Userform />
            <ImageComponent>
              <img src={Image} alt="Liberty statue" />
            </ImageComponent>
          </FormComponent>
        </LoginComponent>
      </MainScreen>
    </>
  );
}

export default Login;
