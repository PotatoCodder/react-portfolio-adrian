/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/Languages.css'; // Adjust the path as necessary

function Languages() {
  const languages = [
    { name: 'Java', description: 'A versatile, platform-independent programming language used for building large-scale applications.' },
    { name: 'JavaScript', description: 'A dynamic scripting language primarily used for creating interactive web applications.' },
    { name: 'MySQL', description: 'An open-source relational database management system for managing structured data.' },
    { name: 'NodeJS', description: 'A JavaScript runtime built on Chrome’s V8 engine, designed for building scalable network applications.' },
    { name: 'Python', description: 'A high-level, general-purpose programming language known for its readability and simplicity.' },
    { name: 'React', description: 'A JavaScript library for building user interfaces, particularly for single-page applications.' },
  ];

  return (
    <div className="languages-section">
      <h1 className="languages-title">My Languages</h1> {/* Title above the cards */}
      <div className="languages">
        {languages.map((language, index) => (
          <div className="language-card" key={index}>
            <h4 className="language-name">{language.name}</h4>
            <p className="language-description">{language.description}</p> {/* Description inside the card */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Languages;
