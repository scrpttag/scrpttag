import { FunctionComponent } from 'react'
import styled from 'styled-components'

import Logo from '../Logo'
import { GlitchContainer, LogoContainer, SvgContainer } from './elements'

const Subtitle = styled.h2`
  color: #f5f6f7;
  font-size: 12px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 8px;
  font-family: sans-serif;
`

const FullPageLogo: FunctionComponent = () => {
  return (
    <LogoContainer>
      <GlitchContainer>
        <SvgContainer>
          <Logo />
        </SvgContainer>
        <SvgContainer>
          <Logo />
        </SvgContainer>
        <SvgContainer>
          <Logo />
        </SvgContainer>
      </GlitchContainer>
      <Subtitle>Coming soon</Subtitle>
    </LogoContainer>
  )
}

export default FullPageLogo
