"use client";
import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "#007BBA", // Blue background
        display: "flex",
        justifyContent: "center", // Center the content
        alignItems: "center", // Vertically center the content
        height: "60px", // Adjust the height as needed
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Optional shadow for styling
      }}
    >
      <h1
        style={{
          fontSize: "1.5rem",
          color: "white",
          fontWeight: "bold",
          margin: 0,
        }}
      >
        Traslochi Servizi
      </h1>
    </div>
  );
};

export default Navbar;
