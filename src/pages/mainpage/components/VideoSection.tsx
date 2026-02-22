import React from 'react';
import ActionButton from './ActionButton';
import '../VideoSection.css';
import { useNavigate } from 'react-router-dom';

const videoSrc = '/videos/webvid.mp4'; 

const VideoSection: React.FC = () => {
  const navigate = useNavigate();

 const handleAction = () => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      // Если нет токена → редиректим на страницу авторизации
      navigate('/auth');
      return;
    };

    const link = document.createElement('a');
    link.href = '/result.txt';  // путь относительно public
    link.download = 'result.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <ActionButton text="Скачать" onClick={handleAction} />
      </div>
    </section>
  );
};

export default VideoSection;