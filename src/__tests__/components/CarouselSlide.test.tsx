import React from 'react'
import { render } from '../testUtils'
import { mockImageBlocks } from '../__mocks__/carousel'
import { CarouselSlide } from '../../components'

const DEFAULT_IMG_SIZE = 300
const DEFAULT_SLIDE = 0
const DEFAULT_IMAGE_TITLES = mockImageBlocks.map(
  (block) => `Slide ${DEFAULT_SLIDE + 1} - ${block.title}`
)

describe('Carousel Slide', () => {
  it('renders one image per block', () => {
    const { getByTitle } = render(
      <CarouselSlide
        imgBlocks={mockImageBlocks}
        slideIndex={0}
        activeSlideIndex={0}
        imgSize={DEFAULT_IMG_SIZE}
      />
    )

    for (let index = 0; index < DEFAULT_IMAGE_TITLES.length; index++) {
      expect(getByTitle(DEFAULT_IMAGE_TITLES[index])).toBeInTheDocument()
    }
  })
})
