import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import async from "middleware/async";
import stateValidator from "middleware/stateValidator";
import reducers from "state/reducers";

export default ({ children, initialState = {} }) => {
    const store = createStore(reducers, initialState, applyMiddleware(async, stateValidator));

    return <Provider store={store}>{children}</Provider>;
};
