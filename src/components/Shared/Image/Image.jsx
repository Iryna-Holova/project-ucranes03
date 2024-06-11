import {
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
} from '@cloudinary/react';
import { dpr } from '@cloudinary/url-gen/actions/delivery';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { cld } from 'helpers/cloudinary';
import { useRetinaMediaQuery } from 'hooks/device-type';

const Image = ({ publicId, alt, aspectRatio = 'auto' }) => {
  const isRetina = useRetinaMediaQuery();

  const image = cld
    .image(publicId)
    .resize(fill().aspectRatio(aspectRatio))
    .format('auto')
    .delivery(dpr(isRetina ? 2 : 1));

  return (
    <AdvancedImage
      cldImg={image}
      plugins={[
        lazyload({ rootMargin: '200px' }),
        responsive(),
        placeholder({ mode: 'blur' }),
      ]}
      alt={alt}
    />
  );
};

export default Image;
