import { FC, useMemo } from 'react'
import styled from 'styled-components'
import { ImgBlock } from '../../@types'
import CarouselImgBlock from './CarouselImgBlock'

const CarouselSlideWrapper = styled.div<{
  activeSlideIndex: number
  slideIndex: number
  imageSize: number
  nBlocks: number
}>`
  display: flex;
  flex-shrink: 0;
  position: absolute;
  left: ${({ nBlocks, slideIndex, activeSlideIndex, imageSize }) =>
    `${nBlocks * imageSize * (slideIndex - activeSlideIndex)}px`};
  width: ${({ nBlocks, imageSize }) => `${nBlocks * imageSize}px`};
  transition: left 1s;
  height: ${({ imageSize }) => `${imageSize}px`};
`

const CarouselSlide: FC<{
  activeSlideIndex: number
  slideIndex: number
  imgBlocks: ImgBlock[]
  imgSize: number
}> = ({ activeSlideIndex, slideIndex, imgBlocks, imgSize }) => {
  const blocks = useMemo(
    () =>
      imgBlocks.map((block) => {
        const randomId = Math.trunc(Math.random() * block.images.length)
        return (
          <CarouselImgBlock
            key={`slide-${slideIndex}-block-${block.title}`}
            title={`Slide ${slideIndex + 1} - ${block.title}`}
            alt={`Slide ${slideIndex + 1} - ${block.title}`}
            size={imgSize}
            src={block.images[randomId]}
          />
        )
      }),
    []
  )

  return (
    <CarouselSlideWrapper
      aria-label={`carousel-slide-${slideIndex}`}
      activeSlideIndex={activeSlideIndex}
      slideIndex={slideIndex}
      imageSize={imgSize}
      nBlocks={imgBlocks.length}
    >
      {blocks}
    </CarouselSlideWrapper>
  )
}

export default CarouselSlide
