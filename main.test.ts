import { enableFetchMocks } from 'jest-fetch-mock'
import { File as MockFile } from 'web-file-polyfill'
import { fetchFile } from "./main";

enableFetchMocks();
global.File = MockFile;

describe('fetchFile', () => {
  it('should fetch the url as a File', async () => {
    const file = await fetchFile('https://picsum.photos/200/300', 'image.png', {
      type: 'image/png',
    })
    expect(file instanceof File).toBeTruthy();
  });
  it('should fetch the url with the passed fileName', async () => {
    const file = await fetchFile('https://picsum.photos/200/300', 'image.png', {
      type: 'image/png',
    })
    expect(file.name).toBe('image.png');
  });
  it('should fetch the url with the given type', async () => {
    const file = await fetchFile('https://picsum.photos/200/300', 'image.png', {
      type: 'image/png',
    })
    expect(file.type).toBe('image/png');
  });
});
