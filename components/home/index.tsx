/* eslint-disable */
import React from 'react'
import Link from 'next/link'
import shallow from 'zustand/shallow'
import { useStore } from '../../lib/zustandProvider'
import { Box, Button, Center, Stack, Heading, useColorMode, useColorModeValue } from '@chakra-ui/react'

const useCounter = () => {
	const { count, increment, decrement, reset } = useStore(
		(store) => ({
			count: store.count,
			increment: store.increment,
			decrement: store.decrement,
			reset: store.reset,
		}),
		shallow
	)

	return { count, increment, decrement, reset }
}

interface ComponentProps {
	forcePurpleIcon?: boolean
}

const Home = ({ forcePurpleIcon = false }: ComponentProps): JSX.Element => {
	const { count, increment, decrement, reset } = useCounter()
	const { colorMode, toggleColorMode } = useColorMode()

	const bg = useColorModeValue('#000', 'red.200')
	const color = useColorModeValue('white', 'gray.800')

	return (
		<Box p={5}>
			Hello World.{' '}
			<Link href="/about" as={process.env.BACKEND_URL + '/about'}>
				<a>About</a>
			</Link>
			<Box sx={{ '--my-color': '#53c8c4' }}>
				<Heading color="var(--my-color)" size="lg">
					This uses CSS Custom Properties!
				</Heading>
			</Box>
			<Box mb={4} bg={bg} color={color}>
				This boxs style will change based on the color mode.
			</Box>
			<Button size="sm" onClick={toggleColorMode}>
				Toggle Mode
			</Button>
			<img src="./images/Autopilot-45.jpg" width="100px" />
			<Box mt={10}>
				<h1>
					Count: <span>{count}</span>
				</h1>
				<Button onClick={increment}>+1</Button>
				<Button onClick={decrement}>-1</Button>
				<Button onClick={reset}>Reset</Button>
			</Box>
		</Box>
	)
}
export default Home
