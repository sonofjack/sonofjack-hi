import React from 'react'
import Link from 'next/link'
export default function About() {
	return (
		<div>
			<div>NEWW another new boy</div>
			<div>About us</div>
			<div>About us</div>
			<div>About us</div>
			<div>wow</div>
			<div>wow</div>
			<div>
				Back to{' '}
				<Link href="/" as={process.env.BACKEND_URL + '/'}>
					<a>Home</a>
				</Link>
			</div>
		</div>
	)
}
