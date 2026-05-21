import React from 'react';

function CTA() {
  const styles = {
    section: {
      padding: '50px 0',
      backgroundColor: '#ffffff',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#333',
    },
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '0 20px',
    },
    heading: {
      color: '#2b59c3', 
      fontSize: '1.8rem',
      marginBottom: '10px',
      textAlign: 'left', // Shifted to the left
    },
    subText: {
      fontSize: '0.95rem',
      color: '#666',
      lineHeight: '1.5',
      marginBottom: '25px',
      textAlign: 'left', // Shifted to the left
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '10px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
      border: '1px solid #e5e7eb',
    },
    caption: {
      textAlign: 'left', // Shifted to the left
      fontWeight: 'bold',
      color: '#1a3a8a',
      padding: '15px 0',
      fontSize: '0.9rem',
    },
    headerRow: {
      backgroundColor: '#2b59c3',
      color: 'white',
      fontWeight: '600',
      fontSize: '0.85rem',
      textAlign: 'center',
      border: '1px solid #ffffff',
      padding: '15px',
    },
    categoryCell: {
      backgroundColor: '#dbeafe', 
      color: '#1e3a8a',
      fontWeight: 'bold',
      fontSize: '0.85rem',
      textAlign: 'center',
      border: '1px solid #bfdbfe',
      padding: '12px',
    },
    dataCell: {
      padding: '12px',
      textAlign: 'center',
      border: '1px solid #e5e7eb',
      fontSize: '0.9rem',
      backgroundColor: '#ffffff',
    }
  };

  return (
    <section style={styles.section} id="Planetary-Facts">
      <div style={styles.container}>
        <h2 style={styles.heading}>Planetary Facts at a Glance</h2>

        <p style={styles.subText}>
          Below is a comparative table of major planets in our solar system.
          The data highlights key physical properties used by astronomers and
          researchers worldwide.
        </p>

        <div>
          <table style={styles.table}>
            <caption style={styles.caption}>
              Data about the planets of our solar system (Planetary facts taken
              from NASA)
            </caption>

            <tbody>
              <tr>
                <th colSpan="4" style={styles.headerRow}></th>
                <th colSpan="2" style={styles.headerRow}>Name</th>
                <th colSpan="2" style={styles.headerRow}>Mass (10<sup>24</sup>kg)</th>
                <th colSpan="2" style={styles.headerRow}>Diameter (km)</th>
                <th colSpan="2" style={styles.headerRow}>Density (kg/m<sup>3</sup>)</th>
                <th colSpan="2" style={styles.headerRow}>Gravity (m/s<sup>2</sup>)</th>
              </tr>

              <tr>
                <th colSpan="4" rowSpan="4" style={styles.categoryCell}>Terrestrial Planets</th>
                <td colSpan="2" style={styles.dataCell}>Mercury</td>
                <td colSpan="2" style={styles.dataCell}>0.330</td>
                <td colSpan="2" style={styles.dataCell}>4,879</td>
                <td colSpan="2" style={styles.dataCell}>5427</td>
                <td colSpan="2" style={styles.dataCell}>3.7</td>
              </tr>

              <tr>
                <td colSpan="2" style={styles.dataCell}>Venus</td>
                <td colSpan="2" style={styles.dataCell}>4.87</td>
                <td colSpan="2" style={styles.dataCell}>12,104</td>
                <td colSpan="2" style={styles.dataCell}>5243</td>
                <td colSpan="2" style={styles.dataCell}>8.9</td>
              </tr>

              <tr>
                <td colSpan="2" style={styles.dataCell}>Earth</td>
                <td colSpan="2" style={styles.dataCell}>5.97</td>
                <td colSpan="2" style={styles.dataCell}>12,756</td>
                <td colSpan="2" style={styles.dataCell}>5514</td>
                <td colSpan="2" style={styles.dataCell}>9.8</td>
              </tr>

              <tr>
                <td colSpan="2" style={styles.dataCell}>Mars</td>
                <td colSpan="2" style={styles.dataCell}>0.642</td>
                <td colSpan="2" style={styles.dataCell}>6,792</td>
                <td colSpan="2" style={styles.dataCell}>3933</td>
                <td colSpan="2" style={styles.dataCell}>3.7</td>
              </tr>

              <tr>
                <th colSpan="2" rowSpan="4" style={styles.categoryCell}>Jovian Planets</th>
                <th colSpan="2" rowSpan="2" style={styles.categoryCell}>Gas Giants</th>
                <td colSpan="2" style={styles.dataCell}>Jupiter</td>
                <td colSpan="2" style={styles.dataCell}>1898</td>
                <td colSpan="2" style={styles.dataCell}>142,984</td>
                <td colSpan="2" style={styles.dataCell}>1326</td>
                <td colSpan="2" style={styles.dataCell}>23.1</td>
              </tr>

              <tr>
                <td colSpan="2" style={styles.dataCell}>Saturn</td>
                <td colSpan="2" style={styles.dataCell}>568</td>
                <td colSpan="2" style={styles.dataCell}>120,536</td>
                <td colSpan="2" style={styles.dataCell}>687</td>
                <td colSpan="2" style={styles.dataCell}>9.0</td>
              </tr>

              <tr>
                <th colSpan="2" rowSpan="2" style={styles.categoryCell}>Ice Giants</th>
                <td colSpan="2" style={styles.dataCell}>Uranus</td>
                <td colSpan="2" style={styles.dataCell}>86.8</td>
                <td colSpan="2" style={styles.dataCell}>51,118</td>
                <td colSpan="2" style={styles.dataCell}>1271</td>
                <td colSpan="2" style={styles.dataCell}>8.7</td>
              </tr>

              <tr>
                <td colSpan="2" style={styles.dataCell}>Neptune</td>
                <td colSpan="2" style={styles.dataCell}>102</td>
                <td colSpan="2" style={styles.dataCell}>49,528</td>
                <td colSpan="2" style={styles.dataCell}>1638</td>
                <td colSpan="2" style={styles.dataCell}>11.0</td>
              </tr>

              <tr>
                <th colSpan="4" style={styles.categoryCell}>Dwarf Planets</th>
                <td colSpan="2" style={styles.dataCell}>Pluto</td>
                <td colSpan="2" style={styles.dataCell}>0.0146</td>
                <td colSpan="2" style={styles.dataCell}>2,370</td>
                <td colSpan="2" style={styles.dataCell}>2095</td>
                <td colSpan="2" style={styles.dataCell}>0.7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default CTA;