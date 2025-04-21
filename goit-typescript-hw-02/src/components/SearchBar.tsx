import styles from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import { useState, FormEvent, ChangeEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className={styles.form}>
        <button type="submit" className={styles.searchButton}>
          <CiSearch size={20} />
        </button>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </div>
  );
};

export default SearchBar;
