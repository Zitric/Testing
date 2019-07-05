import React from "react";
import { NavLink } from "react-router-dom";
import Routes from "routes/routes";
import paths from "routes/paths";

import "components/App/App.scss";

export default class App extends React.Component {
    renderHeader() {
        return (
            <ul>
                <li>
                    <NavLink to={paths.ROOT}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={paths.ROOT}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={paths.ROOT}>Home</NavLink>
                </li>
            </ul>
        );
    }

    render() {
        return (
            <div className="App">
                <Routes key={Math.random()} />
            </div>
        );
    }
}
