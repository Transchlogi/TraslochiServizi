"use client";
import React from "react";

const HeroSection = () => {
  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        color: "black",
        height: "300px", // Matches the height of the hero image
        backgroundImage: "url('/images/hero-image.jpeg')",
        backgroundSize: "contain", // Ensure the image fits within the container
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "8px",
        overflow: "hidden", // Ensures the overlay stays within bounds
      }}
    >
      {/* Black Overlay - Dynamically Matches Image Size */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "0%",
          height: "0%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black overlay
          zIndex: 1,
        }}
      ></div>

      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2, // Ensures the content appears above the overlay
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "47%",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "0.9rem", // Smaller font size for the title
            margin: "5px 0",
          }}
        >
          SVUOTATUTTO i più ECONOMICI SGOMBERI
        </h1>
        <p
          style={{
            fontSize: "0.7rem", // Smaller font size for the description
            margin: "5px 0",
          }}
        >
          7 giorni su 7 - Concedici la fiducia e lascia il resto a noi.
        </p>
        <a
          href="tel:+393930422145"
          style={{
            textDecoration: "none",
            backgroundColor: "#008cba",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "0.6rem", // Smaller font size for the button
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#005f8d";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#008cba";
          }}
        >
          Contattaci Ora
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
