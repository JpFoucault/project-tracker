function CarteProjet(props) {
  const ecart = props.budgetReel - props.budgetEstime
  const depasse = ecart > 0
  const pourcentage = Math.round((props.budgetReel / props.budgetEstime) * 100)

  const statut = pourcentage <= 90
    ? { label: 'Sous budget', couleur: '#22c55e', fond: '#f0fdf4' }
    : pourcentage <= 100
    ? { label: 'Dans les clous', couleur: '#3b82f6', fond: '#eff6ff' }
    : { label: 'Dépassement', couleur: '#ef4444', fond: '#fef2f2' }

  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '1.25rem',
      marginBottom: '1rem',
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <h2 style={{ margin: 0, fontSize: '1.1rem', color: '#1e293b' }}>
          {props.nom}
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            backgroundColor: statut.fond,
            color: statut.couleur,
            fontSize: '0.75rem',
            fontWeight: '500',
            padding: '3px 10px',
            borderRadius: '99px',
          }}>
            {statut.label}
          </span>
          <button
            onClick={props.onSupprimer}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #fca5a5',
              borderRadius: '6px',
              padding: '3px 10px',
              color: '#ef4444',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            Supprimer
          </button>
          <button
            onClick={props.onModifier}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #0427ebff',
              borderRadius: '6px',
              padding: '3px 10px',
              color: '#3586d6ff',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            Modifier
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
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
        <div>
          <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>Consommé</p>
          <p style={{ margin: 0, fontWeight: 'bold', color: '#1e293b' }}>
            {pourcentage} %
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: '#f1f5f9', borderRadius: '99px', height: '6px', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${Math.min(pourcentage, 100)}%`,
          backgroundColor: statut.couleur,
          borderRadius: '99px',
          transition: 'width 0.3s ease'
        }} />
      </div>
    </div>
  )
}

export default CarteProjet