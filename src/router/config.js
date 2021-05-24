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
  {
    path: ["/footer"],
    component: "FisrtAdmin/Footer",
  },
  {
    path: ["/message"],
    component: "FisrtAdmin/Message",
  },
  {
    path: ["/menu"],
    component: "FisrtAdmin/Menu",
  },
  {
    path: ["/system"],
    component: "FisrtAdmin/System",
  },
];

export default routes;
