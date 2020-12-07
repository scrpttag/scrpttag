import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import { GlitchContainer, SvgContainer } from './Glitch'
import Scrpttag from './Scrpttag'

type LayoutMaintainProps = {}

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #18191a;
`

const Subtitle = styled.h2`
  color: #f5f6f7;
  font-size: 12px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 8px;
  font-family: sans-serif;
`

const LayoutMaintain: FunctionComponent<LayoutMaintainProps> = () => {
  return (
    <LogoContainer>
      <GlitchContainer>
        <SvgContainer>
          <Scrpttag.Logo />
        </SvgContainer>
        <SvgContainer>
          <Scrpttag.Logo />
        </SvgContainer>
        <SvgContainer>
          <Scrpttag.Logo />
        </SvgContainer>
      </GlitchContainer>
      <Subtitle>Coming soon</Subtitle>
    </LogoContainer>
  )
}

export default LayoutMaintain
