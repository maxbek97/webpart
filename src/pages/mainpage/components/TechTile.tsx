import React from 'react';

interface TechTileProps {
  iconName: string;
  description: string;
}

const TechTile: React.FC<TechTileProps> = ({ iconName, description }) => {
  return (
    <div className="Tech-container">
    <img 
        src={`/icons/${iconName}`} 
        className="tech-svg-icon"
    />
    <p className='Tech-description'>{description}</p>
    </div>
  );
};

export default TechTile;