import React from 'react';
import ActionButton from './ActionButton';
import '../VideoSection.css';

const videoSrc = '/videos/webvid.mp4'; 

const VideoSection: React.FC = () => {
  const handleDownloadClick = () => {
    console.log("Кнопка 'Скачать' нажата в Hero секции.");
  };

  return (
    <section className="hero-video-section" id="describe_video">
      <video 
        className="hero-video-background" 
        src={videoSrc} 
        autoPlay 
        loop 
        muted 
        playsInline // Важно для мобильных устройств, чтобы видео проигрывалось автоматически
      />
      
      {/* Затемняющий оверлей */}
      <div className="video-overlay" />

      {/* Контент поверх видео */}
      <div className="hero-content">
        <h1 className="hero-title">
          IvanVision
        </h1>
        <p className="hero-subtitle">
          Окунитесь в гиперреальность
        </p>
        <ActionButton text="Скачать" onClick={handleDownloadClick} />
      </div>
    </section>
  );
};

export default VideoSection;