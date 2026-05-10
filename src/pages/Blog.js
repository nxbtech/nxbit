import React from 'react';
import BlogCard from '../components/Blog/BlogCard'; // Assurez-vous que ce chemin est correct
import blogData from '../components/Blog/blogData'; // Importez les données depuis blogData
import '../styles/blog.scss'; // Import du fichier de style

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Nos Articles de Blog</h1>
      <div className="blog-cards">
        {blogData.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            excerpt={post.excerpt}
            img={post.img}
            date={new Date(post.date).toLocaleDateString()} // Format de la date
            altText={post.title}
            id={post.id} // Passer l'ID pour accéder à l'article complet
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;