import React from 'react'
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { RecoilRoot } from 'recoil';

export default function Providers({ children }) {
	return (
		<MantineProvider>
			<ModalsProvider>
				<RecoilRoot>
					{children}
				</RecoilRoot>
			</ModalsProvider>
		</MantineProvider>
	)
}
