import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleWare from "redux-promise-middleware";
import lolReducer from "./ducks/lolReducer";

const middleware = applyMiddleware(promiseMiddleWare);

const combinedReducers = combineReducers({
	lolReducer
});

const store = createStore(combinedReducers, middleware);

export default store;
