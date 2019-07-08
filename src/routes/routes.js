import React from "react";
import { Route, Switch } from "react-router-dom";

import CommentBox from "components/CommentBox/CommentBox";
import CommentList from "components/CommentList/CommentList";

import paths from "./paths";

export default () => {
    return (
        <Switch>
            <Route path={paths.POST} exact component={CommentBox} />
            <Route path={paths.ROOT} exact component={CommentList} />
        </Switch>
    );
};
