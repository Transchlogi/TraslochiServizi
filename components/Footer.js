"use client";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: "url('/images/footer-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        height: '250px',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      ></div>

      <div style={{ zIndex: 2, position: 'relative' }}>
        <p style={{ fontSize: '1rem', fontWeight: 'bold', margin: '10px 0' }}>
          &copy; 2024 Traslochi Servizi - Tutti i diritti riservati.
        </p>
        <p style={{ fontSize: '0.9rem', margin: '10px 0' }}>Telefono: +39 393 042 2145</p>
      </div>
    </footer>
  );
};

export default Footer;
