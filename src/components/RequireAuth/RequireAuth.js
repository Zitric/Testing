import React from "react";
import { connect } from "react-redux";
import paths from "routes/paths";

export default ChildComponent => {
    class ComposedComponent extends React.Component {
        componentDidMount() {
            this.shouldNavigateAway();
        }

        componentDidUpdate(prevProps, prevState) {
            this.shouldNavigateAway();
        }

        shouldNavigateAway = () => {
            if (!this.props.auth) {
                this.props.history.push(paths.ROOT);
            }
        };

        render() {
            return <ChildComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return { auth: state.auth };
    }

    return connect(mapStateToProps)(ComposedComponent);
};
