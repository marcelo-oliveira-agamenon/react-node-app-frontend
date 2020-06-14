import React from "react";
import Userform from "../../components/Login/userform";
import Header from "../../components/Header/header";

export class Login extends React.Component {
  render() {
    return (
      <>
        <Header
          mainText="My Site"
          mainTextStyle={{
            margin: 0,
            fontSize: "2.5vw",
            fontFamily: "Roboto, sans-serif",
            letterSpacing: "2px",
            fontWeight: "lighter",
            color: "#fff"
          }}
          headerStyle={{
            width: "100%",
            height: "10vh",
            backgroundColor: "#4B4B4B"
          }}
        />
        <div style={{ marginLeft: "35vw", marginTop: "20vh" }}>
          <Userform />
        </div>
      </>
    );
  }
}

export default Login;
