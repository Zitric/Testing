import tv4 from "tv4";
import stateSquema from "middleware/stateSchema";

export default ({ dispatch, getState }) => next => action => {
    next(action);

    if (!tv4.validate(getState(), stateSquema)) {
        console.warn("Invalid state schema detected");
    }
};
