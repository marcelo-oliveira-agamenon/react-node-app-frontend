import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../ducks/auth";
import { useHistory } from "react-router-dom";
import { Form, MainDiv } from "./styles";
import ReactLoading from "react-loading";

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
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    props.login(username, password).then((response) => {
      setLoading(false);
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
    <MainDiv>
      <Form onSubmit={handleSubmit}>
        <h1>bem vindo!</h1>
        <label>usuário</label>
        <input
          type="text"
          value={username}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(event.target.value)
          }
        />
        <label>senha</label>
        <input
          type="password"
          value={password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />
        <button type="submit" className="submit">
          entrar
        </button>
        <button className="signin" onClick={() => history.push("/signIn")}>
          cadastrar
        </button>
        {loading ? (
          <ReactLoading type="spin" color="#2F0833" height={40} width={40} />
        ) : null}
        <h4 onClick={() => history.push("/forgotPassword")}>
          esqueceu a senha?
        </h4>
      </Form>
    </MainDiv>
  );
}

export default connect(mapStateToProps, (dispatch: any) => ({
  login: (username: string, password: string) =>
    dispatch(login(username, password)),
}))(Userform);
