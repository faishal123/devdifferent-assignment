export type ImageType = {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string; // Optional, in case some properties do not have an alt text
};