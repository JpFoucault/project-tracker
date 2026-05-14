import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer
} from 'recharts'

function Graphiques(props) {
    const donnees = props.projets.map((p) => ({
        nom: p.nom.length > 15 ? p.nom.slice(0, 15) + '…' : p.nom,
        Estimé: p.budgetEstime,
        Réel: p.budgetReel,
    }))

    if (donnees.length === 0) {
        return (
            <div style={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '2rem',
                textAlign: 'center',
                color: '#94a3b8',
                marginBottom: '2rem'
            }}>
                Ajoutez des projets pour voir les graphiques
            </div>
        )
    }

    return (
        <div style={{
            backgroundColor: 'white',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem'
        }}>
            <h2 style={{ margin: '0 0 1.5rem', fontSize: '1rem', color: '#1e293b' }}>
                Budget estimé vs réel par projet
            </h2>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={donnees} margin={{ top: 5, right: 20, left: 20, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis
                        dataKey="nom"
                        tick={{ fontSize: 12, fill: '#64748b' }}
                        angle={-30}
                        textAnchor="end"
                    />
                    <YAxis
                        tick={{ fontSize: 12, fill: '#64748b' }}
                        tickFormatter={(v) => v.toLocaleString() + ' €'}
                    />
                    <Tooltip
                        formatter={(value) => value.toLocaleString() + ' €'}
                        contentStyle={{ borderRadius: '6px', border: '1px solid #e2e8f0' }}
                    />    
                    <Legend verticalAlign="top" />
                    <Bar dataKey="Estimé" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="Réel" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Graphiques