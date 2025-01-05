export const metadata = {
  title: 'Translochi Servizi',
  description: 'SVUOTATUTTO i più ECONOMICI SGOMBERI, TRASLOCHI a VERONA e PROVINCIA',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        {children}

        {/* Pinned Buttons */}
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            zIndex: 1000, // Ensure buttons stay on top of all content
          }}
        >
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/3930422145" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#25D366',
              color: 'white',
              padding: '15px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <img
              src="/images/whatsapp-icon.png" // Add WhatsApp logo here
              alt="WhatsApp"
              style={{ width: '20px', height: '20px' }}
            />
          </a>

          {/* Phone Call Button */}
          <a
            href="tel:+393930422145" // Replace with your phone number
            style={{
              backgroundColor: '#34A853',
              color: 'white',
              padding: '15px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <img
              src="/images/phone-icon.png" // Add Phone Call logo here
              alt="Call"
              style={{ width: '20px', height: '20px' }}
            />
          </a>

          {/* Message Button */}
          <a
            href="sms:+393930422145" // Replace with your phone number for messaging
            style={{
              backgroundColor: '#0084FF',
              color: 'white',
              padding: '15px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <img
              src="/images/message-icon.png" // Add Message logo here
              alt="Message"
              style={{ width: '20px', height: '20px' }}
            />
          </a>
        </div>
      </body>
    </html>
  );
}
