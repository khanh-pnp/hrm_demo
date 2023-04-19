import React, { useState } from "react";

const Navdata = () => {
  //state data
  const [isAuth, setIsAuth] = useState(false);
  const [isPages, setIsPages] = useState(false);
  const [isBaseUi, setIsBaseUi] = useState(false);
  const [isAdvanceUi, setIsAdvanceUi] = useState(false);
  const [isForms, setIsForms] = useState(false);
  const [isTables, setIsTables] = useState(false);
  const [isCharts, setIsCharts] = useState(false);
  const [isIcons, setIsIcons] = useState(false);
  const [isMaps, setIsMaps] = useState(false);
  const [isMultiLevel, setIsMultiLevel] = useState(false);

  // Authentication
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [isPasswordCreate, setIsPasswordCreate] = useState(false);
  const [isLockScreen, setIsLockScreen] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const [isVerification, setIsVerification] = useState(false);
  const [isError, setIsError] = useState(false);

  // Pages
  const [isProfile, setIsProfile] = useState(false);

  // Charts
  const [isApex, setIsApex] = useState(false);

  // Multi Level
  const [isLevel1, setIsLevel1] = useState(false);
  const [isLevel2, setIsLevel2] = useState(false);

  const menuItems = [
    // {
    //   id: "dashboard",
    //   label: "Dashboard",
    //   icon: "ri-dashboard-2-line",
    //   link: "/dashboard",
    // },
    // {
    //   id: "order",
    //   label: "All Orders",
    //   icon: "ri-dashboard-2-line",
    //   link: "/apps-ecommerce-orders",
    // },
    // {
    //   id: "createOrder",
    //   label: "Create Order",
    //   icon: "ri-dashboard-2-line",
    //   link: "/apps-ecommerce-create-order",
    // },
    // {
    //   id: "orderDetails",
    //   label: "Order Details",
    //   icon: "ri-dashboard-2-line",
    //   link: "/apps-ecommerce-order-details",
    // },
    // {
    //   id: "invoice",
    //   label: "Invoice Management",
    //   icon: "ri-dashboard-2-line",
    //   link: "/apps-invoice-management",
    // },
    // {
    //   id: "job",
    //   label: "Job Management",
    //   icon: "ri-dashboard-2-line",
    //   link: "/apps-job-management",
    // },
    {
      id: "team",
      label: "Team",
      icon: "ri-dashboard-2-line",
      link: "/pages-team",
    },
    // {
    //   id: "products",
    //   label: "Products",
    //   icon: "ri-dashboard-2-line",
    //   link: "/apps-ecommerce-products",
    // },
    // {
    //   id: "productDetails",
    //   label: "Product Details",
    //   icon: "ri-dashboard-2-line",
    //   link: "/apps-ecommerce-product-details",
    // },
    // {
    //   id: "createProduct",
    //   label: "Create Product",
    //   icon: "ri-dashboard-2-line",
    //   link: "/apps-ecommerce-add-product",
    // },
    // {
    //   id: "customers",
    //   label: "Customers",
    //   icon: "ri-dashboard-2-line",
    //   link: "/apps-ecommerce-customers",
    // },
    // {
    //   id: "shoppingCart",
    //   label: "Shopping Cart",
    //   icon: "ri-dashboard-2-line",
    //   link: "/apps-ecommerce-cart",
    // },
    //  ========= pages =========
    // {
    //     id: "authentication",
    //     label: "Authentication",
    //     icon: "ri-account-circle-line",
    //     link: "/#",
    //     click: function (e) {
    //         e.preventDefault();
    //         setIsAuth(!isAuth);
    //     },
    //     stateVariables: isAuth,
    //     subItems: [
    //         {
    //             id: "signIn",
    //             label: "Sign In",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e) {
    //                 e.preventDefault();
    //                 setIsSignIn(!isSignIn);
    //             },
    //             parentId: "authentication",
    //             stateVariables: isSignIn,
    //             childItems: [
    //                 { id: 1, label: "Basic", link: "/auth-signin-basic" },
    //                 { id: 2, label: "Cover", link: "/auth-signin-cover" },
    //             ]
    //         },
    //         {
    //             id: "signUp",
    //             label: "Sign Up",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e) {
    //                 e.preventDefault();
    //                 setIsSignUp(!isSignUp);
    //             },
    //             parentId: "authentication",
    //             stateVariables: isSignUp,
    //             childItems: [
    //                 { id: 1, label: "Basic", link: "/auth-signup-basic" },
    //                 { id: 2, label: "Cover", link: "/auth-signup-cover" },
    //             ]
    //         },
    //         {
    //             id: "passwordReset",
    //             label: "Password Reset",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e) {
    //                 e.preventDefault();
    //                 setIsPasswordReset(!isPasswordReset);
    //             },
    //             parentId: "authentication",
    //             stateVariables: isPasswordReset,
    //             childItems: [
    //                 { id: 1, label: "Basic", link: "/auth-pass-reset-basic" },
    //                 { id: 2, label: "Cover", link: "/auth-pass-reset-cover" },
    //             ]
    //         },
    //         {
    //             id: "passwordCreate",
    //             label: "Password Create",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e) {
    //                 e.preventDefault();
    //                 setIsPasswordCreate(!isPasswordCreate);
    //             },
    //             parentId: "authentication",
    //             stateVariables: isPasswordCreate,
    //             childItems: [
    //                 { id: 1, label: "Basic", link: "/auth-pass-change-basic" },
    //                 { id: 2, label: "Cover", link: "/auth-pass-change-cover" },
    //             ]
    //         },
    //         {
    //             id: "lockScreen",
    //             label: "Lock Screen",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e) {
    //                 e.preventDefault();
    //                 setIsLockScreen(!isLockScreen);
    //             },
    //             parentId: "authentication",
    //             stateVariables: isLockScreen,
    //             childItems: [
    //                 { id: 1, label: "Basic", link: "/auth-lockscreen-basic" },
    //                 { id: 2, label: "Cover", link: "/auth-lockscreen-cover" },
    //             ]
    //         },
    //         {
    //             id: "logout",
    //             label: "Logout",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e) {
    //                 e.preventDefault();
    //                 setIsLogout(!isLogout);
    //             },
    //             parentId: "authentication",
    //             stateVariables: isLogout,
    //             childItems: [
    //                 { id: 1, label: "Basic", link: "/auth-logout-basic" },
    //                 { id: 2, label: "Cover", link: "/auth-logout-cover" },
    //             ]
    //         },
    //         {
    //             id: "successMessage",
    //             label: "Success Message",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e) {
    //                 e.preventDefault();
    //                 setIsSuccessMessage(!isSuccessMessage);
    //             },
    //             parentId: "authentication",
    //             stateVariables: isSuccessMessage,
    //             childItems: [
    //                 { id: 1, label: "Basic", link: "/auth-success-msg-basic" },
    //                 { id: 2, label: "Cover", link: "/auth-success-msg-cover" },
    //             ]
    //         },
    //         {
    //             id: "twoStepVerification",
    //             label: "Two Step Verification",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e) {
    //                 e.preventDefault();
    //                 setIsVerification(!isVerification);
    //             },
    //             parentId: "authentication",
    //             stateVariables: isVerification,
    //             childItems: [
    //                 { id: 1, label: "Basic", link: "/auth-twostep-basic" },
    //                 { id: 2, label: "Cover", link: "/auth-twostep-cover" },
    //             ]
    //         },
    //         {
    //             id: "errors",
    //             label: "Errors",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e) {
    //                 e.preventDefault();
    //                 setIsError(!isError);
    //             },
    //             parentId: "authentication",
    //             stateVariables: isError,
    //             childItems: [
    //                 { id: 1, label: "404 Basic", link: "/auth-404-basic" },
    //                 { id: 2, label: "404 Cover", link: "/auth-404-cover" },
    //                 { id: 3, label: "404 Alt", link: "/auth-404-alt" },
    //                 { id: 4, label: "500", link: "/auth-500" },
    //                 { id: 5, label: "Offline Page", link: "/auth-offline" },
    //             ]
    //         },
    //     ],
    // },
    // {
    //     id: "pages",
    //     label: "Pages",
    //     icon: "ri-pages-line",
    //     link: "/#",
    //     click: function (e) {
    //         e.preventDefault();
    //         setIsPages(!isPages);
    //     },
    //     stateVariables: isPages,
    //     subItems: [
    //         {
    //             id: "starter",
    //             label: "Starter",
    //             link: "/pages-starter",
    //             parentId: "pages",
    //         },
    //         {
    //             id: "profile",
    //             label: "Profile",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e) {
    //                 e.preventDefault();
    //                 setIsProfile(!isProfile);
    //             },
    //             parentId: "pages",
    //             stateVariables: isProfile,
    //             childItems: [
    //                 { id: 1, label: "Simple Page", link: "/pages-profile", parentId: "pages" },
    //                 { id: 2, label: "Settings", link: "/pages-profile-settings", parentId: "pages" },
    //             ]
    //         },
    //         { id: "team", label: "Team", link: "/pages-team", parentId: "pages" },
    //         { id: "timeline", label: "Timeline", link: "/pages-timeline", parentId: "pages" },
    //         { id: "faqs", label: "FAQs", link: "/pages-faqs", parentId: "pages" },
    //         { id: "pricing", label: "Pricing", link: "/pages-pricing", parentId: "pages" },
    //         { id: "gallery", label: "Gallery", link: "/pages-gallery", parentId: "pages" },
    //         { id: "maintenance", label: "Maintenance", link: "/pages-maintenance", parentId: "pages" },
    //         { id: "comingSoon", label: "Coming Soon", link: "/pages-coming-soon", parentId: "pages" },
    //         { id: "sitemap", label: "Sitemap", link: "/pages-sitemap", parentId: "pages" },
    //         { id: "searchResults", label: "Search Results", link: "/pages-search-results", parentId: "pages" },
    //         { id: "PrivecyPolicy", label: "Privacy Policy", link: "/pages-privacy-policy", parentId: "pages",  badgeColor: "success",badgeName: "New", },
    //         { id: "TermsCondition", label: "Terms Condition", link: "/pages-terms-condition", parentId: "pages", badgeColor: "success",badgeName: "New", },
    //     ],
    // },
    //  ========= component =========
    // {
    //     id: "baseUi",
    //     label: "Base UI",
    //     icon: "ri-pencil-ruler-2-line",
    //     link: "/#",
    //     click: function (e) {
    //         e.preventDefault();
    //         setIsBaseUi(!isBaseUi);
    //     },
    //     stateVariables: isBaseUi,
    //     subItems: [
    //         { id: "alerts", label: "Alerts", link: "/ui-alerts", parentId: "baseUi" },
    //         { id: "badges", label: "Badges", link: "/ui-badges", parentId: "baseUi" },
    //         { id: "buttons", label: "Buttons", link: "/ui-buttons", parentId: "baseUi" },
    //         { id: "colors", label: "Colors", link: "/ui-colors", parentId: "baseUi" },
    //         { id: "cards", label: "Cards", link: "/ui-cards", parentId: "baseUi" },
    //         { id: "carousel", label: "Carousel", link: "/ui-carousel", parentId: "baseUi" },
    //         { id: "dropdowns", label: "Dropdowns", link: "/ui-dropdowns", parentId: "baseUi" },
    //         { id: "grid", label: "Grid", link: "/ui-grid", parentId: "baseUi" },
    //         { id: "images", label: "Images", link: "/ui-images", parentId: "baseUi" },
    //         { id: "tabs", label: "Tabs", link: "/ui-tabs", parentId: "baseUi" },
    //         { id: "accordions", label: "Accordion & Collapse", link: "/ui-accordions", parentId: "baseUi" },
    //         { id: "modals", label: "Modals", link: "/ui-modals", parentId: "baseUi" },
    //         { id: "offcanvas", label: "Offcanvas", link: "/ui-offcanvas", parentId: "baseUi" },
    //         { id: "placeholders", label: "Placeholders", link: "/ui-placeholders", parentId: "baseUi" },
    //         { id: "progress", label: "Progress", link: "/ui-progress", parentId: "baseUi" },
    //         { id: "notifications", label: "Notifications", link: "/ui-notifications", parentId: "baseUi" },
    //         { id: "media", label: "Media object", link: "/ui-media", parentId: "baseUi" },
    //         { id: "embedvideo", label: "Embed Video", link: "/ui-embed-video", parentId: "baseUi" },
    //         { id: "typography", label: "Typography", link: "/ui-typography", parentId: "baseUi" },
    //         { id: "lists", label: "Lists", link: "/ui-lists", parentId: "baseUi" },
    //         { id: "general", label: "General", link: "/ui-general", parentId: "baseUi" },
    //         { id: "ribbons", label: "Ribbons", link: "/ui-ribbons", parentId: "baseUi" },
    //         { id: "utilities", label: "Utilities", link: "/ui-utilities", parentId: "baseUi" },
    //     ],
    // },
    // {
    //     id: "advanceUi",
    //     label: "Advance UI",
    //     icon: "ri-stack-line",
    //     link: "/#",
    //     click: function (e) {
    //         e.preventDefault();
    //         setIsAdvanceUi(!isAdvanceUi);
    //     },
    //     stateVariables: isAdvanceUi,
    //     subItems: [
    //         { id: "nestablelist", label: "Nestable List", link: "/advance-ui-nestable", parentId: "advanceUi" },
    //         { id: "scrollbar", label: "Scrollbar", link: "/advance-ui-scrollbar", parentId: "advanceUi" },
    //         { id: "animation", label: "Animation", link: "/advance-ui-animation", parentId: "advanceUi" },
    //         { id: "tour", label: "Tour", link: "/advance-ui-tour", parentId: "advanceUi" },
    //         { id: "swiperslider", label: "Swiper Slider", link: "/advance-ui-swiper", parentId: "advanceUi" },
    //         { id: "ratings", label: "Ratings", link: "/advance-ui-ratings", parentId: "advanceUi" },
    //         { id: "highlight", label: "Highlight", link: "/advance-ui-highlight", parentId: "advanceUi" },
    //     ],
    // },
    // {
    //     id: "widgets",
    //     label: "Widgets",
    //     icon: "ri-honour-line",
    //     link: "/widgets",
    //     click: function (e) {
    //         e.preventDefault();
    //     }
    // },
    // {
    //     id: "forms",
    //     label: "Forms",
    //     icon: "ri-file-list-3-line",
    //     link: "/#",
    //     click: function (e) {
    //         e.preventDefault();
    //         setIsForms(!isForms);
    //     },
    //     stateVariables: isForms,
    //     subItems: [
    //         { id: "basicelements", label: "Basic Elements", link: "/forms-elements", parentId: "forms" },
    //         { id: "formselect", label: "Form Select", link: "/forms-select", parentId: "forms" },
    //         { id: "checkboxsradios", label: "Checkboxs & Radios", link: "/forms-checkboxes-radios", parentId: "forms" },
    //         { id: "pickers", label: "Pickers", link: "/forms-pickers", parentId: "forms" },
    //         { id: "inputmasks", label: "Input Masks", link: "/forms-masks", parentId: "forms" },
    //         { id: "advanced", label: "Advanced", link: "/forms-advanced", parentId: "forms" },
    //         { id: "rangeslider", label: "Range Slider", link: "/forms-range-sliders", parentId: "forms" },
    //         { id: "validation", label: "Validation", link: "/forms-validation", parentId: "forms" },
    //         { id: "wizard", label: "Wizard", link: "/forms-wizard", parentId: "forms" },
    //         { id: "editors", label: "Editors", link: "/forms-editors", parentId: "forms" },
    //         { id: "fileuploads", label: "File Uploads", link: "/forms-file-uploads", parentId: "forms" },
    //         { id: "formlayouts", label: "Form Layouts", link: "/forms-layouts", parentId: "forms" },
    //         { id: "select2", label: "Select2", link: "/forms-select2", parentId: "forms" },
    //     ],
    // },
    // {
    //     id: "tables",
    //     label: "Tables",
    //     icon: "ri-layout-grid-line",
    //     link: "/#",
    //     click: function (e) {
    //         e.preventDefault();
    //         setIsTables(!isTables);
    //     },
    //     stateVariables: isTables,
    //     subItems: [
    //         { id: "basictables", label: "Basic Tables", link: "/tables-basic", parentId: "tables" },
    //         { id: "gridjs", label: "Grid Js", link: "/tables-gridjs", parentId: "tables" },
    //         { id: "listjs", label: "List Js", link: "/tables-listjs", parentId: "tables" },
    //         { id: "datatables", label: "Datatables", link: "/tables-datatables", parentId: "tables" },
    //     ],
    // },
    // {
    //     id: "charts",
    //     label: "Charts",
    //     icon: "ri-pie-chart-line",
    //     link: "/#",
    //     click: function (e) {
    //         e.preventDefault();
    //         setIsCharts(!isCharts);
    //     },
    //     stateVariables: isCharts,
    //     subItems: [
    //         {
    //             id: "apexcharts",
    //             label: "Apexcharts",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e) {
    //                 e.preventDefault();
    //                 setIsApex(!isApex);
    //             },
    //             stateVariables: isApex,
    //             childItems: [
    //                 { id: 1, label: "Line", link: "/charts-apex-line" },
    //                 { id: 2, label: "Area", link: "/charts-apex-area" },
    //                 { id: 3, label: "Column", link: "/charts-apex-column" },
    //                 { id: 4, label: "Bar", link: "/charts-apex-bar" },
    //                 { id: 5, label: "Mixed", link: "/charts-apex-mixed" },
    //                 { id: 6, label: "Timeline", link: "/charts-apex-timeline" },
    //                 { id: 7, label: "Candlstick", link: "/charts-apex-candlestick" },
    //                 { id: 8, label: "Boxplot", link: "/charts-apex-boxplot" },
    //                 { id: 9, label: "Bubble", link: "/charts-apex-bubble" },
    //                 { id: 10, label: "Scatter", link: "/charts-apex-scatter" },
    //                 { id: 11, label: "Heatmap", link: "/charts-apex-heatmap" },
    //                 { id: 12, label: "Treemap", link: "/charts-apex-treemap" },
    //                 { id: 13, label: "Pie", link: "/charts-apex-pie" },
    //                 { id: 14, label: "Radialbar", link: "/charts-apex-radialbar" },
    //                 { id: 15, label: "Radar", link: "/charts-apex-radar" },
    //                 { id: 16, label: "Polar Area", link: "/charts-apex-polar" },
    //             ]
    //         },
    //         { id: "chartjs", label: "Chartjs", link: "/charts-chartjs", parentId: "charts" },
    //         { id: "echarts", label: "Echarts", link: "/charts-echarts", parentId: "charts" },
    //     ],
    // },
    // {
    //     id: "icons",
    //     label: "Icons",
    //     icon: "ri-compasses-2-line",
    //     link: "/#",
    //     click: function (e) {
    //         e.preventDefault();
    //         setIsIcons(!isIcons);
    //     },
    //     stateVariables: isIcons,
    //     subItems: [
    //         { id: "remix", label: "Remix", link: "/icons-remix", parentId: "icons" },
    //         { id: "boxicons", label: "Boxicons", link: "/icons-boxicons", parentId: "icons" },
    //         { id: "materialdesign", label: "Material Design", link: "/icons-materialdesign", parentId: "icons" },
    //         { id: "lineawesome", label: "Line Awesome", link: "/icons-lineawesome", parentId: "icons" },
    //         { id: "feather", label: "Feather", link: "/icons-feather", parentId: "icons" },
    //         { id: "crypto", label: "Crypto SVG", link: "/icons-crypto", parentId: "icons", badgeName: "New", badgeColor: "danger" },
    //     ],
    // },
    // {
    //     id: "maps",
    //     label: "Maps",
    //     icon: "ri-map-pin-line",
    //     link: "/#",
    //     click: function (e) {
    //         e.preventDefault();
    //         setIsMaps(!isMaps);
    //     },
    //     stateVariables: isMaps,
    //     subItems: [
    //         { id: "google", label: "Google", link: "/maps-google", parentId: "maps" },
    //         { id: "vector", label: "Vector", link: "/maps-vector", parentId: "maps" },
    //         { id: "leaflet", label: "Leaflet", link: "/maps-leaflet", parentId: "maps" },
    //     ],
    // },
    // {
    //     id: "multilevel",
    //     label: "Multi Level",
    //     icon: "ri-share-line",
    //     link: "/#",
    //     click: function (e) {
    //         e.preventDefault();
    //         setIsMultiLevel(!isMultiLevel);
    //     },
    //     stateVariables: isMultiLevel,
    //     subItems: [
    //         { id: "level1.1", label: "Level 1.1", link: "/#", parentId: "multilevel" },
    //         {
    //             id: "level1.2",
    //             label: "Level 1.2",
    //             link: "/#",
    //             isChildItem: true,
    //             click: function (e) {
    //                 e.preventDefault();
    //                 setIsLevel1(!isLevel1);
    //             },
    //             stateVariables: isLevel1,
    //             childItems: [
    //                 { id: 1, label: "Level 2.1", link: "/#" },
    //                 {
    //                     id: "level2.2",
    //                     label: "Level 2.2",
    //                     link: "/#",
    //                     isChildItem: true,
    //                     click: function (e) {
    //                         e.preventDefault();
    //                         setIsLevel2(!isLevel2);
    //                     },
    //                     stateVariables: isLevel2,
    //                     childItems: [
    //                         { id: 1, label: "Level 3.1", link: "/#" },
    //                         { id: 2, label: "Level 3.2", link: "/#" },
    //                     ]
    //                 },
    //             ]
    //         },
    //     ],
    // },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
