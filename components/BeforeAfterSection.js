"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BeforeAfterSection = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Image pairs (Before and After for each group)
  const imagePairs = [
    { before: "/images/before1.jpeg", after: "/images/after1.jpeg" },
    { before: "/images/before2.jpeg", after: "/images/after2.jpeg" },
    { before: "/images/before3.jpeg", after: "/images/after3.jpeg" },
    { before: "/images/before4.jpeg", after: "/images/after4.jpeg" },
  ];

  return (
    <section
      style={{
        padding: "40px 20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        margin: "20px auto",
        maxWidth: "1200px",
      }}
    >
      <h2
        style={{
          color: "#008cba",
          fontSize: "2.5rem",
          marginBottom: "20px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Prima e Dopo
      </h2>
      <p style={{ color: "#555", marginBottom: "20px", fontSize: "1.2rem", textAlign: "center" }}>
        Guarda il nostro lavoro trasformare spazi prima e dopo il nostro intervento.
      </p>

      <Slider {...sliderSettings}>
        {imagePairs.map((pair, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              padding: "20px",
            }}
          >
            {/* Before Image */}
            <div
              style={{
                flex: "1",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3 style={{ color: "#008cba", marginBottom: "10px" }}>Prima</h3>
              <img
                src={pair.before}
                alt={`Before ${index + 1}`}
                style={{
                  width: "90%",
                  maxWidth: "300px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
            </div>

            {/* Arrow in the middle */}
            <div
              style={{
                flex: "0.2",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "#008cba",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
              >
                →
              </span>
            </div>

            {/* After Image */}
            <div
              style={{
                flex: "1",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3 style={{ color: "#008cba", marginBottom: "10px" }}>Dopo</h3>
              <img
                src={pair.after}
                alt={`After ${index + 1}`}
                style={{
                  width: "90%",
                  maxWidth: "300px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BeforeAfterSection;
