import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducer/Reducer"

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(
    Reducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
