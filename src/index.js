import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Root from "Root";

import App from "components/App/App";

import "index.scss";

import * as serviceWorker from "./serviceWorker";

const history = createBrowserHistory();

ReactDOM.render(
    <Root>
        <Router history={history}>
            <App />
        </Router>
    </Root>,
    document.querySelector("#root")
);

serviceWorker.unregister();
