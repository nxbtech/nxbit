import React, { useState } from 'react';
import './styles/portfolioFilter.scss';

const PortfolioFilter = ({ categories, onFilterChange, sortByDate }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="portfolio-filter">
      <div className="portfolio-filter__categories">
        <button 
          className={activeCategory === 'all' ? 'active' : ''}
          onClick={() => handleCategoryChange('all')}
        >
          Tous
        </button>
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={activeCategory === category ? 'active' : ''}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="portfolio-filter__sort">
        <button className="sort-btn" onClick={() => sortByDate('recent')}>
          Plus récent
        </button>
        <button className="sort-btn" onClick={() => sortByDate('oldest')}>
          Plus ancien
        </button>
      </div>
    </div>
  );
};

export default PortfolioFilter;