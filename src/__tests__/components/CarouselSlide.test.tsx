import React from 'react'
import { render } from '../testUtils'
import {
  mockImageBlocks,
  mockImageTitlesSlide1,
  mockImgSize,
} from '../__mocks__/carousel'
import { CarouselSlide } from '../../components'

describe('Carousel Slide', () => {
  it('renders one image per block', () => {
    const { getByTitle } = render(
      <CarouselSlide
        imgBlocks={mockImageBlocks}
        slideIndex={0}
        activeSlideIndex={0}
        imgSize={mockImgSize}
      />
    )

    for (let index = 0; index < mockImageTitlesSlide1.length; index++) {
      expect(getByTitle(mockImageTitlesSlide1[index])).toBeInTheDocument()
    }
  })
})
