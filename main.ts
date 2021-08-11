export type FetchFileOptions = FilePropertyBag;

/**
 * Fetch an url and return a File object.
 *
 * ```javascript
 * import { fetchFile } from 'url-to-file'
 *
 * const file = await fetchFile('https://picsum.photos/200/300', 'image.png', {
 *   type: 'image/png',
 * })
 * ```
 */
export const fetchFile = (
  src: string,
  fileName: string,
  options: FetchFileOptions,
): Promise<File> => fetch(src)
  .then((res) => res.arrayBuffer())
  .then((buf) => new File([buf], fileName, options));
