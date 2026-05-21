import React from 'react';

export default function ResultScreen({ navigation, route }) {
  const { resultado, imagenUri } = route.params;

  return (
    <div style={css.page}>
      <div style={css.inner}>

        <p style={css.titulo}>📊 Resultado del Diagnóstico</p>

        {imagenUri && (
          <img src={imagenUri} style={css.imagen} alt="hoja analizada" />
        )}

        <div style={{ ...css.card, borderColor: resultado.color }}>
          <p style={css.cardEmoji}>{resultado.emoji}</p>
          <p style={{ ...css.cardEnfermedad, color: resultado.color }}>
            {resultado.enfermedad}
          </p>
          <p style={css.cardLabel}>Nivel de confianza del modelo:</p>
          <div style={css.barraFondo}>
            <div style={{
              ...css.barraRelleno,
              width: `${resultado.confianza}%`,
              backgroundColor: resultado.color
            }} />
          </div>
          <p style={{ ...css.cardPorcentaje, color: resultado.color }}>
            {resultado.confianza}%
          </p>
          <p style={css.cardDesc}>{resultado.descripcion}</p>
        </div>

        <div style={css.urgencia}>
          <p style={css.urgenciaTexto}>⚠️ {resultado.urgencia}</p>
        </div>

        <div style={css.recsBox}>
          <p style={css.recsTitulo}>📋 Recomendaciones Técnicas</p>
          {resultado.recomendaciones.map((rec, i) => (
            <div key={i} style={css.recFila}>
              <span style={css.recNum}>{i + 1}.</span>
              <span style={css.recTexto}>{rec}</span>
            </div>
          ))}
        </div>

        <div style={css.meta}>
          <p style={css.metaTexto}>📍 Zona: Minca, Magdalena, Colombia</p>
          <p style={css.metaTexto}>🕐 {new Date().toLocaleString('es-CO')}</p>
          <p style={css.metaTexto}>🔒 Procesado 100% offline</p>
        </div>

        <button style={css.btnVerde} onClick={() => navigation.navigate('Home')}>
          🌿 Nuevo Diagnóstico
        </button>

        <button style={css.btnGris} onClick={() => navigation.navigate('Camera')}>
          ← Tomar otra foto
        </button>

      </div>
    </div>
  );
}

const css = {
  page: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: '#1a2e1a',
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
  },
  inner: {
    padding: '24px',
    maxWidth: '680px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '60px',
  },
  titulo: {
    fontSize: '22px', fontWeight: 'bold', color: '#7ed957',
    marginBottom: '16px', marginTop: '24px', textAlign: 'center',
  },
  imagen: {
    width: '100%', height: '200px', objectFit: 'cover',
    borderRadius: '16px', marginBottom: '20px',
    border: '2px solid #4a7a4a',
  },
  card: {
    backgroundColor: '#2d4a2d', borderRadius: '16px', padding: '20px',
    width: '100%', textAlign: 'center', marginBottom: '16px',
    border: '2px solid', boxSizing: 'border-box',
  },
  cardEmoji: { fontSize: '48px', margin: '0 0 8px 0' },
  cardEnfermedad: { fontSize: '24px', fontWeight: 'bold', margin: '0 0 12px 0' },
  cardLabel: { color: '#a8d5a2', fontSize: '12px', margin: '0 0 8px 0' },
  barraFondo: {
    width: '100%', height: '12px', backgroundColor: '#1a2e1a',
    borderRadius: '6px', marginBottom: '6px',
  },
  barraRelleno: { height: '12px', borderRadius: '6px' },
  cardPorcentaje: { fontSize: '28px', fontWeight: 'bold', margin: '4px 0 12px 0' },
  cardDesc: { color: '#c8e6c9', fontSize: '13px', lineHeight: '20px', margin: 0 },
  urgencia: {
    backgroundColor: '#3a1a1a', borderRadius: '12px', padding: '12px',
    width: '100%', marginBottom: '16px', border: '1px solid #FF6B35',
    boxSizing: 'border-box',
  },
  urgenciaTexto: { color: '#FF6B35', fontWeight: 'bold', fontSize: '13px', margin: 0, textAlign: 'center' },
  recsBox: {
    backgroundColor: '#2d4a2d', borderRadius: '16px', padding: '16px',
    width: '100%', marginBottom: '16px', boxSizing: 'border-box',
  },
  recsTitulo: { color: '#7ed957', fontWeight: 'bold', fontSize: '16px', marginTop: 0, marginBottom: '12px' },
  recFila: { display: 'flex', marginBottom: '10px', alignItems: 'flex-start' },
  recNum: { color: '#7ed957', fontWeight: 'bold', marginRight: '8px', fontSize: '13px', flexShrink: 0 },
  recTexto: { color: '#c8e6c9', fontSize: '13px', lineHeight: '18px' },
  meta: {
    backgroundColor: '#1e3a1e', borderRadius: '12px', padding: '14px',
    width: '100%', marginBottom: '20px', boxSizing: 'border-box',
  },
  metaTexto: { color: '#5a8a5a', fontSize: '12px', margin: '0 0 4px 0' },
  btnVerde: {
    backgroundColor: '#7ed957', border: 'none', borderRadius: '25px',
    padding: '14px 32px', width: '100%', cursor: 'pointer',
    fontSize: '16px', fontWeight: 'bold', color: '#1a2e1a',
    marginBottom: '12px', boxSizing: 'border-box',
  },
  btnGris: {
    backgroundColor: 'transparent', border: 'none',
    cursor: 'pointer', color: '#5a8a5a', fontSize: '14px', marginBottom: '20px',
  },
};