import { useState } from 'react';
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
import defaultImg from 'images/placeholder-image.svg';

const Image = ({
  publicId,
  alt,
  aspectRatio = '1',
  defaultImage = defaultImg,
}) => {
  const [isError, setIsError] = useState(false);
  const isRetina = useRetinaMediaQuery();

  const image = cld
    .image(publicId)
    .resize(fill().aspectRatio(aspectRatio))
    .format('auto')
    .delivery(dpr(isRetina ? 2 : 1));

  const handleError = () => {
    setIsError(true);
  };

  if (!isError || !publicId) {
    return (
      <img
        src={defaultImage}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    );
  }

  return (
    <AdvancedImage
      cldImg={image}
      plugins={[
        lazyload({ rootMargin: '200px' }),
        responsive(),
        placeholder({ mode: 'blur' }),
      ]}
      alt={alt}
      onError={handleError}
    />
  );
};

export default Image;
