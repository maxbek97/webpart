import React from 'react';
import NavButton from './NavButton';
import ActionButton from './ActionButton';
import '../Header.css';

const Header: React.FC = () => {
  const menuItems = [
    { id: 1, href: '#describe_video', label: 'Описание' },
    { id: 2, href: '#tech', label: 'Технологии' },
  ];

  const handleAction = () => {
    console.log("Кнопка нажата! Тут будет логика авторизации или скачивания.");
    // Например: window.location.href = '/download/game.exe';
  };

  return (
    <header className="header-container">
      {/* ЛЕВАЯ ЧАСТЬ: Навигация */}
      <nav className="header-nav">
        <div className="logo-placeholder">V</div> {/* Вместо логотипа */}
        <ul className="nav-list">
          {menuItems.map((item) => (
            <NavButton key={item.id} href={item.href} label={item.label} />
          ))}
        </ul>
      </nav>

      {/* ПРАВАЯ ЧАСТЬ: Кнопка */}
      <div className="header-actions">
        <ActionButton text="Скачать" onClick={handleAction} />
      </div>
    </header>
  );
};

export default Header;