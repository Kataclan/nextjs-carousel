import React from 'react'
import { render } from '../testUtils'
import {
  mockImageBlocks,
  mockImgSize,
  mockNSlides,
  mockSlideLabels,
} from '../__mocks__/carousel'
import { CarouselSlider } from '../../components'

describe('Carousel Slider', () => {
  it('renders nSlides', () => {
    const { getByLabelText } = render(
      <CarouselSlider
        nSlides={mockNSlides}
        imgBlocks={mockImageBlocks}
        activeSlideIndex={0}
        imgSize={mockImgSize}
      />
    )

    for (let index = 0; index < mockSlideLabels.length; index++) {
      expect(getByLabelText(mockSlideLabels[index])).toBeInTheDocument()
    }
  })
})
