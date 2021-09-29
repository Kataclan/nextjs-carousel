import React from 'react'
import { render } from '../testUtils'
import {
  mockImageBlocks,
  mockImageTitlesSlide1,
  mockImageTitlesSlide2,
  mockImageTitlesSlide3,
  mockImageTitlesSlide4,
  mockImgSize,
  mockNSlides,
  mockSlideLabels,
} from '../__mocks__/carousel'
import { Carousel } from '../../components'

describe('Carousel', () => {
  it('renders correctly', () => {
    const { getByLabelText, getByText, getByTitle } = render(
      <Carousel
        nSlides={mockNSlides}
        imgBlocks={mockImageBlocks}
        imgSize={mockImgSize}
      />
    )

    // Renders all slides
    for (let index = 0; index < mockSlideLabels.length; index++) {
      expect(getByLabelText(mockSlideLabels[index])).toBeInTheDocument()
    }

    // Renders first slide images
    for (let index = 0; index < mockImageTitlesSlide1.length; index++) {
      expect(getByTitle(mockImageTitlesSlide1[index])).toBeInTheDocument()
    }
    // Renders second slide images
    for (let index = 0; index < mockImageTitlesSlide2.length; index++) {
      expect(getByTitle(mockImageTitlesSlide2[index])).toBeInTheDocument()
    }
    // Renders third slide images
    for (let index = 0; index < mockImageTitlesSlide3.length; index++) {
      expect(getByTitle(mockImageTitlesSlide3[index])).toBeInTheDocument()
    }
    // Renders fourth slide images
    for (let index = 0; index < mockImageTitlesSlide4.length; index++) {
      expect(getByTitle(mockImageTitlesSlide4[index])).toBeInTheDocument()
    }

    // Renders slider controls
    expect(getByLabelText('next-button')).toBeInTheDocument()
    expect(getByLabelText('prev-button')).toBeInTheDocument()
    expect(getByText('1/4')).toBeInTheDocument()
  })
})
