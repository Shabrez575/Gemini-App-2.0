import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import ReactDOM from "react-dom/client";
import Main from "./components/Main/Main";
import "./App.css";
import ContextProvider from "./components/context/Context";

// App - component composition happened here
const Applayout = () => {
	return (
		<div className="applayout">
			<Sidebar />
			<Main />
		</div>
	);
};

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	// 	<Applayout />
	// </React.StrictMode>,

	<ContextProvider>
		<Applayout />
	</ContextProvider>,
);
