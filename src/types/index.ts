export interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  user: {
    name: string;
  };
}


export interface UnsplashAPIResponse {
  results: UnsplashImage[];
  total: number;
  total_pages: number;
}