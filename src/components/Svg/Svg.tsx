import { SVGAttributes } from 'react'
import styled from 'styled-components'

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement> {
  disabled?: boolean
}

const Svg = styled.svg<SvgProps>`
  align-self: center; // Safari fix
  fill: ${({ disabled, color }) => (disabled ? `#eee` : color)};
  flex-shrink: 0;
`

Svg.defaultProps = {
  color: 'text',
  width: '32px',
  height: '32px',
  xmlns: 'http://www.w3.org/2000/svg',
  disabled: false,
}

export default Svg
