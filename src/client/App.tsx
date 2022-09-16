import { Button } from '@mantine/core'
import React from 'react'
import Canvas from './Canvas'

export default function App() {
	return (
		<>
			<Canvas />
			<div style={{ top: 0, left: 0, right: 0, bottom: 0, position: 'absolute' }}>
				<Button onClick={() => { }}>test the thing</Button>
			</div>
		</>
	)
}
