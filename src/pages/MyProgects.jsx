import { useState } from 'react';
import progects from '../data/myProgect';
import './MyProgects.css';
import { useTranslation } from 'react-i18next';

export default function MyProgects() {
  const { t } = useTranslation();

  return (<>
    <main className='main'>
      <div className='___'></div>
      <div className="projects-container">
        <div className='header-text'>

          <p style={{color:'#ff334b'}}>{t('projects.repository')}</p>
          <h2 className="projects-title">{t('projects.title')}</h2>
          <p style={{color:'#a1a1aa', fontSize:'1rem'}}>{t('projects.description')}</p>
        </div>
        <div className="projects-grid">
          {progects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.img} className="project-card-image"/>
              <div className="project-card-content">
                <div className='lang-badges'>
                  <span className='project-card-langBlock'>{project.lang1}</span>
                  <span className='project-card-langBlock'>{project.lang2}</span>
                  <span className='project-card-langBlock'>{project.lang3}</span>
                </div>
                <h3 className="project-card-title">{project.name}</h3>
                <p className="project-card-info">{project.info}</p>

                <a href={project.src} target="_blank" className="project-card-link">{t('common.viewDetails')}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  </>);
}