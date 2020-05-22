const routes = require("next-routes")();

// defining different routes as per the requirement of the project
routes
  .add("/user/new", "/user/new")
  .add("/user/addlicence", "/user/addlicence")
  .add("/company/newrequest", "/company/newrequest")
  .add("/company/viewrequest", "/company/viewrequest")
  .add("/user/viewrequest", "/user/view")
  .add("/company/:address", "/company/viewdocument");

module.exports = routes;
