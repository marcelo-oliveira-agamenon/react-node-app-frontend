import React, { useEffect } from "react";
import Header from "../../components/Header/header";
import ExpenseListComp from "../../components/Expenses/expenseList";
import { connect } from "react-redux";
import { fetchExpenses, Expense } from "../../ducks/expense";
import { User } from "../../ducks/user";

const mapStateToProps = (state: {
  loggedUser: User;
  expenseList: Expense;
  error: {
    data: {
      error: string;
    };
  };
}) => {
  return {
    loggedUser: state.loggedUser,
    expenseList: state.expenseList,
    error: state.error,
  };
};

export interface props {
  loggedUser: User;
  expenseList: any;
  fetchExpenses: (userID: string) => void;
}

function ListExpenses(props: props) {
  useEffect(() => {
    const { userID } = props.loggedUser;
    props.fetchExpenses(userID);
  }, []);
  const arrayExpense: Array<Expense> = props.expenseList;
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
          color: "#fff",
        }}
        headerStyle={{
          width: "100%",
          height: "10vh",
          backgroundColor: "#4B4B4B",
        }}
      />
      <div>
        <h3>Updated list of expenses</h3>
        <div style={{ display: "inline-block" }}>
          {arrayExpense.map((expense) => {
            return (
              <ExpenseListComp key={expense.expenseID} expense={expense} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps, (dispatch: any) => ({
  fetchExpenses: (userID: string) => dispatch(fetchExpenses(userID)),
}))(ListExpenses);
