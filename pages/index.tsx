import React from 'react'
import Link from 'next/link'
import { Box, Heading } from '@chakra-ui/layout'

interface ComponentProps {
	forcePurpleIcon?: boolean
}

const Home = ({ forcePurpleIcon = false }: ComponentProps): JSX.Element => {
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
		</Box>
	)
}
export default Home
