import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { dpr } from '@cloudinary/url-gen/actions/delivery';

export const cld = new Cloudinary({
  cloud: {
    cloudName: 'dhap6yrcb',
  },
});

export const getImageUrlResized = (
  publicId,
  { aspectRatio = 'auto', width = 'auto', pixelRatio = 1 } = {}
) =>
  cld
    .image(publicId)
    .resize(fill().width(width).aspectRatio(aspectRatio))
    .format('auto')
    .delivery(dpr(pixelRatio))
    .toURL();
