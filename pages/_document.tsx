import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="nl-BE">
      <Head />
      <Navbar />
      <body className='relative bg-white dark:bg-gray-700 min-w-screen mt-[68px] h-[calc(100vh-68px)] w-[100vw] overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth'>
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  )
}
