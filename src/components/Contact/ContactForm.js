import React, { useState } from 'react';
import './styles/contactForm.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    profession: '',
    email: '',
    soloEntrepreneur: false,
    companyRepresentative: false,
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoi des données au fichier PHP
    fetch('/api/contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        profession: formData.profession,
        email: formData.email,
        message: formData.message,
        soloEntrepreneur: formData.soloEntrepreneur,
        companyRepresentative: formData.companyRepresentative,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === 'success') {
          alert('Email envoyé avec succès !');
        } else {
          alert('Échec de l\'envoi de l\'email.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Une erreur est survenue.');
      });
  };

  return (
    <div className="contact-form">
      <h2 className="contact-form__title">DISCUTONS DE VOTRE PROJET</h2>
      <p className="contact-form__subtitle">
        Nous sommes disponibles pour répondre à toutes vos questions.
      </p>

      <form className="contact-form__form" onSubmit={handleSubmit}>
        <div className="contact-form__inputs">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Prénom"
            className="contact-form__input"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Nom"
            className="contact-form__input"
          />
        </div>

        <input
          type="text"
          name="profession"
          value={formData.profession}
          onChange={handleInputChange}
          placeholder="Profession"
          className="contact-form__input"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Adresse Email"
          className="contact-form__input"
        />

        <div className="contact-form__buttons">
          <button
            type="button"
            className={`contact-form__button ${formData.soloEntrepreneur ? 'active' : ''}`}
            onClick={() => setFormData({ ...formData, soloEntrepreneur: true, companyRepresentative: false })}
          >
            <span className="contact-form__icon">🧑‍💼</span>
            Je suis un recruteur ou RH
          </button>

          <button
            type="button"
            className={`contact-form__button ${formData.companyRepresentative ? 'active' : ''}`}
            onClick={() => setFormData({ ...formData, companyRepresentative: true, soloEntrepreneur: false })}
          >
            <span className="contact-form__icon">🏢</span>
            Je représente une entreprise
          </button>
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Votre message"
          className="contact-form__textarea"
        ></textarea>

        <button type="submit" className="contact-form__submit">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;