import { Application, Sprite } from 'pixi.js';
import React, { useEffect, useRef } from 'react'

export default function Canvas() {

	const ref = useRef<any>();
	useEffect(() => {

		const app = new Application({
			resizeTo: document.body,
			backgroundAlpha: 0,
		});

		ref.current.appendChild(app.view);

		// const sprite = Sprite.from('assets/iron_cursor.png');
		const sprite = Sprite.from('assets/nuclear_poo.png');

		app.stage.interactive = true;
		app.stage.addChild(sprite);

		app.stage.on('pointermove', (e) => {
			sprite.position.copyFrom(e.data.global);
		});

	}, [])

	return (
		<div ref={ref} className="pixi-canvas" />
	)
}
