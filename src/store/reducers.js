import { combineReducers } from "redux";
// Front
import Layout from "./layouts/reducer";
// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Profile from "./auth/profile/reducer";
// Ecommerce
import Ecommerce from "./ecommerce/reducer";
// Dashboard Ecommerce
import DashboardEcommerce from "./dashboardEcommerce/reducer";
// Invoice
import Invoice from "./invoice/reducer";
//Chat
import Chat from "./chat/reducer";
// Pages > Team
import Team from "./team/reducer";

const rootReducer = combineReducers({
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  Ecommerce,
  DashboardEcommerce,
  Invoice,
  Chat,
  Team,
});

export default rootReducer;
