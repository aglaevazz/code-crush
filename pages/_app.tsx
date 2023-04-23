import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { customTheme } from '@/utils/theme'





export default function App({ Component, pageProps }: AppProps) {

  return (
    <NextUIProvider theme={customTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
