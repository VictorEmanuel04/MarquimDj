import React from "react";
import "../styles/Land.css";
import Slider from "./Slider";

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
          <div className="imagemFesta-container">
            <div className="imagemFesta">
              <div className="titleDJMarquin">MARQUIM DJ</div>
            </div>
            <div className="imagemFesta-texto">
              <div className="slogan">
                Conectando pessoas através da música!
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <h2>Sobre</h2>
          <div className="about-container">
            <div class="glow glow1"></div>
            <div class="glow glow2"></div>
            <div class="glow glow3"></div>
            <div class="glow glow4"></div>
            <div class="glow glow5"></div>
            <div class="glow glow6"></div>
            <div class="glow glow7"></div>
            <div className="about img">
              <img src="src/images/DJ9.png" alt="DJ Marquim" />
            </div>
            <div className="about-text">
              <p>
                Sou DJ porque falar com música é bem mais legal.
                Inspirado por grandes nomes do cenário eletrônico, 
                misturo o groove do funk, as batidas do house, 
                a vibe do techno e elementos do progressive e pop eletrônico para criar sets únicos e cheios de personalidade. 
                Meu objetivo é transformar cada apresentação em uma experiência inesquecível, 
                conectando pessoas através da intensidade, criatividade e amor pela música. 
                Som na caixa e bora curtir!
              </p>
            </div>
          </div>
        </section>

        <section id="presentation">
          <h2>Apresentação</h2>
          <div className="presentation-container">
            <div className="presentation-slider">
              <Slider />
            </div>
          </div>
        </section>

        <section id="form">
          <h2>Formulário</h2>
          <div className="foorm-container"></div>
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
  );
};

export default Land;
