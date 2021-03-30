import Head from 'next/head'
import React, { FunctionComponent } from 'react'

import Footer from './Footer'
import Header from './Header'

type LayoutBaseProps = {
  pageTitle?: string
}

const LayoutBase: FunctionComponent<LayoutBaseProps> = ({ pageTitle, children }) => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900">
      <Head>
        <title>Scrpttag {pageTitle && `- ${pageTitle}`}</title>
      </Head>
      <Header />
      <main className="flex flex-col self-stretch flex-grow pl-56 pr-24">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutBase
