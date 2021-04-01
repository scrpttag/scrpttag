import React, { FunctionComponent } from 'react'

type MetaProps = {
  author?: string
  date: string
}

const Meta: FunctionComponent<MetaProps> = ({ date, author = 'Gabor Molnar' }) => {
  return (
    <p className="text-sm text-gray-300 font-mono">
      {date} <strong>{author}</strong>
    </p>
  )
}

export default Meta
