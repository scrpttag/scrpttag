import Head from 'next/head'
import React, { FunctionComponent } from 'react'

import { meta } from '../config/meta'
import Footer from './Footer'
import Header from './Header'

type LayoutBaseProps = {
  description?: string
  url?: string
  title?: string
  image?: string
  type?: string
}

const LayoutBase: FunctionComponent<LayoutBaseProps> = ({
  title = meta.title,
  description = meta.description,
  url = meta.url,
  image = meta.image,
  type = meta.type,
  children,
}) => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:url" content={`${meta.baseUrl}${url}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${meta.baseUrl}${image}`} />
        <meta property="og:type" content={type} />
      </Head>
      <Header />
      <main className="flex flex-col self-stretch flex-grow px-6 py-10 lg:py-20 lg:pl-72 lg:pr-36">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutBase
