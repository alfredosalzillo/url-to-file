# url-to-file

![CI/CD](https://github.com/alfredosalzillo/url-to-file/workflows/CI/CD/badge.svg)
[![codecov](https://codecov.io/gh/alfredosalzillo/url-to-file/branch/master/graph/badge.svg)](https://codecov.io/gh/alfredosalzillo/url-to-file)
[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno&labelColor=black)](https://deno.land/x/url_to_file)
[![npm version](https://badge.fury.io/js/url-to-file.svg)](https://badge.fury.io/js/url-to-file)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A utility to convert url to file.

## Install

Install via npm or yarn.

```bash
npm i -D url-to-file
yarn add url-to-file
```

Use on Deno.

```javascript
import { fetchFile } from 'https://deno.land/x/url_to_file@v1.1.0/main.ts'

const file = await fetchFile('https://picsum.photos/200/300', 'image.png', {
   type: 'image/png',
})
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
