import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  width: 450px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  padding: 0px 100px;

  h1 {
    font-size: 36px;
    text-transform: uppercase;
    font-family: "Sansita", sans-serif;
    font-weight: 300;
    letter-spacing: 8px;
    margin-top: 58px;
    margin-bottom: 55px;
    margin-left: 15px;
  }

  label {
    font-family: "Sansita", sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 15px;
    margin-bottom: 7px;
    margin-left: 5px;
  }

  .submit {
    font-family: "Sansita", sans-serif;
    text-transform: uppercase;
    background-color: rgb(47, 8, 51, 0.85);
    color: #fff;
    letter-spacing: 1.3px;
    border-radius: 25px;
    outline: none;
    border-style: none;
    padding: 7px 0px;
    cursor: pointer;
    margin-top: 40px;
    font-size: 17px;
    letter-spacing: 1.5px;
    box-shadow: 5px 5px 8px rgb(0, 0, 0, 0.25);
  }

  .signin {
    font-family: "Sansita", sans-serif;
    text-transform: uppercase;
    background-color: #61cbc8;
    color: #000;
    letter-spacing: 1.3px;
    border-radius: 25px;
    outline: none;
    border-style: none;
    padding: 7px 0px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 17px;
    letter-spacing: 1.5px;
    box-shadow: 5px 5px 8px rgb(0, 0, 0, 0.25);
  }

  input {
    border: 1.2px solid #2f0833;
    border-radius: 28px;
    padding: 15px 6px;
    outline: none;
    margin-bottom: 8px;
    width: 250px;
    box-shadow: 5px 5px 6px rgb(0, 0, 0, 0.25);
  }

  h4 {
    font-family: "Sansita", sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 32px;
    margin-left: 60px;
  }
`;
