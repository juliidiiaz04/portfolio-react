import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#1a0d3f', 
      color: '#d8c3fc', 
      textAlign: 'center',
      padding: '2rem 1rem',
      marginTop: '3rem',
      boxShadow: '0 -4px 10px rgba(216, 195, 252, 0.3)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    text: {
      margin: '0 0 1rem',
      fontSize: '0.9rem',
      fontWeight: '600',
    },
    socials: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
    },
    link: {
      color: '#b39ddb', 
      textDecoration: 'none',
      fontWeight: '700',
      transition: 'color 0.3s ease',
    },
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2025 Julieta Díaz - Todos los derechos reservados</p>
      <div style={styles.socials}>
        <a
          href="https://github.com/juliidiiaz04"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
          onMouseOver={e => (e.currentTarget.style.color = '#d8c3fc')} // lila claro hover
          onMouseOut={e => (e.currentTarget.style.color = '#b39ddb')}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/julieta-camila-diaz-392b0236a/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
          onMouseOver={e => (e.currentTarget.style.color = '#d8c3fc')}
          onMouseOut={e => (e.currentTarget.style.color = '#b39ddb')}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;