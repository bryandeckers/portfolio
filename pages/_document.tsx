import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Html, Head, Main, NextScript } from 'next/document'



export default function Document() {
  return (
    <Html lang="nl-BE" >
      <Head />
      <Navbar />
      <body className='bg-white'>
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  )
}
