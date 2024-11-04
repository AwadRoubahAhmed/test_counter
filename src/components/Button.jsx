import React from "react";

function Button({ handelClick, text }) {
  return (
    <div>
      <button
        onClick={handelClick}
        className="my-2 p-2 bg-gray-900 hover:bg-gray-700 rounded-md font-mono text-base ml-auto"
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
