import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './calculator';
import Clock from './clock';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Clock/>, root);
	// ReactDOM.render(<Calculator/>, root);
});
