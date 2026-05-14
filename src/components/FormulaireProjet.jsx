import { useState } from 'react'

function FormulaireProjet(props) {
  const [nom, setNom] = useState("")
  const [budgetEstime, setBudgetEstime] = useState("")
  const [budgetReel, setBudgetReel] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (!nom || !budgetEstime || !budgetReel) {
      alert("Merci de remplir tous les champs")
      return
    }

    const nouveauProjet = {
      id: Date.now(),
      nom: nom,
      budgetEstime: Number(budgetEstime),
      budgetReel: Number(budgetReel),
    }

    props.onAjout(nouveauProjet)

    setNom("")
    setBudgetEstime("")
    setBudgetReel("")
  }

  return (
    <div style={{
      backgroundColor: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '1.5rem',
      marginBottom: '2rem'
    }}>
      <h2 style={{ margin: '0 0 1.25rem', fontSize: '1rem', color: '#1e293b' }}>
        Ajouter un projet
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#64748b', marginBottom: '4px' }}>
            Nom du projet
          </label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Ex : Système de guidage"
            style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              fontSize: '0.95rem',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#64748b', marginBottom: '4px' }}>
              Budget estimé (€)
            </label>
            <input
              type="number"
              value={budgetEstime}
              onChange={(e) => setBudgetEstime(e.target.value)}
              placeholder="Ex : 20000"
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                fontSize: '0.95rem',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#64748b', marginBottom: '4px' }}>
              Budget réel (€)
            </label>
            <input
              type="number"
              value={budgetReel}
              onChange={(e) => setBudgetReel(e.target.value)}
              placeholder="Ex : 18500"
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                fontSize: '0.95rem',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#1e293b',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            padding: '0.6rem 1.5rem',
            fontSize: '0.95rem',
            cursor: 'pointer'
          }}
        >
          Ajouter le projet
        </button>
      </form>
    </div>
  )
}

export default FormulaireProjet