import styled from 'styled-components'

const CarouselPaginatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
`

const CarouselPaginator: React.FC<{
  currentSlide: number
  totalSlides: number
  onClickIndex?: (index: number) => void
}> = ({ currentSlide, totalSlides }) => {
  return (
    <CarouselPaginatorWrapper>
      <span>
        {currentSlide + 1}/{totalSlides}
      </span>
    </CarouselPaginatorWrapper>
  )
}

export default CarouselPaginator
