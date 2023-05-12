import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/Header.jsx'

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body >
          <Header/>
          <Main />
          <NextScript />
      </body>
    </Html>
  )
}
