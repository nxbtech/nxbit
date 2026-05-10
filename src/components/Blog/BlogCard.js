import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/blogCard.scss';

const BlogCard = ({ title, excerpt, img, date, altText, id }) => {
  const navigate = useNavigate();

  // Fonction pour naviguer vers l'article complet
  const goToPost = () => {
    navigate(`/blog/${id}`); // Redirige vers la page de l'article
  };

  return (
    <div className="blog-card" onClick={goToPost}>
      <div className="blog-card__img" style={{ backgroundImage: `url(${img})` }} alt={altText}></div>
      <div className="blog-card__content">
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default BlogCard;