import React from 'react';
import './GeneralCard.css';

const CardComponent = ({ title, subtitle: cost, category, image }) => {
  return (
    <div className="custom-card">
      <img
        src={image}
        alt={title}
        className="card-image"
      />
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-subtitle">{cost}</div>
        <div className="card-category">{category}</div>
      </div>
    </div>
  );
};

export default CardComponent;