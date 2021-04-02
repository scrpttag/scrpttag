import React, { FunctionComponent } from 'react'

type DirectionProps = {
  className?: string
  href: string
  target?: string
}

const Direction: FunctionComponent<DirectionProps> = ({ href, children, target = '_blank', className }) => {
  const baseClassName =
    'block px-6 py-4 transition-all uppercase font-bold text-sm text-gray-300 hover:text-gray-100 border-2 rounded dark:border-gray-300 dark:hover:border-gray-100 md:w-64'

  return (
    <a href={href} className={className ? `${baseClassName} ${className}` : baseClassName} target={target}>
      {children}
    </a>
  )
}

export default Direction
