import Link from 'next/link'
import React, { FunctionComponent } from 'react'

import { GlitchSymbolContainer, SvgContainer } from './Glitch'
import Menu from './Menu'
import Scrpttag from './Scrpttag'

type HeaderProps = {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className="flex fixed h-full w-52 dark:bg-gray-900 border-r-2 dark:border-gray-600 items-center flex-col p-6">
      <Link href="/">
        <a href="/" className="mt-16 dark:text-gray-100 fill-current">
          <GlitchSymbolContainer animationOnHover>
            <SvgContainer>
              <Scrpttag.Symbol />
            </SvgContainer>
            <SvgContainer>
              <Scrpttag.Symbol />
            </SvgContainer>
            <SvgContainer>
              <Scrpttag.Symbol />
            </SvgContainer>
          </GlitchSymbolContainer>
        </a>
      </Link>
      <Menu />
    </header>
  )
}

export default Header
