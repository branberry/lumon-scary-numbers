import { Canvas } from "@react-three/fiber";

import "./App.css";
import { Text3D } from "@react-three/drei";

function App() {
	return (
		<div id="canvas-container">
			<Canvas>
				<ambientLight intensity={0.1} />
				<Text3D font="./fonts/Teko_Light_Regular.json">1 2 3 4</Text3D>
			</Canvas>
		</div>
	);
}

export default App;
