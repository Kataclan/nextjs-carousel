import styled from 'styled-components'
import { ImgBlock } from '../../@types'
import { usePagination } from '../../hooks'
import CarouselSlider from './CarouselSlider'
import CarouselControls from './CarouselControls'

interface CarouselProps {
  nSlides: number
  imgBlocks: ImgBlock[]
  imgSize: number
  wrapperStyle?: React.CSSProperties
  width?: number
}

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Carousel: React.FC<CarouselProps> = ({
  nSlides,
  imgBlocks,
  imgSize,
  width,
  wrapperStyle,
}) => {
  const { currentPage, previousPage, nextPage } = usePagination({
    nPages: nSlides,
  })

  return (
    <CarouselWrapper style={wrapperStyle}>
      <CarouselSlider
        nSlides={nSlides}
        activeSlideIndex={currentPage}
        imgBlocks={imgBlocks}
        imgSize={imgSize}
        width={width}
      />
      <CarouselControls
        currentSlide={currentPage}
        totalSlides={nSlides}
        onClickNext={nextPage}
        onClickPrev={previousPage}
      />
    </CarouselWrapper>
  )
}

export default Carousel
