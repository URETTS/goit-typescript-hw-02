import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div style={{ textAlign: "center", color: "red", marginTop: "20px" }}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
