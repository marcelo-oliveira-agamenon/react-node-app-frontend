import axios from "axios";
import envs from "../config";
import { store } from "../store/store";
import { types } from "../store/reducers";

export type User = {
  userID: string;
  username: string;
  password: string;
  info: {
    phone: string;
    age: number;
    email: string;
    avatar: string;
    imageName: string;
    originalName: string;
  };
  createdAt: Date;
  modifiedAt: Date;
};

//functions
//fetch a list of users from API
export function fetchUserList() {
  const state: any = store.getState();
  const apiToken: any = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return axios
      .get(`${envs.API_URL}/api/users`, {
        headers: {
          Authorization: apiToken,
        },
      })
      .then((response) => {
        dispatch({
          type: types.USER_LIST,
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

//fetch a user from the database from the API
export function fetchUser(userID: string) {
  const state: any = store.getState();
  const apiToken: any = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return axios
      .get(`${envs.API_URL}/api/users/${userID}`, {
        headers: {
          Authorization: apiToken,
        },
      })
      .then((response) => {
        dispatch({
          type: types.FETCH_USER,
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

//add new user in the database from the API
export function addUser(
  username: string,
  password: string,
  info: object,
  roles: string
) {
  const state: any = store.getState();
  const apiToken: any = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return axios
      .post(
        `${envs.API_URL}/api/users/add`,
        {
          username: username,
          password: password,
          info: info,
          roles: roles,
        },
        {
          headers: {
            Authorization: apiToken,
          },
        }
      )
      .then((response) => {
        return Promise.resolve(response.data.response);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}

//delete a user in the database from the API
export function deleteUser(idUser: string) {
  const state: any = store.getState();
  const apiToken: any = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return axios
      .delete(`${envs.API_URL}/api/users/delete/${idUser}`, {
        data: {
          userID: idUser,
        },
        headers: {
          Authorization: apiToken,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}

//update a user in the database from the API
export function updateUserCommon(
  idUser: string,
  username: string,
  password: string,
  roles: string
) {
  const state: any = store.getState();
  const apiToken: any = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return axios
      .put(
        `${envs.API_URL}/api/users/update/common/${idUser}`,
        {
          username: username,
          password: password,
          roles: roles,
        },
        {
          headers: {
            Authorization: apiToken,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}

export function updateUserInfo(
  idUser: string,
  avatarFile: string,
  info: object
) {
  const state: any = store.getState();
  const apiToken: any = "Bearer " + state.apiToken;
  return function (dispatch: any) {
    return axios
      .put(
        `${envs.API_URL}/api/users/update/info/${idUser}`,
        {
          avatarFile: avatarFile,
          info: info,
        },
        {
          headers: {
            Authorization: apiToken,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}
