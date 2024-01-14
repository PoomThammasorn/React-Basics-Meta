import React from "react";
import ReactPlayer from "react-player/youtube";

const App = () => {
	return (
		<div>
			<MyVideo />
		</div>
	);
};

const MyVideo = () => {
	return (
		<ReactPlayer
			url="https://www.youtube.com/watch?v=rWCULtx785s"
			playing={false}
			volume={0.5}
		/>
	);
};

export default App;
