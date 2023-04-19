import React from "react";
import { Navigate } from "react-router-dom";
import DashboardEcommerce from "../pages/DashboardEcommerce";
import EcommerceProducts from "../pages/Ecommerce/EcommerceProducts/index";
import EcommerceProductDetail from "../pages/Ecommerce/EcommerceProducts/EcommerceProductDetail";
import EcommerceAddProduct from "../pages/Ecommerce/EcommerceProducts/EcommerceAddProduct";
import EcommerceOrders from "../pages/Ecommerce/EcommerceOrders/index";
import EcommerceOrderDetail from "../pages/Ecommerce/EcommerceOrders/EcommerceOrderDetail";
import EcommerceCustomers from "../pages/Ecommerce/EcommerceCustomers/index";
import EcommerceCart from "../pages/Ecommerce/EcommerceCart";
import EcommerceCreateOrder from "../pages/Ecommerce/EcommerceOrders/EcommerceCreateOrder";
import EcommerceSellers from "../pages/Ecommerce/EcommerceSellers/index";
import EcommerceSellerDetail from "../pages/Ecommerce/EcommerceSellers/EcommerceSellerDetail";
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import InvoiceManagement from "../pages/InvoiceManagement/index";
import JobManagement from "../pages/JobManagement/index";
import SimplePage from "../pages/Profile/SimplePage/SimplePage";
import Settings from "../pages/Profile/Settings/Settings";
import Faqs from "../pages/Faqs/index";
import Chat from "../pages/Chat/index";
import BasicLockScreen from "../pages/AuthenticationInner/LockScreen/BasicLockScr";
import Team from "../pages/Team/index";

const authProtectedRoutes = [
  { path: "/dashboard", component: <DashboardEcommerce /> },
  { path: "/index", component: <DashboardEcommerce /> },
  { path: "/apps-ecommerce-products", component: <EcommerceProducts /> },
  {
    path: "/apps-ecommerce-product-details",
    component: <EcommerceProductDetail />,
  },
  { path: "/apps-ecommerce-add-product", component: <EcommerceAddProduct /> },
  { path: "/apps-ecommerce-orders", component: <EcommerceOrders /> },
  {
    path: "/apps-ecommerce-order-details",
    component: <EcommerceOrderDetail />,
  },
  { path: "/apps-ecommerce-customers", component: <EcommerceCustomers /> },
  { path: "/apps-ecommerce-cart", component: <EcommerceCart /> },
  { path: "/apps-ecommerce-create-order", component: <EcommerceCreateOrder /> },
  { path: "/apps-ecommerce-sellers", component: <EcommerceSellers /> },
  {
    path: "/apps-ecommerce-seller-details",
    component: <EcommerceSellerDetail />,
  },
  { path: "/apps-invoice-management", component: <InvoiceManagement /> },
  { path: "/apps-job-management", component: <JobManagement /> },
  //Pages
  { path: "/pages-profile", component: <SimplePage /> },
  { path: "/pages-profile-settings", component: <Settings /> },
  { path: "/pages-faqs", component: <Faqs /> },
  { path: "/pages-team", component: <Team /> },
  //Chat
  { path: "/apps-chat", component: <Chat /> },
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/auth-lockscreen-basic", component: <BasicLockScreen /> },
  { path: "/register", component: <Register /> },
];

export { authProtectedRoutes, publicRoutes };
