"use client";

const Services = () => {
  return (
    <section
      style={{
        padding: '40px 20px',
        backgroundColor: '#f0f8ff',
        borderRadius: '10px',
        margin: '20px auto',
        maxWidth: '800px', // Reduce the width for better stacking
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          color: '#008cba',
          fontSize: '2.5rem',
          marginBottom: '40px',
          fontWeight: 'bold',
        }}
      >
        I Nostri Servizi
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column', // Stack items vertically
          gap: '20px', // Add spacing between each service
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            textAlign: 'center',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 style={{ color: '#008cba', marginBottom: '10px' }}>SGOMBERI</h3>
          <p style={{ color: '#555', fontSize: '1rem' }}>
            Appartamenti, uffici, cantine, garage, negozi e locali in generale.
          </p>
          <p style={{ color: '#555', fontSize: '1rem', marginTop: '10px' }}>
            <strong>In alcuni casi offro anche trasloco gratuito.</strong>
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            textAlign: 'center',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 style={{ color: '#008cba', marginBottom: '10px' }}>
            MONTAGGIO e SMONTAGGIO
          </h3>
          <p style={{ color: '#555', fontSize: '1rem' }}>
            Imballaggio mobili, disimballo e montaggio nella nuova location.
          </p>
          <p style={{ color: '#555', fontSize: '1rem', marginTop: '10px' }}>
            <strong>Installazione porte e finestre.</strong>
          </p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            textAlign: 'center',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 style={{ color: '#008cba', marginBottom: '10px' }}>
            MANUTENZIONE GENERALE
          </h3>
          <p style={{ color: '#555', fontSize: '1rem', marginBottom: '10px' }}>
            Cartongesso, pareti divisorie, imbiancatura.
          </p>
          <p style={{ color: '#555', fontSize: '1rem', marginBottom: '10px' }}>
            <strong>Ristrutturazione in Marmo e del Parquet</strong>
          </p>
          <p style={{ color: '#555', fontSize: '1rem', marginBottom: '10px' }}>
            <strong>Intonachino</strong>
          </p>
          <p style={{ color: '#555', fontSize: '1rem' }}>
            <strong>Rasatura parete</strong>
          </p>
        </div>

        {/* Card 4 */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            textAlign: 'center',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 style={{ color: '#008cba', marginBottom: '10px' }}>
            PULIZIA LOCALI e GIARDINI
          </h3>
          <p style={{ color: '#555', fontSize: '1rem' }}>
            Pulizia professionale di locali e giardini.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
