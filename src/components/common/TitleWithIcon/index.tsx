import React from 'react';
import './TitleWithIconStyle.css';

interface TitleWithIconProps {
  url: string;
  title: string;
}

const TitleWithIcon: React.FC<TitleWithIconProps> = ({ url, title }) => {
  return (
    <div className="d-flex align-items-center py-1">
      <div className="iconStyle d-flex" >
        <img src={url} alt={`${title} Icon`}/>
      </div>
      <p className="textStyle mb-0">{title}</p>
    </div>
  );
};

export { TitleWithIcon };