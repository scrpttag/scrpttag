import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import { tailwind } from '../config/theme'

type FooterLinkProps = {
  href: string
  isLast?: boolean
}

const SocialLinkList = styled.ul`
  @media (min-width: ${tailwind.theme.screens.lg}) {
    writing-mode: tb;
  }
`

const FooterLink: FunctionComponent<FooterLinkProps> = ({ href, children, isLast = false }) => {
  const listClasses = 'uppercase font-bold text-gray-300 hover:text-gray-100 cursor-pointer transition-colors'
  const margin = isLast ? 'mr-auto lg:mb-auto' : 'mr-1 lg:mb-1'
  return (
    <li className={`${margin} ${listClasses}`}>
      <a className="p-4 inline-flex items-center" href={href} target="_blank">
        {children}
      </a>
    </li>
  )
}

const Footer: FunctionComponent = () => {
  return (
    <footer className="flex text-sm static w-full h-auto border-t-2 lg:border-l-2 lg:fixed lg:z-10 lg:right-0 lg:w-auto lg:h-full lg:flex-col dark:bg-gray-900 dark:border-gray-600 items-center p-6 lg:py-14">
      <SocialLinkList className="flex list-none p-0 text-gray-100 w-full h-auto lg:w-full lg:h-full">
        <FooterLink href="https://www.facebook.com/scrpttag">Facebook</FooterLink>
        <FooterLink href="https://twitter.com/scrpttag">Twitter</FooterLink>
        <FooterLink href="https://www.instagram.com/scrpttag" isLast>
          Instagram
        </FooterLink>
        <li className="p-4 uppercase font-bold text-gray-300">{new Date().getFullYear()} scrpttag.com</li>
      </SocialLinkList>
    </footer>
  )
}

export default Footer
