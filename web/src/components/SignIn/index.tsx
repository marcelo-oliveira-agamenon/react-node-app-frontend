import React from "react";
import { MainForm, FileDiv } from "./styles";
import { useHistory } from "react-router-dom";

function SignInForm() {
  const history = useHistory();

  return (
    <>
      <MainForm>
        <FileDiv>
          <input type="file" className="inputFile" />
          <button className="addImage">adicionar foto</button>
        </FileDiv>
        <label>Nome do Usuário</label>
        <input type="text" />
        <label>Senha</label>
        <input type="password" />
        <label>Idade</label>
        <input type="text" />
        <label>Email</label>
        <input type="text" />
        <label>Telefone</label>
        <input type="text" />
        <label>permissões do sistema</label>
        <select>
          <option value=""></option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button type="submit" className="submit">
          cadastrar
        </button>
        <button className="return" onClick={() => history.push("/")}>
          retornar
        </button>
      </MainForm>
    </>
  );
}

export default SignInForm;
