import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleWare from "redux-promise-middleware";
import lolReducer from "./ducks/lolReducer";
import owReducer from "./ducks/owReducer";

const middleware = applyMiddleware(promiseMiddleWare);

const combinedReducers = combineReducers({
	lolReducer,
	owReducer
});

const store = createStore(combinedReducers, middleware);

export default store;
