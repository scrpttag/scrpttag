import React, { FunctionComponent } from 'react'

type CodepenProps = {
  theme?: string
  user?: string
  name?: string
  slugHash: string
  title: string
}

const Codepen: FunctionComponent<CodepenProps> = ({ title, slugHash, user = 'gabemiller', name = 'Gabor Molnar', theme = 'dark' }) => {
  return (
    <>
      <iframe
        height={500}
        className="w-full"
        scrolling="no"
        title={title}
        src={`https://codepen.io/gabemiller/embed/${slugHash}?height=500&theme-id=${theme}&default-tab=result`}
        frameBorder="no"
        loading="lazy"
        allowTransparency
        allowFullScreen
      >
        See the Pen{' '}
        <a href={`https://codepen.io/gabemiller/pen/${slugHash}`} rel="noopener noreferrer" target="_blank">
          {title}
        </a>{' '}
        by
        {name} (
        <a href={`https://codepen.io/${user}`} rel="noopener noreferrer" target="_blank">
          @{user}
        </a>
        ) on{' '}
        <a href="https://codepen.io" rel="noopener noreferrer" target="_blank">
          CodePen
        </a>
        .
      </iframe>
    </>
  )
}

export default Codepen
