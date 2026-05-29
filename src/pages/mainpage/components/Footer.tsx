import React from 'react';
import LegalLink from './LegalLink';
import '../Footer.css';
import SocialLink from './SocialLink';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-socials">
            <SocialLink href="https://youtube.com/Venaja" iconName="youtube-svgrepo-com.svg" title="YouTube" />
            <SocialLink href="https://github.com/Venaja" iconName="github-142-svgrepo-com.svg" title="GitHub" />
            <SocialLink href="https://discord.gg/GD9H595Y" iconName="discord-svgrepo-com.svg" title="Discord" />
        </div>

        <div className="footer-logos">
          <div className="val-logo-small">Venaja</div>
        </div>

        <p className="footer-copyright">
          © {currentYear} Venaja и любые связанные логотипы являются просто по преколу по рофлу, ну потому что стиль мне нравится, но если выстрелит не воруйте пжпжпж
        </p>

        <div className="age-rating">52+</div>

      </div>
    </footer>
  );
};

export default Footer;