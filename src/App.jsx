import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/Header'
import CarteProjet from './components/CarteProjet'
import KPIs from './components/KPIs'
import FormulaireProjet from './components/FormulaireProjet'
import Graphiques from './components/Graphiques'

import './App.css'


function App() {

  const [projets, setProjets] = useState(() => {
    const donneesSauvegardees = localStorage.getItem('projets')
    if (donneesSauvegardees) {
      return JSON.parse(donneesSauvegardees)
    }
    return [
      { id: 1, nom: "Système de navigation", budgetEstime: 45000, budgetReel: 42000 },
      { id: 2, nom: "Interface de contrôle", budgetEstime: 28000, budgetReel: 31500 },
      { id: 3, nom: "Module de communication", budgetEstime: 15000, budgetReel: 15000 },
    ]
  })

  useEffect(() => {
    localStorage.setItem('projets', JSON.stringify(projets))
  }, [projets])

  function ajouterProjet(nouveauProjet) {
    setProjets([...projets, nouveauProjet])
  }

  function supprimerProjet(id) {
    setProjets(projets.filter(projet => projet.id !== id))
  }

  function modifyProject(id, updatedProject) {
    setProjets(projets.map(projet => projet.id === id ? { ...projet, ...updatedProject } : projet))
  }


  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <Header />
      <main style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto' }}>

        <KPIs projets={projets} />

        <Graphiques projets={projets} />

        <FormulaireProjet onAjout={ajouterProjet} />

        <h2 style={{ fontSize: '1rem', color: '#1e293b', margin: '0 0 1rem' }}>
          Liste des projets
        </h2>

        {projets.length === 0 ? (
          <div style={{
            backgroundColor: 'white',
            border: '1px dashed #e2e8f0',
            borderRadius: '8px',
            padding: '3rem',
            textAlign: 'center',
            color: '#94a3b8'
          }}>
            <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📋</p>
            <p style={{ fontWeight: '500', marginBottom: '4px' }}>Aucun projet pour l'instant</p>
            <p style={{ fontSize: '0.85rem' }}>Utilisez le formulaire ci-dessus pour ajouter votre premier projet</p>
          </div>
        ) : (
          projets.map((projet) => (
            <CarteProjet
              key={projet.id}
              nom={projet.nom}
              budgetEstime={projet.budgetEstime}
              budgetReel={projet.budgetReel}
              onSupprimer={() => supprimerProjet(projet.id)}
              onModifier={modifyProject}
            />
          ))
        )}

      </main>
    </div>
  )
}

export default App