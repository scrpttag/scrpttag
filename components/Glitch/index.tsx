import styled, { css, keyframes } from 'styled-components'

export const glitchKeyframesRed = keyframes`
   0% {
     clip-path: inset(79% 0 14% 0);
   }
   5.8823529412% {
     clip-path: inset(48% 0 2% 0);
   }
   11.7647058824% {
     clip-path: inset(65% 0 1% 0);
   }
   17.6470588235% {
     clip-path: inset(85% 0 16% 0);
   }
   23.5294117647% {
     clip-path: inset(25% 0 53% 0);
   }
   29.4117647059% {
     clip-path: inset(11% 0 5% 0);
   }
   35.2941176471% {
     clip-path: inset(24% 0 68% 0);
   }
   41.1764705882% {
     clip-path: inset(64% 0 11% 0);
   }
   47.0588235294% {
     clip-path: inset(91% 0 8% 0);
   }
   52.9411764706% {
     clip-path: inset(65% 0 27% 0);
   }
   58.8235294118% {
     clip-path: inset(75% 0 26% 0);
   }
   64.7058823529% {
     clip-path: inset(58% 0 12% 0);
   }
   70.5882352941% {
     clip-path: inset(85% 0 6% 0);
   }
   76.4705882353% {
     clip-path: inset(64% 0 22% 0);
   }
   82.3529411765% {
     clip-path: inset(96% 0 5% 0);
   }
   88.2352941176% {
     clip-path: inset(64% 0 20% 0);
   }
   94.1176470588% {
     clip-path: inset(25% 0 54% 0);
   }
   100% {
     clip-path: inset(32% 0 69% 0);
   }
`

export const glitchKeyframesBlue = keyframes`
   0% {
     clip-path: inset(90% 0 3% 0);
   }
   5.8823529412% {
     clip-path: inset(91% 0 2% 0);
   }
   11.7647058824% {
     clip-path: inset(8% 0 93% 0);
   }
   17.6470588235% {
     clip-path: inset(75% 0 9% 0);
   }
   23.5294117647% {
     clip-path: inset(13% 0 9% 0);
   }
   29.4117647059% {
     clip-path: inset(40% 0 47% 0);
   }
   35.2941176471% {
     clip-path: inset(9% 0 83% 0);
   }
   41.1764705882% {
     clip-path: inset(5% 0 35% 0);
   }
   47.0588235294% {
     clip-path: inset(51% 0 11% 0);
   }
   52.9411764706% {
     clip-path: inset(94% 0 3% 0);
   }
   58.8235294118% {
     clip-path: inset(52% 0 32% 0);
   }
   64.7058823529% {
     clip-path: inset(86% 0 14% 0);
   }
   70.5882352941% {
     clip-path: inset(54% 0 39% 0);
   }
   76.4705882353% {
     clip-path: inset(3% 0 7% 0);
   }
   82.3529411765% {
     clip-path: inset(12% 0 80% 0);
   }
   88.2352941176% {
     clip-path: inset(88% 0 6% 0);
   }
   94.1176470588% {
     clip-path: inset(13% 0 39% 0);
   }
   100% {
     clip-path: inset(57% 0 18% 0);
   }
`

export const SvgContainer = styled.div`
  svg {
    width: 100%;
    height: 100%;
    fill: #f5f6f7;
  }
`

const GlitchAnimationRed = css`
  animation: ${glitchKeyframesRed} 2s infinite ease alternate-reverse;
`

const GlitchAnimationRedHover = css`
  display: block;
  ${GlitchAnimationRed}
`

const GlitchAnimationBlue = css`
  animation: ${glitchKeyframesBlue} 3s infinite ease alternate-reverse;
`

const GlitchAnimationBlueHover = css`
  display: block;
  ${GlitchAnimationRed}
`

export const GlitchContainer = styled(({ animationOnHover, ...props }) => <div {...props} />)`
  width: 200px;
  height: 50px;
  position: relative;
  &:hover {
    ${SvgContainer}:nth-of-type(1) {
      ${(props) => (props.animationOnHover ? GlitchAnimationRedHover : null)}
    }
    ${SvgContainer}:nth-of-type(3) {
      ${(props) => (props.animationOnHover ? GlitchAnimationBlueHover : null)}
    }
  }
  ${SvgContainer} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  ${SvgContainer}:nth-of-type(1) {
    left: 2px;
    background-color: #18191a;
    ${(props) => (!props.animationOnHover ? GlitchAnimationRed : 'display: none;')}
    svg {
      filter: drop-shadow(-2px 0 2px #ff0000);
    }
  }
  ${SvgContainer}:nth-of-type(3) {
    left: -2px;
    background-color: #18191a;
    ${(props) => (!props.animationOnHover ? GlitchAnimationBlue : 'display: none;')}
    svg {
      filter: drop-shadow(2px 0 2px #0000ff);
    }
  }
`

export const GlitchSymbolContainer = styled(GlitchContainer)`
  width: 42px;
  height: 42px;
  position: relative;
`
