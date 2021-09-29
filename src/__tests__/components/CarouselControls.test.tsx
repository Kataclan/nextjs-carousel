import React from 'react'
import { render, fireEvent } from '../testUtils'
import { CarouselControls } from '../../components'

const mockClickNext = jest.fn()
const mockClickPrev = jest.fn()

describe('CarouselControls Component', () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  test('fires onClickNext when clicking next-button', () => {
    const { getByLabelText } = render(
      <CarouselControls
        currentSlide={0}
        totalSlides={4}
        onClickNext={mockClickNext}
        onClickPrev={mockClickPrev}
      />
    )
    fireEvent.click(getByLabelText('next-button'))
    expect(mockClickNext).toBeCalled()
  })

  test('fires onClickPrev when clicking prev-button', () => {
    const { getByTitle } = render(
      <CarouselControls
        currentSlide={3}
        totalSlides={4}
        onClickNext={mockClickNext}
        onClickPrev={mockClickPrev}
      />
    )
    fireEvent.click(getByTitle('prev-button'))
    expect(mockClickPrev).toBeCalled()
  })

  test('renders paginator correctly', () => {
    const { getByText, rerender } = render(
      <CarouselControls
        currentSlide={0}
        totalSlides={4}
        onClickNext={() => null}
        onClickPrev={() => null}
      />
    )
    expect(getByText('1/4')).toBeInTheDocument()
    rerender(
      <CarouselControls
        currentSlide={1}
        totalSlides={4}
        onClickNext={() => null}
        onClickPrev={() => null}
      />
    )
    expect(getByText('2/4')).toBeInTheDocument()
    rerender(
      <CarouselControls
        currentSlide={2}
        totalSlides={4}
        onClickNext={() => null}
        onClickPrev={() => null}
      />
    )
    expect(getByText('3/4')).toBeInTheDocument()
    rerender(
      <CarouselControls
        currentSlide={3}
        totalSlides={4}
        onClickNext={() => null}
        onClickPrev={() => null}
      />
    )
    expect(getByText('4/4')).toBeInTheDocument()
  })
})
