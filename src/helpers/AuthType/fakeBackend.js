import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import * as url from "../url_helper";
import { accessToken, nodeApiToken } from "../jwt-token-access/accessToken";
import {
  allRevenueData,
  monthRevenueData,
  halfYearRevenueData,
  yearRevenueData,
  team,
} from "../../common/data";

let users = [
  {
    uid: 1,
    username: "admin",
    role: "admin",
    password: "123456",
    email: "admin@gmail.com",
  },
];

const fakeBackend = () => {
  // This sets the mock adapter on the default instance
  const mock = new MockAdapter(axios, { onNoMatch: "passthrough" });

  mock.onPost("/post-jwt-register").reply((config) => {
    const user = JSON.parse(config["data"]);
    users.push(user);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, user]);
      });
    });
  });

  mock.onPost("/post-jwt-login").reply((config) => {
    const user = JSON.parse(config["data"]);
    const validUser = users.filter(
      (usr) => usr.email === user.email && usr.password === user.password
    );

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser["length"] === 1) {
          // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
          const token = accessToken;

          // JWT AccessToken
          const tokenObj = { accessToken: token }; // Token Obj
          const validUserObj = { ...validUser[0], ...tokenObj }; // validUser Obj

          resolve([200, validUserObj]);
        } else {
          reject([
            400,
            "Username and password are invalid. Please enter correct username and password",
          ]);
        }
      });
    });
  });

  mock.onPost("/post-jwt-profile").reply((config) => {
    const user = JSON.parse(config["data"]);

    const one = config.headers;

    let finalToken = one.Authorization;

    const validUser = users.filter((usr) => usr.uid === user.idx);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Verify Jwt token from header.Authorization
        if (finalToken === accessToken) {
          if (validUser["length"] === 1) {
            let objIndex;

            //Find index of specific object using findIndex method.
            objIndex = users.findIndex((obj) => obj.uid === user.idx);

            //Update object's name property.
            users[objIndex].username = user.username;

            // Assign a value to locastorage
            sessionStorage.removeItem("authUser");
            sessionStorage.setItem("authUser", JSON.stringify(users[objIndex]));

            resolve([200, "Profile Updated Successfully"]);
          } else {
            reject([400, "Something wrong for edit profile"]);
          }
        } else {
          reject([400, "Invalid Token !!"]);
        }
      });
    });
  });

  mock.onPost("/social-login").reply((config) => {
    const user = JSON.parse(config["data"]);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user && user.token) {
          // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
          const token = accessToken;
          const first_name = user.name;
          const nodeapiToken = nodeApiToken;
          delete user.name;

          // JWT AccessToken
          const tokenObj = { accessToken: token, first_name: first_name }; // Token Obj
          const validUserObj = {
            token: nodeapiToken,
            data: { ...tokenObj, ...user },
          }; // validUser Obj
          resolve([200, validUserObj]);
        } else {
          reject([
            400,
            "Username and password are invalid. Please enter correct username and password",
          ]);
        }
      });
    });
  });

  // Dashboard Ecommerce
  // Revenue
  mock.onGet(url.GET_ALLREVENUE_DATA).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (allRevenueData) {
          // Passing fake JSON data as response
          resolve([200, allRevenueData]);
        } else {
          reject([400, "Cannot get All Revenue Data"]);
        }
      });
    });
  });

  mock.onGet(url.GET_MONTHREVENUE_DATA).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (monthRevenueData) {
          // Passing fake JSON data as response
          resolve([200, monthRevenueData]);
        } else {
          reject([400, "Cannot get Month Revenue Data"]);
        }
      });
    });
  });

  mock.onGet(url.GET_HALFYEARREVENUE_DATA).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (halfYearRevenueData) {
          // Passing fake JSON data as response
          resolve([200, halfYearRevenueData]);
        } else {
          reject([400, "Cannot get Half Year Revenue Data"]);
        }
      });
    });
  });

  mock.onGet(url.GET_YEARREVENUE_DATA).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (yearRevenueData) {
          // Passing fake JSON data as response
          resolve([200, yearRevenueData]);
        } else {
          reject([400, "Cannot get Year Revenue Data"]);
        }
      });
    });
  });

  // Team
  mock.onGet(url.GET_TEAMDATA).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (team) {
          // Passing fake JSON data as response
          resolve([200, team]);
        } else {
          reject([400, "Cannot get team data"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_TEAMDATA).reply((config) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.team]);
        } else {
          reject([400, "Cannot delete team data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_NEW_TEAMDATA).reply((team) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (team && team.data) {
          // Passing fake JSON data as response
          resolve([200, team.data]);
        } else {
          reject([400, "Cannot add team data"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_TEAMDATA).reply((team) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (team && team.data) {
          // Passing fake JSON data as response
          resolve([200, team.data]);
        } else {
          reject([400, "Cannot update team data"]);
        }
      });
    });
  });
};

export default fakeBackend;
