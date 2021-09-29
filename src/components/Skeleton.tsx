import styled, { keyframes } from 'styled-components'
import { HTMLAttributes } from 'react'

const waves = keyframes`
   from {
        left: -150px;
    }
    to   {
        left: 100%;
    }
`

const Root = styled.div`
  min-height: 20px;
  display: block;
  background-color: #eee;
`

const Waves = styled(Root)`
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  &:before {
    content: '';
    position: absolute;
    background-image: linear-gradient(
      90deg,
      transparent,
      rgba(243, 243, 243, 0.5),
      transparent
    );
    top: 0;
    left: -150px;
    height: 100%;
    width: 150px;
    animation: ${waves} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`

const Skeleton: React.FC<HTMLAttributes<HTMLOrSVGElement>> = ({ ...props }) => {
  return <Waves aria-label="skeleton" {...props} />
}

export default Skeleton
