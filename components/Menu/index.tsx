import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import ActiveLink from '../ActiveLink'

type MenuProps = {}

type LineProps = {
  width?: string
}

const Line = styled.span`
  display: block;
  width: ${({ width = '90%' }: LineProps) => width};
  height: 2px;
`

const Button = styled.button`
  ${Line} {
    &:not(:last-of-type) {
      margin-bottom: 10px;
    }
  }
`

const Menu: FunctionComponent<MenuProps> = () => {
  return (
    <div className="flex items-center ml-auto dark:text-gray-100 lg:justify-center lg:ml-0 lg:flex-grow lg:pt-4">
      <Button className="hidden flex items-start justify-center flex-col w-8 h-8 focus:outline-none">
        <Line className="dark:bg-gray-100 transition-all" width="70%" />
        <Line className="dark:bg-gray-100 transition-all" />
      </Button>
      <ul className="flex lg:flex-col">
        <li className="block mr-2 lg:mr-0 lg:mb-2">
          <ActiveLink href="/" className="block p-2 lg:px-0 lg:py-2">
            Home
          </ActiveLink>
        </li>
        <li className="block">
          <ActiveLink href="/links" className="block p-2 lg:px-0 lg:py-2">
            Links
          </ActiveLink>
        </li>
      </ul>
    </div>
  )
}

export default Menu
