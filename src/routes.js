// import Dashboard from "views/Dashboard.jsx";
import Login from "views/Login.jsx";
import UnAuthorized from "views/UnAuthorized.jsx";
// import SubjectView from "views/SubjectView/SubjectView.js";
// import SubjectManagementView from "views/SubjectManagementView/SubjectManagementView";
// import UserStatsView from "views/UserStatsView/UserStatsView";
// import Quiz from './views/CreateQuiz';
import Registeration from "./views/Registeration/Registeration"
// import ViewQuiz from './components/ViewQuiz/ViewQuiz';
import Pos from "./views/POS/POS"
import ViewStock from "./views/ViewStock/ViewStock"
import Sale from './views/Sale/Sale'
var dashboardRoutes = [
  // {
  //   path: "/UserStatsView",
  //   layout: "/admin",
  //   name: "User Stats View",
  //   icon: "pe-7s-user",
  //   component: UserStatsView
  // },
  // {
  //   path: "/subject",
  //   layout: "/admin",
  //   name: "Subject",
  //   icon: "pe-7s-date",
  //   component: SubjectView
  // },
  // {
  //   path: "/UserStatsView",
  //   layout: "/admin",
  //   name: "User Stats View",
  //   icon: "pe-7s-user",
  //   component: UserStatsView
  // },
  // {
  //   path: "/subjectmanagement",
  //   layout: "/admin",
  //   component: SubjectManagementView,
  //   hideself: true
  // },
  // {
  //   path: "/createquiz",
  //   layout: "/admin",
  //   name: " Quiz",
  //   component: Quiz,
  //   hideself: true
  // },
  {
    path: "/registeration",
    layout: "/admin",
    name: "Registeration",
    component: Registeration,
    icon: "pe-7s-add-user"
  },
  {
    path: "/dSale",
    layout: "/admin",
    name: "Daily Sale",
    component: Sale,
    icon: "pe-7s-paperclip"
  },
  {
    path: "/pos",
    layout: "/admin",
    name: "Point of Sale Screen",
    component: Pos,
    icon: "pe-7s-notebook"
  },
  {
    path: "/stock",
    layout: "/admin",
    name: "View Stock",
    component: ViewStock,
    icon: "pe-7s-news-paper"
  }

  
];

export const accountRoutes = [
  {
    path: "/login",
    name: "Login",
    icon: "pe-7s-graph",
    component: Login,
    layout: "/account"
  },
  {
    path: "/unauthorized",
    name: "Aunthorized",
    icon: "pe-7s-graph",
    component: UnAuthorized,
    layout: "/account"
  },

];
export default dashboardRoutes;
