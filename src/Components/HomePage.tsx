import React from 'react';
import RecipeCard from './RecipeCard';
import { trendingRecipes } from './Data/TrendingRecipeData'; 
import { lowCostRecipes } from './Data/LowPriceRecipeData';

const HomePage: React.FC = () => {
  
  return (
    <div className="homepage">
      <section className="trending-recipes">
        <h2>Trending Recipes</h2>
        <div className="recipe-list">
          {trendingRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              cost={recipe.cost}
              image={recipe.image}
              date={recipe.date}
            />
          ))}
        </div>
      </section>

      <section className="low-cost-recipes">
        <h2>Low Cost Recipes</h2>
        <div className="recipe-list">
          {lowCostRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              cost={recipe.cost}
              image={recipe.image}
              date={recipe.date}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
