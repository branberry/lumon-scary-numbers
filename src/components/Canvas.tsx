import type React from "react";
import { useRef } from "react";

export function Canvas(
	props: React.DetailedHTMLProps<
		React.CanvasHTMLAttributes<HTMLCanvasElement>,
		HTMLCanvasElement
	>,
) {
	const canvasRef = useRef(null);
	return <canvas ref={canvasRef} {...props} />;
}
