import React from 'react';

interface RecipeCardProps {
  title: string;
  cost: string;
  image: string;
  date: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, cost, image, date }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />
      <div className="recipe-details">
        <h3 className="recipe-title">{title}</h3>
        <p className="recipe-cost">Cost: {cost}</p>
        <p className="recipe-date">Date: {date}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
