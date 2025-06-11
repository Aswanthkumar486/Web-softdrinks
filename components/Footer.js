import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ footer, contact }) {
  if (!footer || !contact) return null;

  return (
    <footer style={{ backgroundColor: '#0f0828', color: '#fff', padding: '3rem 1rem' }} id='contact'>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top Section: Logo + Links */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            gap: '2rem',
          }}
        >
          {/* Left: Logo + Motto */}
          <div style={{ flex: '1 1 250px' }}>
            {footer.logo && (
              <Image
                src={footer.logo}
                width={120}
                height={60}
                alt="Logo"
                unoptimized
              />
            )}
            <p style={{ marginTop: '1rem', opacity: 0.8 }}>{footer.motto}</p>
          </div>

          {/* Right: Links */}
          <div style={{ flex: '2 1 400px', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {footer.sections?.map((section, index) => (
              <div key={index}>
                <h4 style={{ marginBottom: '1rem' }}>{section.title}</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {section.links.map((link, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>
                      <Link href={link.id} style={{ color: '#fff', textDecoration: 'none' }}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div style={{ marginTop: '2rem', background: '#1a0c3a', padding: '1.5rem', borderRadius: '8px' }}>
          <h5 style={{ marginBottom: '1rem' }}>Contact Information</h5>
          <p style={{ margin: 0, lineHeight: '1.6' }}>
            <strong>Address:</strong> {contact.address}<br />
            <strong>Phone:</strong> {contact.phone}<br />
            <strong>Email:</strong> {contact.email}
          </p>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            marginTop: '2rem',
            textAlign: 'center',
            fontSize: '0.8rem',
            opacity: 0.6,
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: '1rem',
          }}
        >
          <p>{footer?.copyright}</p>
          <p>{footer?.legal}</p>
        </div>
      </div>
    </footer>
  );
}
