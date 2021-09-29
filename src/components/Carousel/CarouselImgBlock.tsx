import { FC, memo, useState } from 'react'
import styled from 'styled-components'
import { Skeleton } from '..'

const CarouselImgBlockWrapper = styled.div<{ imgSize: number }>`
  position: relative;
  width: ${({ imgSize }) => `${imgSize}px`};
  height: ${({ imgSize }) => `${imgSize}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  & h1 {
    position: absolute;
    top: 0;
    z-index: 101;
    font-size: 16px;
    & span {
      background-color: white;
    }
  }
`

const CarouselImgBlock: FC<{
  title: string
  alt: string
  src: string
  size: number
}> = ({ title, alt, src, size }) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <CarouselImgBlockWrapper imgSize={size}>
      {loaded ? (
        <h1>
          <span>{title}</span>
        </h1>
      ) : (
        <Skeleton style={{ width: size, height: size }} />
      )}
      <img
        title={title}
        alt={alt}
        onLoad={() => {
          setLoaded(true)
        }}
        width={loaded ? size : 0}
        height={loaded ? size : 0}
        src={src}
      />
    </CarouselImgBlockWrapper>
  )
}

export default memo(CarouselImgBlock)
