import React from "react";
import "./Button.css";

const Button = (props) => {
	const [name, setName] = React.useState("btn");

	function toggle() {
		if (props.bird.paused) {
			props.bird.play();
			setName("btnClicked");
		} else {
			props.bird.pause();
			setName("btn");
		}
	}

	return (
		<button className={name} onClick={toggle}>
			{props.btnName}
		</button>
	);
};

export default Button;
