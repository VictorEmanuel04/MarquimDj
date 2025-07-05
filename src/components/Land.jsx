import React from 'react'
import '../styles/Land.css'

const Land = () => {
  return (
     <div className="app">
      <header className="header">
        <div className="logo">
          <a href="/">MDJ</a>
          <img src="src/images/logo.png" alt="" />
        </div>
        <nav className="nav">
          <a href="#main">Início</a>
          <a href="#about">Sobre</a>
          <a href="#presentation">Apresentações</a>
          <a href="#form">Formulário</a>
        </nav>
      </header>

      <main>
        <section id="main"> 
          <h1>Início</h1>
          <div className="title">MARQUIM DJ</div>
          <div className="slogan">"Conectando pessoas através da música!"</div>
        </section>
        
        <section id="about">
          <h2>Sobre</h2>
          <div className="about-container">
          </div>
        </section>

        <section id="presentation">
          <h2>Apresentação</h2>
          <div className="presentation-container">
          </div>
        </section>

        <section id="form">
          <h2>Formulário</h2>
          <div className="foorm-container">
          </div>
        </section>
      </main>

      <footer>
          <div className="footer-container">
            <p>© 2025 Marquim DJ — Todos os direitos reservados</p>
            <p>Siga minhas redes:</p>
            <p>
              <i className="fi fi-brands-instagram"></i>
              https://www.instagram.com/visaojrufop
            </p>
            <p>
              <i className="fi fi-rr-envelope"></i>
              contato@visaojr.com.br
            </p>
          </div>
      </footer>
    </div>

  )
}

export default Land