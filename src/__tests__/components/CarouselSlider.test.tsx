import React from 'react'
import { render } from '../testUtils'
import { mockImageBlocks } from '../__mocks__/carousel'
import { CarouselSlider } from '../../components'

const DEFAULT_IMG_SIZE = 300
const SLIDES = 4
const SLIDE_LABELS = [
  'carousel-slide-0',
  'carousel-slide-1',
  'carousel-slide-2',
  'carousel-slide-3',
]

describe('Carousel Slider', () => {
  it('renders nSlides', () => {
    const { getByLabelText } = render(
      <CarouselSlider
        nSlides={SLIDES}
        imgBlocks={mockImageBlocks}
        activeSlideIndex={0}
        imgSize={DEFAULT_IMG_SIZE}
      />
    )

    for (let index = 0; index < SLIDE_LABELS.length; index++) {
      expect(getByLabelText(SLIDE_LABELS[index])).toBeInTheDocument()
    }
  })
})
