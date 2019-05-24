import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import routes from "./routes";
import store from "./redux/store";
function App() {
	return (
		<Provider store={store}>
			<div className="App">{routes}</div>
		</Provider>
	);
}

export default App;
