import React, { FunctionComponent } from 'react'

type MetaProps = {
  author?: string
  date: string
}

const Author: FunctionComponent<MetaProps> = ({ date, author = 'Gabor Molnar' }) => {
  return (
    <p className="text-sm text-gray-300 font-mono">
      {date} <strong className="text-gray-200">{author}</strong>
    </p>
  )
}

export default Author
