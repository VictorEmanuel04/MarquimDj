import React, { useState, useRef, useEffect } from 'react';
import '../styles/MusicPlayer.css';
import music1 from '../music/Cartoon, Jéja - On & On (feat. Daniel Levi) ｜ Electronic Pop ｜ NCS - Copyright Free Music.mp3';
import music2 from '../music/Culture Code - Make Me Move (feat. Karra) ｜ Dance Pop ｜ NCS - Copyright Free Music.mp3';
import music3 from '../music/Different Heaven - Safe And Sound ｜ House ｜ NCS - Copyright Free Music.mp3';
import music4 from '../music/Elektronomia - Sky High ｜ Progressive House ｜ NCS - Copyright Free Music.mp3';
import music5 from '../music/Janji - Heroes Tonight (feat. Johnning) ｜ Progressive House ｜ NCS - Copyright Free Music.mp3';
import music6 from '../music/Jim Yosef - Firefly ｜ Progressive House ｜ NCS - Copyright Free Music.mp3';
import music7 from '../music/Lost Sky - Fearless pt.II (feat. Chris Linton) ｜ Trap ｜ NCS - Copyright Free Music.mp3';
import music8 from '../music/Rival - Throne (ft. Neoni) (Lost Identities Remix) ｜ DnB ｜ NCS - Copyright Free Music.mp3';
import music9 from '../music/Tobu - Candyland [Privated NCS Release].mp3';
import music10 from '../music/Unknown Brain - Superhero (feat. Chris Linton) ｜ Trap ｜ NCS - Copyright Free Music.mp3';
import cover1 from '../images/Capa 1.jpg';
import cover2 from '../images/Capa 2.jpg';
import cover3 from '../images/Capa 3.png';
import cover4 from '../images/Capa 4.jpg';
import cover5 from '../images/Capa 5.png';
import cover6 from '../images/Capa 6.png';
import cover7 from '../images/Capa 7.png';
import cover8 from '../images/Capa 8.png';
import cover9 from '../images/Capa 9.png';
import cover10 from '../images/Capa 10.png';

const musicas = [
  {
    title: "Different Heaven",
    artist: "DJ Marquim",
    audioSrc: music3,
    imageSrc: cover3,
  },
  {
    title: "Cartoon, Jéja - On & On",
    artist: "DJ Marquim - feat. Daniel Levi",
    audioSrc: music1,
    imageSrc: cover1,
  },
  {
    title: "Fearless",
    artist: "DJ Marquim - feat. Chris Linton",
    audioSrc: music7,
    imageSrc: cover7,
  },
  {
    title: "Throne",
    artist: "DJ Marquim - ft. Neoni",
    audioSrc: music8,
    imageSrc: cover8,
  },
  {
    title: "Candyland",
    artist: "DJ Marquim",
    audioSrc: music9,
    imageSrc: cover9,
  },
  {
    title: "Superhero",
    artist: "DJ Marquim - feat. Chris Linton",
    audioSrc: music10,
    imageSrc: cover10,
  },
  {
    title: "Culture Code - Make Me Move",
    artist: "DJ Marquim - feat. Karra",
    audioSrc: music2,
    imageSrc: cover2,
  },
  {
    title: "Heroes Tonight",
    artist: "DJ Marquim - feat. Johnning",
    audioSrc: music5,
    imageSrc: cover5,
  },
  {
    title: "Sky High",
    artist: "DJ Marquim",
    audioSrc: music4,
    imageSrc: cover4,
  },
  {
    title: "Firefly",
    artist: "DJ Marquim",
    audioSrc: music6,
    imageSrc: cover6,
  },
];

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
  </svg>
);

const PauseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
  </svg>
);

const PrevIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

const NextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

const MusicPlayer = () => {
  const [indiceMusicaAtual, setIndiceMusicaAtual] = useState(0);
  const [estaTocando, setEstaTocando] = useState(false);

  const audioRef = useRef(null);
  const referenciasListaMusicas = useRef([]);
  const refContainerLista = useRef(null);

  const musicaAtual = musicas[indiceMusicaAtual];

  useEffect(() => {
    if (estaTocando) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [estaTocando, indiceMusicaAtual]);

  useEffect(() => {
    const elementoMusicaAtiva = referenciasListaMusicas.current[indiceMusicaAtual];
    if (elementoMusicaAtiva) {
      elementoMusicaAtiva.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [indiceMusicaAtual]);

  const alternarPlayPause = () => {
    setEstaTocando(!estaTocando);
  };

  const avancarMusica = () => {
    const proximoIndice = (indiceMusicaAtual + 1) % musicas.length;
    setIndiceMusicaAtual(proximoIndice);
    setEstaTocando(true);
  };

  const retrocederMusica = () => {
    const indiceAnterior = (indiceMusicaAtual - 1 + musicas.length) % musicas.length;
    setIndiceMusicaAtual(indiceAnterior);
    setEstaTocando(true);
  };

  const selecionarMusica = (indice) => {
    setIndiceMusicaAtual(indice);
    setEstaTocando(true);
  };

  return (
    <section className="music-section">
      <div className="music-player-container">
        <div className="song-list" ref={refContainerLista}>
          {musicas.map((musica, index) => (
            <div
              key={index}
              ref={(el) => (referenciasListaMusicas.current[index] = el)}
              className={`song-item ${index === indiceMusicaAtual ? 'active' : ''}`}
              onClick={() => selecionarMusica(index)}
            >
              <img src={musica.imageSrc} alt={musica.title} className="song-item-cover" />
              <div className="song-item-info">
                <p className="song-item-title">{musica.title}</p>
                <p className="song-item-artist">{musica.artist}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="player-display">
          <img src={musicaAtual.imageSrc} alt={musicaAtual.title} className="player-cover-art" />
          <h3 className="player-song-title">{musicaAtual.title}</h3>
          <p className="player-song-artist">{musicaAtual.artist}</p>

          <audio ref={audioRef} src={musicaAtual.audioSrc} onEnded={avancarMusica} />

          <div className="player-controls">
            <button onClick={retrocederMusica} aria-label="Música Anterior">
              <PrevIcon />
            </button>
            <button onClick={alternarPlayPause} aria-label="Play/Pause">
              {estaTocando ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button onClick={avancarMusica} aria-label="Próxima Música">
              <NextIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;