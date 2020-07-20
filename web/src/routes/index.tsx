import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../container/Login/index";
import SignIn from "../container/SignIn/index";
import ForgotPassword from "../container/ForgotPassword/index";
import Dashboard from "../container/Dashboard/index";
import InsertExpense from "../container/Expenses/insert";
import ListExpense from "../container/Expenses/list";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/expenses/add" component={InsertExpense} />
        <Route path="/expenses" component={ListExpense} />
      </Switch>
    </BrowserRouter>
  );
}
