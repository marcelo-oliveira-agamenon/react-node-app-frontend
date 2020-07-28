import React, { useEffect } from "react";
import Header from "../../components/Header/index";
import { connect } from "react-redux";
import { fetchExpenses, Expense } from "../../ducks/expense";
import { fetchSavings } from "../../ducks/savings";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  Legend,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
} from "recharts";
import { withRouter } from "react-router-dom";
import dayjs from "dayjs";

const mapStateToProps = (state: {
  savingsList: any;
  expenseList: any;
  loggedUser: any;
  error: {
    data: {
      error: string;
    };
  };
}) => {
  return {
    savingsList: state.savingsList,
    expenseList: state.expenseList,
    loggedUser: state.loggedUser,
    error: state.error,
  };
};

export interface props {
  history: any;
  savingsList: any;
  expenseList: Array<Expense>;
  loggedUser: any;
  fetchExpenses: (userID: string) => void;
  fetchSavings: () => void;
}

function Dashboard(props: props) {
  useEffect(() => {
    const { userID } = props.loggedUser;
    props.fetchExpenses(userID);
    props.fetchSavings();
  }, []);

  const { savingsList, loggedUser, expenseList } = props;
  const expenseGraph: Array<any> = expenseList.map((expense) => {
    let date = dayjs(expense.expense_date).format("MM/YYYY");
    return {
      date: date,
      value: expense.expense_value,
    };
  });

  const handleClickExpense = (label: string) => {
    if (label === "add") {
      props.history.push("/expenses/add");
    } else if (label === "list") {
      props.history.push("/expenses");
    }
  };

  return (
    <>
      <Header userNameText={"Olá, " + loggedUser.username} />
      <div
        style={{
          display: "flex",
          width: "auto",
          padding: "0.5rem",
        }}
      >
        <h3
          style={{
            marginLeft: "2.5vw",
            fontFamily: "Roboto, sans-serif",
            fontSize: "1.9vw",
            letterSpacing: "1px",
          }}
        >
          Dashboard
        </h3>
      </div>
      <div
        style={{
          border: "1px solid #707070",
          display: "flex",
          flexDirection: "column",
          width: "80%",
          marginLeft: "9vw",
          marginTop: "4vh",
          padding: "15px 10px 55px 10px",
          borderRadius: "25px",
          marginBottom: "12vh",
          boxShadow: "0px 5px 10px 2px rgba(0,0,0,0.25)",
        }}
      >
        <div style={{ alignSelf: "center", marginBottom: "4vh" }}>
          <h3
            style={{
              fontSize: "1.8vw",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "lighter",
              letterSpacing: "1px",
              margin: 0,
            }}
          >
            Poupança Nubank
          </h3>
        </div>
        <div style={{}}>
          <ResponsiveContainer width="95%" height={260}>
            <LineChart data={savingsList.savings}>
              <CartesianGrid strokeDasharray="3 3" />
              <Line
                type="monotone"
                dataKey="savings_value"
                stroke="#8884d8"
                name="Real"
              />
              <Line
                type="monotone"
                dataKey="savings_projected"
                stroke="#82ca9d"
                name="Projetado"
              />
              <Tooltip />
              <XAxis dataKey="savings_date" />
              <YAxis dataKey="savings_value" />
              <Legend verticalAlign="bottom" height={15} iconSize={18} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div
        style={{
          border: "1px solid #707070",
          display: "flex",
          flexDirection: "row",
          width: "80%",
          marginLeft: "9vw",
          marginTop: "4vh",
          padding: "75px 10px 55px 10px",
          borderRadius: "25px",
          marginBottom: "12vh",
          boxShadow: "0px 5px 10px 2px rgba(0,0,0,0.25)",
        }}
      >
        <div
          style={{
            justifyContent: "flex-start",
            width: "60%",
            marginLeft: "3vw",
          }}
        >
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={expenseGraph}>
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="value" fill="#8884d8" name="Valor" />
              <Tooltip />
              <XAxis dataKey="date" allowDuplicatedCategory={false} />
              <YAxis hide />
              <Legend verticalAlign="bottom" height={15} iconSize={18} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={{ height: "auto", marginLeft: "5.5vw" }}>
          <h3
            style={{
              fontSize: "1.8vw",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "lighter",
              letterSpacing: "1px",
              margin: 0,
              textAlign: "center",
            }}
          >
            Despesas por Mês
          </h3>
          <button
            style={{
              borderRadius: "5px",
              borderWidth: "1px",
              padding: "10px 18px",
              cursor: "pointer",
            }}
            onClick={() => handleClickExpense("add")}
          >
            Adicionar Despesa
          </button>
          <button
            style={{
              borderRadius: "5px",
              borderWidth: "1px",
              padding: "10px 18px",
              cursor: "pointer",
            }}
            onClick={() => handleClickExpense("list")}
          >
            Listar Despesa
          </button>
        </div>
      </div>

      <div
        style={{
          border: "1px solid #707070",
          display: "flex",
          flexDirection: "column",
          width: "80%",
          marginLeft: "9vw",
          marginTop: "4vh",
          padding: "15px 10px 30px 10px",
          borderRadius: "25px",
          marginBottom: "12vh",
          boxShadow: "0px 5px 10px 2px rgba(0,0,0,0.25)",
        }}
      >
        <div style={{ alignSelf: "center", marginBottom: "4vh" }}>
          <h3
            style={{
              fontSize: "1.8vw",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "lighter",
              letterSpacing: "1px",
              margin: 0,
            }}
          >
            Categorias de Despesa
          </h3>
        </div>
        <div style={{}}>
          <ResponsiveContainer width="95%" height={260}>
            <PieChart>
              <Pie
                data={expenseList}
                dataKey="expense_type"
                fill="#d555"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default withRouter(
  connect(mapStateToProps, (dispatch: any) => ({
    fetchExpenses: (userID: string) => dispatch(fetchExpenses(userID)),
    fetchSavings: () => dispatch(fetchSavings()),
  }))(Dashboard)
);
