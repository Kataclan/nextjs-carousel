# NextJS Carousel

A Carousel React component in a Next JS App.

## Preview

Preview the example live on [Vercel](http://nextjs-carousel.vercel.app/):

## How to run

Install the app with npm `npm install` or yarn `yarn`

Execute the app in dev mode:

```bash
yarn dev
# or
npm run dev
```

Execute tests:

```bash
yarn test
# or
npm run tests
```

## Usage

```js
<Carousel
  nSlides={4}
  imgBlocks={[
    {
      title: 'Block 1',
      images: [
        'https://picsum.photos/1305',
        'https://picsum.photos/1306',
        'https://picsum.photos/1307',
        'https://picsum.photos/1308',
      ],
    },
  ]}
  imgSize={200}
  wrapperStyle={{ marginBottom: 24 }}
  width={300}
/>
```

## Component Properties

- `nSlides` Number of Carousel slides
- `imgBlocks` Array of `ImageBlock` objects. For each object it will render an image in each slide
- `imgSize` Size of the images (they are square for now)
- `wrapperStyle` Style object for wrapper container (optional)
- `width` Width of the Slider. By default, it is [`nBlocks * imgSize`]

##### LICENSE: [MIT](/LICENSE)

[nextjs-carousel]: https://github.com/Kataclan/nextjs-carousel
