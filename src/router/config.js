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
    path: ["/footer"],
    component: "Footer",
  },
  {
    path: ["/account"],
    component: "Message",
  },
  {
    path: ["/menu"],
    component: "Menu",
  },
  {
    path: ["/system"],
    component: "System",
  },
  {
    path: ["/content"],
    component: "BlockContent",
  },
  {
    path: ["/auth"],
    component: "Login/auth.js",
  },
];

export default routes;
