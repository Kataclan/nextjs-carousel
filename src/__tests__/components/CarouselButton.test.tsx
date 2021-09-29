import React from 'react'
import { render } from '../testUtils'
import { CarouselButton } from '../../components'

describe('Carousel Button', () => {
  it('render both types correctly', () => {
    const { getByRole, getByLabelText, rerender } = render(
      <CarouselButton type="next" />
    )
    expect(getByRole('button')).toBeInTheDocument()
    expect(getByLabelText('next-button')).toBeInTheDocument()
    expect(getByLabelText('right-arrow-icon')).toBeInTheDocument()

    rerender(<CarouselButton type="prev" />)
    expect(getByRole('button')).toBeInTheDocument()
    expect(getByLabelText('prev-button')).toBeInTheDocument()
    expect(getByLabelText('left-arrow-icon')).toBeInTheDocument()
  })
})
