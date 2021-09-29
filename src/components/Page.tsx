import styled from 'styled-components'
import Head from 'next/head'

const PageWrapper = styled.div`
  min-height: 100vh;
  display: block;
`

const Page: React.FC<{ title?: string }> = ({ title, children }) => (
  <PageWrapper>
    <Head>
      <title>{title || 'NextJS Carousel'}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
  </PageWrapper>
)

export default Page
