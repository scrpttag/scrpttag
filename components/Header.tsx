import Link from 'next/link'
import React, { FunctionComponent } from 'react'

import { GlitchSymbolContainer, SvgContainer } from './Glitch'
import Menu from './Menu'
import Scrpttag from './Scrpttag'

type HeaderProps = {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className="flex w-full h-auto items-center p-6 lg:items-start lg:flex-col lg:fixed lg:z-10 lg:p-20 lg:w-52 lg:h-full dark:bg-gray-900 border-b-2 lg:border-r-2 dark:border-gray-600">
      <Link href="/">
        <a href="/" className="dark:text-gray-100 fill-current" title="scrpttag">
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
