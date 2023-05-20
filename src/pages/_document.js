import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/Components/Header.jsx'

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body className='container max-w-6xl'>
          <Header/>
          <Main />
          <NextScript />
      </body>
    </Html>
  )
}
