import React from "react";

export interface props {
  headerStyle: Object;
  mainText?: string;
  mainTextStyle?: Object;
  userNameText?: string;
  userNameStyle?: Object;
}

function Header(props: props) {
  return (
    <header style={props.headerStyle}>
      {props.mainText ? (
        <h2 style={props.mainTextStyle}>{props.mainText}</h2>
      ) : null}
      {props.userNameText ? (
        <h2 style={props.userNameStyle}>{props.userNameText}</h2>
      ) : null}
    </header>
  );
}

export default Header;
