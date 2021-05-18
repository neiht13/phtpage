const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/fadmin"],
    component: "FisrtAdmin",
  },
  {
    path: ["/admin"],
    component: "Admin",
  },
  {
    path: ["/demo"],
    component: "Demo",
  },
  {
    path: ["/login"],
    component: "Login",
  },
];

export default routes;
