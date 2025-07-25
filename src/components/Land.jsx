import React, { useEffect, useState } from "react";
import "../styles/Land.css";
import Slider from "./Slider";
import ReviewsSlider from "./ReviewsSlider";
import emailjs from 'emailjs-com';
import MusicPlayer from "./MusicPlayer";

const Land = () => {
  const [menuOn, setMenuOn] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1160);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1160px)");

    const handleSize = (e) => {
      setIsMobile(e.matches)
      if(!e.matches) setMenuOn(false)
    }

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleSize);
    
    return() => {
      mediaQuery.removeEventListener("change", handleSize);
    }
  }, [])

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleContrateClick = () => {
    setIsFormVisible(true);
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;

  const templateParams = {
    email: form.email.value,
    'Show MarquimDJ': form.data.value,
    time: new Date().toLocaleString('pt-BR')
  };

  emailjs.send(
    'service_jbfl3gf',
    'template_clt0tbm',
    templateParams,
    'sXmsP3qUHP2APxY5d'
  ).then(
    (result) => {
      console.log("E-mail enviado:", result.text);
      alert("E-mail enviado com sucesso!");
    },
    (error) => {
      console.log("Erro ao enviar:", error.text);
      alert("Erro ao enviar e-mail.");
    }
  );

  form.reset();
};

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <img src="MarquimTitle2.png" alt="" />
        </div>

        {isMobile && (
          <button 
            className="menu-mobile" 
            onClick={() => setMenuOn(!menuOn)}
          >
            ☰
          </button>
        )}
        
        {!isMobile && (
          <nav className="nav">
            <a href="#main">Início</a>
            <a href="#about">Sobre</a>
            <a href="#presentation">Apresentações</a>
            <a href="#music">Músicas</a>
            <a href="#form">Formulário</a>
          </nav>
        )}

        {isMobile && menuOn &&(
          <nav className={`nav-sidebar ${menuOn ? "open" : ""}`}>
            <button className="close-button" onClick={() => setMenuOn(false)}>×</button>
            <a href="#main" onClick={() => setMenuOn(false)}>Início</a>
            <a href="#about" onClick={() => setMenuOn(false)}>Sobre</a>
            <a href="#music" onClick={() => setMenuOn(false)}>Músicas</a>
            <a href="#presentation" onClick={() => setMenuOn(false)}>Apresentações</a>
            <a href="#form" onClick={() => setMenuOn(false)}>Formulário</a>
          </nav>
        )}
        
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
              <img src="DJ9.png" alt="DJ Marquim" />
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
          <h2>Apresentações</h2>
          <p>Se liga como são meus shows!</p>
          <div className="presentation-container">
            <div className="presentation-slider">
              <Slider />
            </div>
          </div>
        </section>

        <section id="music">
          <h2>Minhas músicas mais tocadas!</h2>
          <div className="music-container">
            <div className="music-slider">
              <MusicPlayer />
            </div>
          </div>
        </section>

        <section id="form">
          <h2>Quer contar com minha presença?</h2>
          <p>Veja minhas avaliações e não perca tempo!</p>
          <div className="foorm-container">
            <div className="reviews">
              <ReviewsSlider/>
            </div>

            <form 
            onSubmit={handleSubmit}
            action="#" className={`contact-form ${isFormVisible ? 'form-visible' : ''}`}> 
              <input type="button" id="botao-contrate" value="CONTRATE JÁ!" onClick={handleContrateClick}/>
              <div className="form-group">
                <label htmlFor="nome">Digite seu nome</label>
                <input type="text" name="nome" id="nome" placeholder="Seu nome completo"/>
              </div>

              <div className="form-group">
                <label htmlFor="email">Digite seu email</label>
                <input type="email" name="email" id="email" placeholder="seu@email.com" required/>
              </div>
              
              <div className="form-group">
                <label htmlFor="data">Data do show</label>
                <input type="date" name="data" id="data" />
              </div> 

              <div className="form-group">
                <label htmlFor="mensagem">Sua Mensagem</label>
                <textarea name="mensagem" id="mensagem" rows="4" placeholder="Digite sua mensagem aqui..."></textarea>
              </div> 
              
              <button type="submit" className="botao-enviar">ENVIAR</button>
              
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-container">
          <p>© 2025 Marquim DJ — Todos os direitos reservados</p>
          <p>Siga minhas redes:</p>
          <p>
            <i className="fi fi-brands-instagram"></i>
            <a 
              href="https://www.instagram.com/visaojrufop" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              https://www.instagram.com/visaojrufop
            </a>
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
