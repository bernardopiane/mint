import React from "react";

export default function Button({ text }) {
  return (
    <button
      className="btn btn-warning px-4 py-2"
      style={{
        textTransform: "uppercase",
        // backgroundColor: "#ffe100",
        // borderColor: "#ffe100",
        borderRadius: '0px',
        fontWeight: 'bold'
      }}
    >
      {text}
    </button>
  );
}
