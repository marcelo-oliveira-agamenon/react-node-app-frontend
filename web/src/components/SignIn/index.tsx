import React, { useState } from "react";
import { MainForm, FileDiv } from "./styles";
import { useHistory } from "react-router-dom";
import Avatar from "../../assets/avatar.png";

function SignInForm() {
  const history = useHistory();
  const [urlImage, setImageURL] = useState("");

  const handleFileImage = (event: any) => {
    let image = URL.createObjectURL(event.target.files[0]);
    setImageURL(image);
  };

  return (
    <>
      <MainForm>
        <FileDiv>
          <img src={urlImage === "" ? Avatar : urlImage} alt="avatar" />
          <input
            id="inputFile"
            type="file"
            accept="image/jpg/png/jpeg"
            onChange={(event) => handleFileImage(event)}
          />
          <button
            type="button"
            onClick={() => document.getElementById("inputFile")?.click()}
          >
            adicionar foto
          </button>
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
