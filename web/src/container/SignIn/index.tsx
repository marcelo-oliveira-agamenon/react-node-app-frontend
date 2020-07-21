import React from "react";
import { MainScreen, SignInComponent, ImageComponent } from "./styles";
import SignInForm from "../../components/SignIn/index";

function SignIn() {
  return (
    <>
      <MainScreen>
        <SignInComponent>
          <SignInForm />
        </SignInComponent>
        <ImageComponent></ImageComponent>
      </MainScreen>
    </>
  );
}

export default SignIn;
