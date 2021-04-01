import React, { FunctionComponent, useCallback } from 'react'

import LayoutBase from '../LayoutBase'

type ArticleProps = {}

const Article: FunctionComponent<ArticleProps> = ({ children }) => {
  const handleExternalLinks = useCallback((e) => {
    if (e.target.href && e.target.href.startsWith('http')) {
      e.preventDefault()
      window.open(e.target.href, '_bank')
    }
  }, [])

  return (
    <LayoutBase>
      <article onClick={handleExternalLinks} className="prose mx-auto md:mx-0 md:prose-lg lg:mx-0 lg:prose-xl">
        {children}
      </article>
    </LayoutBase>
  )
}

export default Article
