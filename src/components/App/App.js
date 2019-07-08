import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Routes from "routes/routes";
import paths from "routes/paths";
import * as actions from "state/actions";
import "components/App/App.scss";

class App extends React.Component {
    renderButton() {
        return this.props.auth ? (
            <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
        ) : (
            <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
        );
    }

    renderHeader() {
        return (
            <ul>
                <li>
                    <NavLink to={paths.ROOT}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={paths.POST}>Post a Comment</NavLink>
                </li>
                <li>{this.renderButton()}</li>
            </ul>
        );
    }

    render() {
        return (
            <div className="App">
                {this.renderHeader()}
                <Routes key={Math.random()} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(
    mapStateToProps,
    actions
)(App);
