import React from 'react';

interface SocialLinkProps {
  href: string;
  iconName: string;
  title: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, iconName, title }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="social-link"
      title={title}
    >
      <div className="social-icon-wrapper">
        <img 
          src={`/icons/${iconName}`} 
          alt={title} 
          className="social-svg-icon"
        />
      </div>
    </a>
  );
};

export default SocialLink;