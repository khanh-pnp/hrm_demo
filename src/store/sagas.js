import { all, fork } from "redux-saga/effects";
// Layout
import LayoutSaga from "./layouts/saga";
// Auth
import AccountSaga from "./auth/register/saga";
import AuthSaga from "./auth/login/saga";
import ForgetSaga from "./auth/forgetpwd/saga";
import ProfileSaga from "./auth/profile/saga";
// Ecommerce
import ecommerceSaga from "./ecommerce/saga";
// Dashboard Ecommerce
import dashboardEcommerceSaga from "./dashboardEcommerce/saga";
// Invoice
import invoiceSaga from "./invoice/saga";
// Chat
import chatSaga from "./chat/saga";
// Pages > Team
import teamSaga from "./team/saga";

export default function* rootSaga() {
  yield all([
    //public
    fork(LayoutSaga),
    fork(AccountSaga),
    fork(AuthSaga),
    fork(ForgetSaga),
    fork(ProfileSaga),
    fork(ecommerceSaga),
    fork(dashboardEcommerceSaga),
    fork(invoiceSaga),
    fork(chatSaga),
    fork(teamSaga),
  ]);
}
