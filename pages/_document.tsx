import React from 'react'
import theme from 'components/theme'
import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preload" href="./fonts/Roboto-Black.woff" as="font" type="font/woff" crossOrigin="anonymous" />
					<link rel="preload" href="./fonts/Roboto-Black.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
					<link rel="preload" href="./fonts/Roboto-Bold.woff" as="font" type="font/woff" crossOrigin="anonymous" />
					<link rel="preload" href="./fonts/Roboto-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
					<link rel="preload" href="./fonts/Roboto-Medium.woff" as="font" type="font/woff" crossOrigin="anonymous" />
					<link rel="preload" href="./fonts/Roboto-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
					<link rel="preload" href="./fonts/Roboto-Regular.woff" as="font" type="font/woff" crossOrigin="anonymous" />
					<link rel="preload" href="./fonts/Roboto-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
					<style
						dangerouslySetInnerHTML={{
							__html: `
@font-face {
  font-family: 'Roboto';
  font-weight: 900;
  font-display: swap;
  src: url(./fonts/Roboto-Black.woff2) format('woff2'), url(./fonts/Roboto-Black.woff) format('woff');
}
@font-face {
  font-family: 'Roboto';
  font-weight: 700;
  font-display: swap;
  src: url(./fonts/Roboto-Bold.woff2) format('woff2'), url(./fonts/Roboto-Bold.woff) format('woff');
}
@font-face {
  font-family: 'Roboto';
  font-weight: 500;
  font-style: normal;
  font-display: swap;
  src: url('./fonts/Roboto-Medium.woff2') format('woff2'), url('./fonts/Roboto-Medium.woff') format('woff');
}
@font-face {
  font-family: 'Roboto';
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: url('./fonts/Roboto-Regular.woff2') format('woff2'), url('./fonts/Roboto-Regular.woff') format('woff');
}
`,
						}}
					/>
				</Head>
				<body>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
