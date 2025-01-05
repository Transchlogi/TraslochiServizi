"use client";

const Map = () => {
  return (
    <section
      style={{
        padding: '40px 20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        margin: '20px auto',
        maxWidth: '1200px',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          color: '#008cba',
          fontSize: '2.5rem',
          marginBottom: '20px',
          fontWeight: 'bold',
        }}
      >
        Dove Operiamo
      </h2>
      <p style={{ color: '#555', marginBottom: '20px' }}>
      Traslochi Servizi opera principalmente a Verona e nelle zone limitrofe (San Giovanni, Zevio, San Massimo, Caldiero, San Bonifacio, Riccione, Garda). Scopri di più sulla nostra area di servizio!
      </p>
      <div
        style={{
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d670163.4965447576!2d10.569068746153375!3d45.45205085388872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f5eb347fe5c5b%3A0x307098715907ed0!2sProvince%20of%20Verona%2C%20Italy!5e0!3m2!1sen!2s!4v1736015341344!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
