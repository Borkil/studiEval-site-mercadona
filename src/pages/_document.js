import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/Components/Header.jsx'
import Layout from '@/Components/Layout.jsx'

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body >
        <Layout>
          <Header/>
          <Main />
          <NextScript />
        </Layout>
      </body>
    </Html>
  )
}
