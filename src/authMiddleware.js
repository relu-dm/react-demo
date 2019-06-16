import {LOGIN_ACTION, LOGIN_ACTION_SUCCESS} from "./actions/AuthActions";

export default (mwApi) => (next) => (action) => {
    console.log("Middleware", { mwApi, next, action });
    next(action);
    if (action === LOGIN_ACTION) {
        console.log("REDIRECT");
        //browserHistory.redirect("/work");
    }
};