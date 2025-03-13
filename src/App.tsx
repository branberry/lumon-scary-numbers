import { Canvas } from "@react-three/fiber";

import "./App.css";
import { Center, Text3D } from "@react-three/drei";

function App() {
	return (
		<div id="canvas-container">
			<Canvas>
				<ambientLight intensity={0.1} />
				<Center>
					<Text3D font="./fonts/Teko_Light_Regular.json" position={[0, 0, 0]}>
						{" "}
						1
					</Text3D>
					<Text3D font="./fonts/Teko_Light_Regular.json" position={[1, 1, 0]}>
						{" "}
						2
					</Text3D>
					<Text3D font="./fonts/Teko_Light_Regular.json" position={[2, 2, 0]}>
						{" "}
						3
					</Text3D>
					<Text3D font="./fonts/Teko_Light_Regular.json" position={[3, 3, 0]}>
						{" "}
						4
					</Text3D>
				</Center>
			</Canvas>
		</div>
	);
}

export default App;
