import React from 'react'
import Link from 'next/link'
import { Box, Button, Center, Stack, Heading, useColorMode, useColorModeValue } from '@chakra-ui/react'

interface ComponentProps {
	forcePurpleIcon?: boolean
}

const Home = ({ forcePurpleIcon = false }: ComponentProps): JSX.Element => {
	const { colorMode, toggleColorMode } = useColorMode()
	console.log('colorMode:', colorMode)

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
		</Box>
	)
}
export default Home
