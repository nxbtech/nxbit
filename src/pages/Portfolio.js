import React, { useState } from 'react';
import PortfolioFilter from '../components/Portfolio/PortfolioFilter'; // Import du filtre
import PortfolioCard from '../components/Portfolio/PortfolioCard'; // Import des cartes
import '../styles/portfolio.scss'; // Import du fichier de style

import PortfolioImg1 from '../components/Images/startup-interactive.png'; // Assurez-vous que le chemin est correct
import PortfolioImg2 from '../components/Images/mobilefit-tracker.png'; // Assurez-vous que le chemin est correct
import PortfolioImg3 from '../components/Images/ecommerce-accelrator.jpg'; // Assurez-vous que le chemin est correct
import PortfolioImg4 from '../components/Images/seo-boost-pro.png'; // Assurez-vous que le chemin est correct
import PortfolioImg5 from '../components/Images/wellness-app.png'; // Assurez-vous que le chemin est correct
import PortfolioImg6 from '../components/Images/seo-optimisation-blog.png'; // Assurez-vous que le chemin est correct
import PortfolioImg7 from '../components/Images/dashboard.png'; // Assurez-vous que le chemin est correct
import PortfolioImg8 from '../components/Images/marketplace.png'; // Assurez-vous que le chemin est correct
import PortfolioImg9 from '../components/Images/seo-local.png'; // Assurez-vous que le chemin est correct
import PortfolioImg10 from '../components/Images/corporate.png'; // Assurez-vous que le chemin est correct



const projectData = [
  { 
    title: "Startup Interactive",
    category: "Développement Web",
    date: new Date("2023-02-28"), 
    img: PortfolioImg1, 
    content: "Conception d'un site interactif pour une startup, avec une expérience utilisateur fluide et moderne."
  },
  { 
    title: "MobileFit Tracker",
    category: "Mobile",
    date: new Date("2023-02-28"), 
    img: PortfolioImg2, 
    content: "Application de suivi fitness avec notifications push et analyse des performances sur iOS et Android."
  },
  { 
    title: "E-Commerce Accelerator",
    category: "Développement Web",
    date: new Date("2023-02-28"), 
    img: PortfolioImg3, 
    content: "Amélioration des performances d'une boutique en ligne avec des optimisations pour booster les ventes."
  },
  { 
    title: "SEO Boost Pro",
    category: "SEO",
    date: "2022-07-05",
    img: PortfolioImg4, 
    content: "Stratégie SEO pour un site e-commerce afin d'améliorer le classement et d'augmenter le trafic organique."
  },
  { 
    title: "Wellness App",
    category: "Mobile",
    date: "23-03-10",
    img: PortfolioImg5, 
    content: "Développement d'une application mobile pour le suivi des objectifs de remise en forme, avec des intégrations fitness."
  },
  { 
    title: "SEO Optimisation Blog",
    category: "SEO",
    date: "2023/05/22",
    img: PortfolioImg6, 
    content: "Amélioration de la visibilité et du classement SEO d'un blog d'actualités pour attirer plus de lecteurs."
  },
  { 
    title: "Task Manager Pro",
    category: "Développement Web",
    date: "2023-02-28",
    img: PortfolioImg7, 
    content: "Création d'une application web de gestion de tâches avec un tableau de bord intuitif et des notifications."
  },
  { 
    title: "Local Marketplace",
    category: "Mobile",
    date: "2023-07-04",
    img: PortfolioImg8, 
    content: "Développement d'une application mobile de marketplace, permettant l'achat et la vente de produits localement."
  },
  { 
    title: "SEO Local Power",
    category: "SEO",
    date: "2022-10-12",
    img: PortfolioImg9, 
    content: "Stratégie SEO locale pour maximiser la visibilité d'un site de services dans sa région."
  },
  { 
    title: "Corporate Web Presence",
    category: "Développement Web",
    date: "2023-08-14",
    img: PortfolioImg10, 
    content: "Création d'un site corporate professionnel avec des fonctionnalités interactives et une page d'accueil impactante."
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('recent'); // Pour trier par date

  const categories = [...new Set(projectData.map(project => project.category))]; // Liste unique des catégories

  // Fonction pour filtrer par catégorie
  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  // Fonction pour trier par date
  const sortByDate = (order) => {
    setSortOrder(order);
  };

  // Fonction de filtrage et tri des projets
  const filteredProjects = projectData
    .filter(project => selectedCategory === 'all' || project.category === selectedCategory)
    .sort((a, b) => {
      if (sortOrder === 'recent') {
        return b.date - a.date; // Tri décroissant (plus récent en premier)
      } else {
        return a.date - b.date; // Tri croissant (plus ancien en premier)
      }
    });

  return (
    <div className="portfolio-container">
      {/* Filtre pour les projets */}
      <PortfolioFilter 
        categories={categories} 
        onFilterChange={handleFilterChange}
        sortByDate={sortByDate}
      />

      {/* Grille des projets filtrés */}
      <div className="portfolio-cards">
        {filteredProjects.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}
            content={project.content}
            img={project.img}
            altText={project.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;