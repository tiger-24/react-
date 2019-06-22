import {createStore,combineReducers,applyMiddleware} from "redux";
import modal from "./reducer/modal";
import reduxThunk from "redux-thunk";
import login from "./reducer/login";

const reducer = combineReducers({
    modal,
    login,
});


const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;