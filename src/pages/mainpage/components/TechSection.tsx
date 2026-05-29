import React from 'react';
import '../TechSection.css';
import TechTile from './TechTile';


const TechSection: React.FC = () => {

  return (
    <section id="tech" className="tech-section">
      <div className='tech-box'>
        <TechTile iconName='ASP.svg' description="Мощный фреймворк для построения бэкэнда"></TechTile>
        {/* <TechTile iconName='Ultralytics YOLOv8.svg' description="Данная модель позволь идентифицировать и отслеживать метки с высокой точностью"></TechTile> */}
        <TechTile iconName='fastapi-logo-png.png' description='Фреймоврк для быстрого создания и настройки WebSocket-сервера'></TechTile>
        <TechTile iconName='OpenCV.svg' description='Открытая библиотека для использования компьютерного зрения'></TechTile>
        <TechTile iconName='kotlin-logo.png' description='Актуальный язык для нпаисания приложения для Android'></TechTile>
      </div>
    </section>
  );
};

export default TechSection;