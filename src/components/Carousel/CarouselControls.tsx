import { FC } from 'react'
import styled from 'styled-components'
import CarouselButton from './CarouselButton'
import CarouselPaginator from './CarouselPaginator'

const CarouselControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`

const CarouselControls: FC<{
  currentSlide: number
  totalSlides: number
  onClickNext: () => void
  onClickPrev: () => void
}> = ({ currentSlide, totalSlides, onClickNext, onClickPrev }) => {
  return (
    <CarouselControlsWrapper>
      <CarouselButton
        type="prev"
        onClick={onClickPrev}
        disabled={currentSlide === 0}
      />
      <CarouselPaginator
        currentSlide={currentSlide}
        totalSlides={totalSlides}
      />
      <CarouselButton
        type="next"
        onClick={onClickNext}
        disabled={currentSlide === totalSlides - 1}
      />
    </CarouselControlsWrapper>
  )
}

export default CarouselControls
