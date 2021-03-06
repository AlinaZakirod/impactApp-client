import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Router } from "react-router-dom";
import history from "./history";
import "bulma/css/bulma.css";
import "bulma-helpers/css/bulma-helpers.min.css";
import "font-awesome/css/font-awesome.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// import "bulma/css/bulma.css";
// import "bulma-helpers/css/bulma-helpers.min.css";

ReactDOM.render(
  <Router history={history}>
    <App />
    <React.Fragment>
      <ToastContainer />
    </React.Fragment>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
