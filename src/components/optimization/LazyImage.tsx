import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface LazyImageProps {
  src: string;
  alt: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => {
  return <LazyLoadImage src={src} alt={alt} />;
};

export default LazyImage;
