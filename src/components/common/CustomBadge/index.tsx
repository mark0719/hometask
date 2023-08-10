import React from 'react';
import { CapitalizeFirstLetter } from '../../../utilities/transforms';
import './CustomBadgeStyle.css';

interface CustomBadgeProps {
  status: string;
}

const CustomBadge: React.FC<CustomBadgeProps> = ({ status }) => {
  const title = CapitalizeFirstLetter(status);
  
  return (
    <div className={`badgeStyle ${status}BadgeStyle`}>
      {title}
    </div>
  );
};

export { CustomBadge };