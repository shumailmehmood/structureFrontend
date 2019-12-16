import Dashboard from "views/Dashboard.jsx";
import Login from "views/Login.jsx";
import UnAuthorized from "views/UnAuthorized.jsx";
import SubjectView from "views/SubjectView/SubjectView.js";
import SubjectManagementView from "views/SubjectManagementView/SubjectManagementView";
import UserStatsView from "views/UserStatsView/UserStatsView";
import Quiz from './views/CreateQuiz';
import ViewQuiz from './components/ViewQuiz/ViewQuiz';

var dashboardRoutes = [
  {
    path: "/UserStatsView",
    layout: "/admin",
    name: "User Stats View",
    icon: "pe-7s-user",
    component: UserStatsView
  },
  {
    path: "/subject",
    layout: "/admin",
    name: "Subject",
    icon: "pe-7s-date",
    component: SubjectView
  },
  // {
  //   path: "/UserStatsView",
  //   layout: "/admin",
  //   name: "User Stats View",
  //   icon: "pe-7s-user",
  //   component: UserStatsView
  // },
  {
    path: "/subjectmanagement",
    layout: "/admin",
    component: SubjectManagementView,
    hideself: true
  },
  {
    path: "/createquiz",
    layout: "/admin",
    name: "Create Quiz",
    component: Quiz,
    hideself: true
  },
  {
    path: "/viewquiz",
    layout: "/admin",
    name: "View Quiz",
    component: ViewQuiz,
    hideself: true
  },

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
