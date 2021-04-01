import { NextPage } from 'next'

import LayoutBase from '../components/LayoutBase'

const Home: NextPage = () => {
  return (
    <LayoutBase>
      <section className="mt-20">
        <h1 className="text-8xl font-mono text-gray-100 w-96">Hello, Scrpttag!</h1>
        <h2 className="text-3xl text-gray-200 mt-20">A blog about my path in tech era</h2>
      </section>
    </LayoutBase>
  )
}

export default Home
