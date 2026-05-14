function KPIs(props) {
    const totalEstime = props.projets.reduce((total, p) => total + p.budgetEstime, 0)
    const totalReel = props.projets.reduce((total, p) => total + p.budgetReel, 0)
    const ecartTotal = totalReel - totalEstime
    const nbProjets = props.projets.length
    const nbDepasses = props.projets.filter(p => p.budgetReel > p.budgetEstime).length

    return (    
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
        }}>
        <div style={carteStyle}>
            <p style={labelStyle}>Projets suivis</p>
            <p style={valeurStyle('#1e293b')}>{nbProjets}</p>
        </div>

        <div style={carteStyle}>
            <p style={labelStyle}>Budget total estimé</p>
            <p style={valeurStyle('#1e293b')}>{totalEstime.toLocaleString()} €</p>
        </div>

        <div style={carteStyle}>
            <p style={labelStyle}>Budget total réel</p>
            <p style={valeurStyle('#1e293b')}>{totalReel.toLocaleString()} €</p>
        </div>

        <div style={carteStyle}>
            <p style={labelStyle}>Écart global</p>
            <p style={valeurStyle(ecartTotal > 0 ? '#ef4444' : '#22c55e')}>
                {ecartTotal > 0 ? '+' : ''}{ecartTotal.toLocaleString()} €
            </p>
        </div>

            <div style={carteStyle}>
                <p style={labelStyle}>Projets dépassés</p>
                <p style={valeurStyle(nbDepasses > 0 ? '#ef4444' : '#22c55e')}>
                    {nbDepasses} / {nbProjets}
                </p>
            </div>
        </div>
    )
}

const carteStyle = {
    backgroundColor: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '1.25rem',
}

const labelStyle = {
    margin: '0 0 8px',
    fontSize: '0.8rem',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
}

const valeurStyle = (couleur) => ({
    margin: 0,
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color: couleur  
})

export default KPIs