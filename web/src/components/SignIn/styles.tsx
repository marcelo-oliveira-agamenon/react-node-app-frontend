import styled from "styled-components";

export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 8px 85px;

  .addImage {
    background-color: rgb(47, 8, 51, 0.72);
    padding: 5px 15px;
    text-transform: uppercase;
    font-family: "Sansita", sans-serif;
    color: #fff;
    font-weight: 300;
    letter-spacing: 1.5px;
    cursor: pointer;
    border-style: none;
  }

  .inputFile {
    border: 1.5px solid #000;
    border-radius: 15px;
    font-family: "Sansita", sans-serif;
    font-size: 16px;
    outline: none;
    padding: 4px 0px;
    margin-bottom: 10px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }

  input {
    border: 1.5px solid #000;
    border-radius: 15px;
    font-family: "Sansita", sans-serif;
    font-size: 16px;
    outline: none;
    padding: 4px 0px;
    margin-bottom: 10px;
    box-shadow: 5px 5px 8px rgb(0, 0, 0, 0.25);
  }

  label {
    font-family: "Sansita", sans-serif;
    text-transform: uppercase;
    margin-bottom: 10px;
    letter-spacing: 1.2px;
    margin-left: 16px;
  }

  select {
    border: 1.5px solid #000;
    border-radius: 15px;
    font-family: "Sansita", sans-serif;
    font-size: 16px;
    outline: none;
    padding: 4px 0px;
    margin-bottom: 10px;
    box-shadow: 5px 5px 8px rgb(0, 0, 0, 0.25);
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
    margin-bottom: 8px;
    margin-top: 40px;
    font-size: 17px;
    letter-spacing: 1.5px;
    box-shadow: 5px 5px 8px rgb(0, 0, 0, 0.25);
  }

  .return {
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
`;

export const FileDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 25px;
`;
