# url-to-file

A utility to convert url to file.

## Install

Install via npm or yarn.

```bash
npm i -D url-to-file
yarn add url-to-file
```

## API

### fetchFile

Fetch an url and return a File object.

```javascript
import { fetchFile } from 'url-to-file'

const file = await fetchFile('https://picsum.photos/200/300', 'image.png', {
   type: 'image/png',
})
```
