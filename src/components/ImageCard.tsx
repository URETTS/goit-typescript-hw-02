import React from "react";

interface ImageCardProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, onClick }) => {
  return <img src={src} alt={alt} onClick={onClick} style={{ cursor: "pointer" }} />;
};

export default ImageCard;
