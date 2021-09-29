import styled from 'styled-components'
import { ImgBlock } from '../../@types'
import CarouselSlide from './CarouselSlide'

const CarouselSliderWrapper = styled.div<{
  nBlocks: number
  imgSize: number
  width?: number
}>`
  position: relative;
  width: ${({ width, nBlocks, imgSize }) =>
    width > nBlocks * imgSize ? `${width}px` : `${nBlocks * imgSize}px`};
  min-width: ${({ nBlocks, imgSize }) => `${nBlocks * imgSize}px`};
  height: ${({ imgSize }) => `${imgSize}px`};
  overflow: hidden;
`

const CarouselSlider: React.FC<{
  nSlides: number
  activeSlideIndex: number
  imgBlocks: ImgBlock[]
  imgSize: number
  width?: number
}> = ({ nSlides, activeSlideIndex, imgBlocks, imgSize, width }) => {
  const _slides = []
  for (let i = 0; i < nSlides; ++i) {
    _slides.push(
      <CarouselSlide
        key={`carousel-slide-${i}`}
        slideIndex={i}
        activeSlideIndex={activeSlideIndex}
        imgBlocks={imgBlocks}
        imgSize={imgSize}
      />
    )
  }
  return (
    <CarouselSliderWrapper
      nBlocks={imgBlocks.length}
      imgSize={imgSize}
      width={width}
    >
      {_slides}
    </CarouselSliderWrapper>
  )
}

export default CarouselSlider
