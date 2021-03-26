import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

type MenuProps = {}

const Line = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 2px;
`

const Menu: FunctionComponent<MenuProps> = () => {
  return (
    <div className="flex items-center justify-center flex-grow pt-4 dark:text-gray-100">
      <button className="w-8 h-8 relative focus:outline-none">
        <Line className="dark:bg-gray-100" />
      </button>
    </div>
  )
}

export default Menu
