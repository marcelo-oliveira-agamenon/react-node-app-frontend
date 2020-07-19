import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../ducks/auth";
import { useHistory } from "react-router-dom";
import { MainDiv, Form } from "./styles";

const mapStateToProps = (state: {
  apiToken: {
    token: string;
  };
  error: {
    data: {
      error: string;
    };
  };
}) => {
  return {
    apiToken: state.apiToken,
    error: state.error,
  };
};

export interface props {
  apiToken: {
    token: string;
  };
  error: {
    data: {
      error: string;
    };
  };
  login: (username: string, password: string) => Promise<string>;
}

function Userform(props: props) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.login(username, password).then((response) => {
      if (response !== undefined) {
        history.push("/dashboard");
      } else {
        setUsername("");
        setPassword("");
        return;
      }
    });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label>usuário</label>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label>senha</label>
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit" className="submit">
        Login
      </button>
      <button className="signin">cadastrar</button>
      <h4>esqueceu a senha?</h4>
    </Form>
  );
}

export default connect(mapStateToProps, (dispatch: any) => ({
  login: (username: string, password: string) =>
    dispatch(login(username, password)),
}))(Userform);
