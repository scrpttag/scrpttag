import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

type FooterLinkProps = {
  href: string
  isLast?: boolean
}

const SocialLinkList = styled.ul`
  writing-mode: tb;
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
    <footer className="flex text-sm static w-full h-auto lg:fixed lg:z-10 lg:right-0 lg:w-auto lg:h-full dark:bg-gray-900 border-l-2 dark:border-gray-600 items-center flex-col p-6">
      <SocialLinkList className="flex list-none p-0 text-gray-100 h-full">
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
