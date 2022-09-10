import Image, { ImageProps, StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

interface IProps extends ImageProps {
  src: string;
  fallbackSrc: StaticImageData;
  alt: string;
}

export default function ImageFallback({
  src,
  fallbackSrc,
  alt,
  ...rest
}: IProps) {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt || 'fallback'}
      onLoadingComplete={result => {
        if (result.naturalWidth === 0) {
          // Broken image
          setImgSrc(fallbackSrc);
        }
      }}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}
