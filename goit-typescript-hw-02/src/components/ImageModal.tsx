import React, { useEffect } from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
}

interface ImageModalProps {
  image: UnsplashImage | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.content} onClick={onClose}>
        <img
          src={image?.urls?.regular}
          alt={image?.alt_description || "Image"}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
