import React from "react";
import "./style/App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Header from "./components/Header";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/login" element={<Login />} />
					{/* This is the default route "/" */}
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App;