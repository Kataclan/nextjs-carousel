import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import styled from 'styled-components'
import carouselData from '../data/carousel.json'
import { ImgBlock } from '../@types'
import { Carousel, Page } from '../components'

interface PageProps {
  carouselBlocks: ImgBlock[]
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const carouselBlocks: ImgBlock[] = carouselData.map((block) => ({
    title: block.title,
    images: block.images,
  }))

  return {
    props: {
      carouselBlocks,
    },
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

const Home: NextPage<PageProps> = ({
  carouselBlocks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page>
      <Container>
        <h1>NextJS Carousel</h1>

        <h2>4 slides, 4 blocks</h2>
        <Carousel
          nSlides={4}
          imgBlocks={carouselBlocks.slice(0, 4)}
          imgSize={200}
          wrapperStyle={{ marginBottom: 24 }}
        />

        <h2>6 slides, 8 blocks</h2>
        <Carousel
          nSlides={6}
          imgBlocks={carouselBlocks}
          imgSize={100}
          wrapperStyle={{ marginBottom: 24 }}
        />

        <h2>Custom width</h2>
        <Carousel
          nSlides={4}
          imgBlocks={carouselBlocks.slice(0, 3)}
          imgSize={200}
          width={900}
          wrapperStyle={{ marginBottom: 24 }}
        />
      </Container>
    </Page>
  )
}

export default Home
