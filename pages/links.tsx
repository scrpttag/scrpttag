import { NextPage } from 'next'

import LayoutBase from '../components/LayoutBase'
import Direction from '../components/Menu/elements/Direction'

const Links: NextPage = () => {
  return (
    <LayoutBase>
      <h1 className="text-3xl md:text-5xl font-mono text-gray-100 mb-10 text-center lg:text-left">Links</h1>
      <ul className="flex flex-col items-stretch text-center space-y-8 list-none md:items-center lg:items-start">
        <li>
          <Direction href="https://gabormolnar.dev">gabormolnar.dev</Direction>
        </li>
        <li>
          <Direction href="https://www.facebook.com/scrpttag">Facebook</Direction>
        </li>
        <li>
          <Direction href="https://twitter.com/scrpttag">Twitter</Direction>
        </li>
        <li>
          <Direction href="https://www.instagram.com/scrpttag">Instagram</Direction>
        </li>
        <li>
          <Direction href="https://codepen.io/collection/DQRePJ">28 Components Of February</Direction>
        </li>
      </ul>
    </LayoutBase>
  )
}

export default Links
