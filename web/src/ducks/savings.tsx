import axios from "axios";
import envs from "../config";
import { store } from "../store/store";
import { types } from "../store/reducers";

export type Savings = {};

//functions
//get a list of expenses per user from the API
export function fetchSavings() {
  const state: any = store.getState();
  const apiToken: any = state.apiToken.token;
  return function (dispatch: any) {
    return axios
      .get(`${envs.API_URL}/api/dashboard`, {
        headers: {
          Authorization: apiToken,
        },
      })
      .then((response) => {
        dispatch({
          type: types.SAVINGS_LIST,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}
