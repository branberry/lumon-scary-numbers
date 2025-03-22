import { Application, extend } from "@pixi/react";
import { Container, Graphics } from "pixi.js";
import { useCallback } from "react";

import "./App.css";

extend({
	Container,
	Graphics,
});

function App() {
	const drawCallback = useCallback((graphics: Graphics) => {
		graphics.clear();
		graphics.setFillStyle({ color: "red" });
		graphics.rect(0, 0, 100, 100);
		graphics.fill();
	}, []);

	return (
		<div>
			<Application>
				<pixiContainer x={100} y={100}>
					<pixiGraphics draw={drawCallback} />
					<pixiText />
				</pixiContainer>
			</Application>
		</div>
	);
}

export default App;
