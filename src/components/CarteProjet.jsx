function CarteProjet(props) {
  const ecart = props.budgetReel - props.budgetEstime
  const depasse = ecart > 0

  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '1.25rem',
      marginBottom: '1rem',
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h2 style={{ margin: '0 0 0.75rem', fontSize: '1.1rem', color: '#1e293b' }}>
        {props.nom}
      </h2>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <div>
          <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>Budget estimé</p>
          <p style={{ margin: 0, fontWeight: 'bold', color: '#1e293b' }}>
            {props.budgetEstime.toLocaleString()} €
          </p>
        </div>
        <div>
          <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>Budget réel</p>
          <p style={{ margin: 0, fontWeight: 'bold', color: '#1e293b' }}>
            {props.budgetReel.toLocaleString()} €
          </p>
        </div>
        <div>
          <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>Écart</p>
          <p style={{ margin: 0, fontWeight: 'bold', color: depasse ? '#ef4444' : '#22c55e' }}>
            {depasse ? '+' : ''}{ecart.toLocaleString()} €
          </p>
        </div>
        <button
          onClick={props.onSupprimer}
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #fca5a5',
            borderRadius: '6px',
            padding: '0.4rem 0.75rem',
            color: '#ef4444',
            cursor: 'pointer',
            fontSize: '0.85rem'
          }}
        >
          Supprimer
        </button>
      </div>
    </div>
  )
}

export default CarteProjet