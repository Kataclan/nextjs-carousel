import React from 'react'
import { render, fireEvent } from '../testUtils'
import { CarouselImgBlock } from '../../components'
import { mockImageSrc, mockImageTitlesSlide1 } from '../__mocks__/carousel'

describe('CarouselImgBlock', () => {
  it('renders skeleton when loading image, title on load', () => {
    const { getByTitle, getByLabelText, getByText } = render(
      <CarouselImgBlock
        title={mockImageTitlesSlide1[0]}
        alt="slide1block1"
        size={300}
        src={mockImageSrc[0]}
      />
    )
    const image = getByTitle(mockImageTitlesSlide1[0])

    // Image & Skeleton component are in document (title does not)
    expect(image).toBeInTheDocument()
    expect(getByLabelText('skeleton')).toBeInTheDocument()

    // Fire image load
    fireEvent.load(image)

    // Image & title are in document (skeleton does not)
    expect(getByText(mockImageTitlesSlide1[0])).toBeInTheDocument()
    expect(image).toBeInTheDocument()
  })
})
