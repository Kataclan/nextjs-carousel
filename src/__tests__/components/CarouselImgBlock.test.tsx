import React from 'react'
import { render, fireEvent } from '../testUtils'
import { CarouselImgBlock } from '../../components'
import { mockImageSrc } from '../__mocks__/carousel'

const IMG_TITLE = 'Image title'

describe('CarouselImgBlock', () => {
  it('renders skeleton when loading image, title on load', () => {
    const { getByTitle, getByLabelText, getByText } = render(
      <CarouselImgBlock
        title={IMG_TITLE}
        alt="slide1block1"
        size={300}
        src={mockImageSrc[0]}
      />
    )
    const image = getByTitle(IMG_TITLE)

    // Image & Skeleton component are in document (title does not)
    expect(image).toBeInTheDocument()
    expect(getByLabelText('skeleton')).toBeInTheDocument()

    // Fire image load
    fireEvent.load(image)

    // Image & title are in document (skeleton does not)
    expect(getByText(IMG_TITLE)).toBeInTheDocument()
    expect(image).toBeInTheDocument()
  })
})
