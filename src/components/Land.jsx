import React from 'react'
import '../styles/Land.css'

const Land = () => {
  return (
     <div className="app">
      <header className="header">
        <div className="logo">🎵 MDJ</div>
        <nav className="nav">
          <a href="#">Início</a>
          <a href="#">Sobre</a>
          <a href="#">Apresentações</a>
          <a href="#">Formulário</a>
        </nav>
      </header>

      <section className="center-picture">
        <h1>Início</h1>
        <img
          src="https://images.unsplash.com/photo-1518976024611-488d8b6e1c9c?auto=format&fit=crop&w=800&q=80"
          alt="Festa / DJ"
        />
        <div className="title">MARQUIM DJ</div>
        <div className="slogan">"Conectando pessoas através da música!"</div>
      </section>
      
      <div className='about'>
        <section className='about-picture'>
            <div className='about-title'>
                <h3>Sobre</h3>
            <img 
                src="" 
                alt="Dj" 
            />
                <div className='about-text'>Sou DJ porque falar com música é bem mais legal. Me inspiro no
                    groove do funk, nas batidas certeiras do house e na vibe futurista
                    do techno. Misturo tudo pra fazer a pista dançar sem pensar em
                    mais nada. Som na caixa e bora curtir!
                </div>
            </div>
        </section>
      </div>
    </div>

  )
}

export default Land