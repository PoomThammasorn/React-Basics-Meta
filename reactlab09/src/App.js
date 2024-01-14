import React from "react";
import Button from "./components/Button";

function App() {
	const bird1 = new Audio(
		"https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
	);

	const bird2 = new Audio(
		"https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
	);

	// function toggle1() {
	// 	if (bird1.paused) {
	// 		bird1.play();
	// 	} else {
	// 		bird1.pause();
	// 	}
	// }

	// function toggle2() {
	// 	if (bird2.paused) {
	// 		bird2.play();
	// 	} else {
	// 		bird2.pause();
	// 	}
	// }

	return (
		<div>
			<Button btnName="Caspian Tern 1" bird={bird1} />
			<Button btnName="Caspian Tern 2" bird={bird2} />
		</div>
	);
}

export default App;
