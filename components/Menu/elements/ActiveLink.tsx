import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'

type ActiveLinkProps = {
  className: string
  defaultClassName: string
  activeClassName: string
  href: string
}

const ActiveLink: FunctionComponent<ActiveLinkProps> = ({ href, className, defaultClassName, activeClassName, children }) => {
  const router = useRouter()

  return (
    <Link href={href}>
      <a href={href} className={router.pathname === href ? `${className} ${activeClassName}` : `${className} ${defaultClassName}`}>
        {children}
      </a>
    </Link>
  )
}

export default ActiveLink
