import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Poppins } from 'next/font/google'

const poppins = Poppins({
	weight: '500',
	subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={poppins.className}>
			<Component {...pageProps} />
		</main>
	)
}
