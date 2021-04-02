import { NextPage } from 'next'
import Link from 'next/link'

import Meta from '../components/Article/elements/Meta'
import LayoutBase from '../components/LayoutBase'

const Home: NextPage = () => {
  return (
    <LayoutBase>
      <section className="mt-10 lg:mt-20">
        <h1 className="font-mono text-gray-100 w-96 text-6xl lg:text-8xl">Hello, Scrpttag!</h1>
        <h2 className="text-gray-300 mt-10 text-2xl lg:mt-20 lg:text-3xl">A blog about my path in tech era</h2>
      </section>
      <section className="flex flex-col mt-10 pt-10 lg:flex-row lg:items-stretch lg:mt-20 lg:pt-20 border-t-2 dark:border-gray-600">
        <section className="mb-10 lg:flex-auto lg:w-6/12">
          <h2 className="text-5xl font-mono text-gray-100">Posts</h2>
        </section>
        <section className="lg:flex-auto lg:w-6/12">
          <article>
            <Link href="/posts/from-challenge-to-scrpttag">
              <a className="block group">
                <Meta date="2nd April, 2021" />
                <h1 className="text-3xl text-gray-100 font-mono my-4 group-hover:underline lg:my-6">From Challenge to Scrpttag</h1>
                <h2 className="text-lg text-gray-200">At some point we need to step out from the usual and challenge ourselves.</h2>
              </a>
            </Link>
          </article>
        </section>
      </section>
    </LayoutBase>
  )
}

export default Home
