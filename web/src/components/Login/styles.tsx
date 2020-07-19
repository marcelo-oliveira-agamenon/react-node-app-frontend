import styled from "styled-components";

export const MainDiv = styled.div`
  border: 12px;
`;

export const Form = styled.form`
  width: 150px;

  label {
    font-family: "Sansita", sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 15px;
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
    padding-top: 5px;
    padding-bottom: 5px;
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
    padding-top: 5px;
    padding-bottom: 5px;
  }

  input {
    border: 1.2px solid #2f0833;
    border-radius: 15px;
    padding: 10px 6px;
    outline: none;
  }

  h4 {
    font-family: "Sansita", sans-serif;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;
