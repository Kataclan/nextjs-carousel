export const mockImageBlocks = [
  {
    title: 'First Block',
    images: [
      'https://picsum.photos/1301',
      'https://picsum.photos/1302',
      'https://picsum.photos/1303',
      'https://picsum.photos/1304',
    ],
  },
  {
    title: 'Second Block',
    images: [
      'https://picsum.photos/1305',
      'https://picsum.photos/1306',
      'https://picsum.photos/1307',
      'https://picsum.photos/1308',
    ],
  },
  {
    title: 'Third Block',
    images: [
      'https://picsum.photos/1309',
      'https://picsum.photos/1310',
      'https://picsum.photos/1311',
      'https://picsum.photos/1312',
    ],
  },
  {
    title: 'Fourth Block',
    images: [
      'https://picsum.photos/1313',
      'https://picsum.photos/1314',
      'https://picsum.photos/1315',
      'https://picsum.photos/1316',
    ],
  },
]

export const mockImageSrc = [
  'https://picsum.photos/1',
  'https://picsum.photos/2',
  'https://picsum.photos/3',
  'https://picsum.photos/4',
]

export const mockImgSize = 300
export const mockNSlides = 4
export const mockSlideLabels = [
  'carousel-slide-0',
  'carousel-slide-1',
  'carousel-slide-2',
  'carousel-slide-3',
]

export const mockImageTitlesSlide1 = mockImageBlocks.map(
  (block) => `Slide 1 - ${block.title}`
)

export const mockImageTitlesSlide2 = mockImageBlocks.map(
  (block) => `Slide 2 - ${block.title}`
)

export const mockImageTitlesSlide3 = mockImageBlocks.map(
  (block) => `Slide 3 - ${block.title}`
)

export const mockImageTitlesSlide4 = mockImageBlocks.map(
  (block) => `Slide 4 - ${block.title}`
)
