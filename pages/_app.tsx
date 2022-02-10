import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'components/theme'
import { StoreProvider } from '../lib/zustandProvider'
import { useHydrate } from '../lib/store'

const MyApp = ({ Component, pageProps }: AppProps) => {
	const store = useHydrate(pageProps.initialZustandState)
	return (
		<StoreProvider store={store}>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</StoreProvider>
	)
}

export default MyApp
