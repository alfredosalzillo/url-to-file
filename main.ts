export type FetchFileOptions = FilePropertyBag;

export const fetchFile = (
  src: string,
  fileName: string,
  options: FetchFileOptions,
): Promise<File> => fetch(src)
  .then((res) => res.arrayBuffer())
  .then((buf) => new File([buf], fileName, options));
