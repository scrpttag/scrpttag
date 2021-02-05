import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

type FooterProps = {}

const SocialLinkList = styled.ul`
  writing-mode: tb;
`

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="flex fixed text-sm right-0 h-full w-32 dark:bg-gray-900 border-r-2 dark:border-gray-600 items-center flex-col p-6">
      <SocialLinkList className="flex list-none p-0 text-gray-100 h-full">
        <li className="mb-1 uppercase font-bold text-gray-300 hover:text-gray-100 cursor-pointer transition-colors">
          <a className="p-4 inline-flex items-center" href="https://www.facebook.com/scrpttag" target="_blank">
            Facebook
          </a>
        </li>
        <li className="mb-auto uppercase font-bold text-gray-300 hover:text-gray-100 cursor-pointer transition-colors">
          <a className="p-4 inline-flex items-center" href="https://www.instagram.com/scrpttag" target="_blank">
            Instagram
          </a>
        </li>
        <li className="p-4 uppercase font-bold text-gray-300">2020 scrpttag.com</li>
      </SocialLinkList>
    </footer>
  )
}

export default Footer
