import React from 'react';

interface LegalLinkProps {
  href: string;
  text: string;
}

const LegalLink: React.FC<LegalLinkProps> = ({ href, text }) => {
  return (
    <a href={href} className="footer-legal-link">
      {text}
    </a>
  );
};

export default LegalLink;