import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const baseUrl = import.meta.env.BASE_URL || '/Portfolio-fd/';
  const imageUrl = `${baseUrl}${project.imageSrc[0]}`;

  console.log('Base URL:', baseUrl);
  console.log('Image URL:', imageUrl);

  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={project.title} className={styles.image} onError={(e) => console.error('Error loading image:', e.target.src)} />
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.skills}>
        {project.skills.map(skill => (
          <li key={skill} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={project.source} className={styles.link} target="_blank" rel="noopener noreferrer">Source</a>
      </div>
    </div>
  );
};

export default ProjectCard;
