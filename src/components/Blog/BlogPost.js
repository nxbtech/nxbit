import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import de useNavigate pour la navigation
import blogData from './blogData';
import './styles/blogPost.scss';

const BlogPost = () => {
  const { id } = useParams(); // Récupère l'ID de l'URL
  const post = blogData.find((post) => post.id === parseInt(id)); // Trouve l'article correspondant
  const navigate = useNavigate(); // Utilisation de navigate pour rediriger

  if (!post) {
    return <p>Article non trouvé</p>; // Gérer le cas où l'ID ne correspond à aucun article
  }

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <img src={post.img} alt={post.title} />
      <p>{post.excerpt}</p>
      <p>Date : {new Date(post.date).toLocaleDateString()}</p>
      
      {/* Affichage du contenu complet avec rendu HTML */}
      <div className="blog-post__content" dangerouslySetInnerHTML={{ __html: post.content }} />

      {/* Ajout d'un bouton retour */}
      <button className="back-button" onClick={() => navigate('/blog')}>
        Revenir à la page Blog
      </button>
    </div>
  );
};

export default BlogPost;