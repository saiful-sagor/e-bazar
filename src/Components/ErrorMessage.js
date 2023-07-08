import React from "react";

const ErrorMessage = (props) => {
  return (
    <div className="bg-red-500 text-white p-4 rounded-md">
      <p>{props.message}</p>
    </div>
  );
};

export default ErrorMessage;
