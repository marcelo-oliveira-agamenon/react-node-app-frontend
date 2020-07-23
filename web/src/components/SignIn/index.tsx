import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../../ducks/user";
import { MainForm, FileDiv } from "./styles";
import { useHistory } from "react-router-dom";
import Avatar from "../../assets/avatar.png";

const Errors = {
  name: "Deve ter mais de 6 caracteres",
};

export interface props {
  addUser: (
    username: string,
    password: string,
    info: object,
    roles: string
  ) => Promise<void>;
}

function SignInForm(props: props) {
  const history = useHistory();
  const [urlImage, setImageURL] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState("");

  const handleFileImage = (event: any) => {
    let image = URL.createObjectURL(event.target.files[0]);
    setImageURL(image);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (
      name === "" ||
      password === "" ||
      email === "" ||
      age === "" ||
      phone === "" ||
      urlImage === "" ||
      roles === ""
    ) {
      return;
    }
    let info: object = {
      age: age,
      email: email,
      phone: phone,
      avatar: urlImage,
    };
    props.addUser(name, password, info, roles).then((response) => {
      console.log(response);
    });
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
        <input
          type="text"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
        />
        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />
        <label>Idade</label>
        <input
          type="text"
          value={age}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setAge(event.target.value)
          }
        />
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
        <label>Telefone</label>
        <input
          type="text"
          value={phone}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPhone(event.target.value)
          }
        />
        <label>permissões do sistema</label>
        <select
          value={roles}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setRoles(event.target.value)
          }
        >
          <option value="">Escolha a permissão</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button
          type="submit"
          className="submit"
          onClick={(event: any) => handleSubmit(event)}
        >
          cadastrar
        </button>
        <button className="return" onClick={() => history.push("/")}>
          retornar
        </button>
      </MainForm>
    </>
  );
}

export default connect(null, (dispatch: any) => ({
  addUser: (username: string, password: string, info: object, roles: string) =>
    dispatch(addUser(username, password, info, roles)),
}))(SignInForm);
