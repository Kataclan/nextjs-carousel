import { LeftArrowIcon, RightArrowIcon } from '..'
import { FC } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
`

export const CarouselButton: FC<{
  type: 'next' | 'prev'
  onClick?: () => void
  disabled?: boolean
}> = ({ type, onClick = () => null, disabled = false }) => {
  return (
    <StyledButton
      aria-label={`${type}-button`}
      title={`${type}-button`}
      onClick={onClick}
      disabled={disabled}
    >
      {type === 'next' ? (
        <RightArrowIcon disabled={disabled} />
      ) : (
        <LeftArrowIcon disabled={disabled} />
      )}
    </StyledButton>
  )
}

export default CarouselButton
