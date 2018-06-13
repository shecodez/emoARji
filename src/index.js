import React from "react";
import ReactDOM from "react-dom";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import "./assets/styles/style.css";
import App from "./App";

import registerServiceWorker from "./utils/registerServiceWorker";

require("dotenv").config();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
