import React, { useState } from "react";
import Header from "../../components/Header/header";
import { connect } from "react-redux";
import { addExpense } from "../../ducks/expense";
import dayjs from "dayjs";

const mapStateToProps = (state: {
  loggedUser: any;
  error: {
    data: {
      error: string;
    };
  };
}) => {
  return {
    loggedUser: state.loggedUser,
    error: state.error
  };
};

export interface props {
  loggedUser: any;
  error: {
    data: {
      error: string;
    };
  };
  addExpense: (
    userID: string,
    formData: {
      type: string;
      date: string;
      value: Number;
      description: string;
    }
  ) => Promise<string>;
}

function AddNewExpense(props: props) {
  const [typeExpense, setTypeExpense] = useState("");
  const [dateExpense, setDateExpense] = useState("");
  const [valueExpense, setValueExpense] = useState("");
  const [descriptionExpense, setDescriptionExpense] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const date: string = dayjs(dateExpense).format("DD/MM/YYYY");
    if (
      typeExpense === "" ||
      valueExpense === "" ||
      descriptionExpense === "" ||
      dateExpense === ""
    ) {
      return;
    }
    const value: Number = parseFloat(valueExpense);
    const formData = {
      type: typeExpense,
      date: date,
      value: value,
      description: descriptionExpense
    };
    props.addExpense(props.loggedUser.userID, formData).then(() => {
      setDateExpense("");
      setDescriptionExpense("");
      setTypeExpense("");
      setValueExpense("");
    });
  };

  return (
    <>
      <Header
        mainText="Despesas"
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
      <div
        style={{
          border: "1px solid red",
          padding: "15px"
        }}
      >
        <form onSubmit={event => handleSubmit(event)} style={{}}>
          <label>Tipo de despesa</label>
          <input
            type="text"
            value={typeExpense}
            onChange={event => setTypeExpense(event.target.value)}
          />
          <label>Data da despesa</label>
          <input
            type="date"
            value={dateExpense}
            onChange={event => setDateExpense(event.target.value)}
          />
          <label>Valor da despesa</label>
          <input
            type="number"
            value={valueExpense}
            onChange={event => setValueExpense(event.target.value)}
          />
          <label>Descrição da despesa</label>
          <input
            type="text"
            value={descriptionExpense}
            onChange={event => setDescriptionExpense(event.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}

export default connect(mapStateToProps, (dispatch: any) => ({
  addExpense: (
    userID: string,
    formData: {
      type: string;
      date: string;
      value: Number;
      description: string;
    }
  ) => dispatch(addExpense(userID, formData))
}))(AddNewExpense);
