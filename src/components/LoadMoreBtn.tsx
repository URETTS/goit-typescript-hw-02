import React from "react";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        onClick={onClick}
        style={{
          padding: "10px 20px",
          margin: "10px",
          fontSize: "16px",
          cursor: "pointer",
          background: "blue",
          color: "white",
          border: "none",
        }}
      >
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
