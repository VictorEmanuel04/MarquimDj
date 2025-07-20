import React, { useState, useRef, useEffect } from 'react';
import '../styles/MusicPlayer.css';
import music1 from '../music/Dr. Dre - The Next Episode ft. Snoop Dogg_ Kurupt_(MP3_160K).mp3';
import music2 from '../music/Guns N_ Roses - Sweet Child O_ Mine (Official Music Video)(MP3_70K).mp3';
import music3 from '../music/Kendrick Lamar - HUMBLE(MP3_160K).mp3';
import cover1 from '../images/Musica1.jpg';

const musicas = [
  {
    title: "The Next Episode",
    artist: "Dr. Dre ft. Snoop Dogg",
    audioSrc: music1,
    imageSrc: cover1,
  },
  {
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    audioSrc: music2,
    imageSrc: cover1,
  },
  {
    title: "HUMBLE.",
    artist: "Kendrick Lamar",
    audioSrc: music3,
    imageSrc: cover1,
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