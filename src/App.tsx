import { Canvas } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";

import "./App.css";
import { Center, Text3D, type Text3DProps } from "@react-three/drei";

const AnimatedText3D = animated(Text3D);

interface ScaryNumberProps {
	children: string;
	position?: Text3DProps["position"];
}
function ScaryNumber({ children, position }: ScaryNumberProps) {
	const [springs, api] = useSpring(() => ({
		scale: 1,
		config: (key) => {
			switch (key) {
				case "scale":
					return {
						mass: 4,
						friction: 10,
					};
				case "position":
					return { mass: 4, friction: 220 };
				default:
					return {};
			}
		},
	}));

	const handlePointerEnter = () => {
		api.start({
			scale: 1.5,
		});
	};

	const handlePointerLeave = () => {
		api.start({
			scale: 1,
		});
	};

	return (
		<AnimatedText3D
			scale={springs.scale}
			onPointerEnter={handlePointerEnter}
			onPointerLeave={handlePointerLeave}
			font="./fonts/Teko_Light_Regular.json"
			position={position}
		>
			{children}
		</AnimatedText3D>
	);
}
function App() {
	return (
		<div id="canvas-container">
			<Canvas>
				<ambientLight intensity={0.1} />
				<Center>
					<ScaryNumber position={[0, 0, 0]}>1</ScaryNumber>
					<ScaryNumber position={[1, 1, 0]}>2</ScaryNumber>
					<ScaryNumber position={[2, 2, 0]}> 3</ScaryNumber>
					<ScaryNumber position={[3, 3, 0]}> 4</ScaryNumber>
				</Center>
			</Canvas>
		</div>
	);
}

export default App;
