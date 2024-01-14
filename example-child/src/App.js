import Apples from "./Apples";
import Pears from "./Pears";
import Bag from "./Bag";

function App() {
	return (
		<Bag>
			<Apples color="yellow" number="5" />
			<Pears friend="Peter" />
		</Bag>
	);
}

export default App;
