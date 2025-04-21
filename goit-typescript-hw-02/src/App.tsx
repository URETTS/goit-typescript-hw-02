import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn";
import ImageModal from "./components/ImageModal";
import Modal from "react-modal";
import { UnsplashImage } from "./types";

Modal.setAppElement("#root");

const App = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(null);

  const handleSearch = (newQuery: string) => {
    if (!newQuery.trim()) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    fetchArticles(newQuery, 1);
  };
    
    const handleImageClick = (image: UnsplashImage) => {
  setSelectedImage(image);
};

  const fetchArticles = async (searchQuery: string, currentPage: number): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          query: searchQuery,
          per_page: 24,
          page: currentPage,
          client_id: "zJtwtnC_i3GAj7K0cudedkc__1neUQEIQPNqm2wsT0g",
        },
      });
      setImages((prevImages) => [...prevImages, ...response.data.results]);
    } catch (error) {
      console.error("Error fetching images:", error);
      setError("Ошибка загрузки изображений. Попытайтесь еще раз.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchArticles(query, nextPage);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

export default App;
