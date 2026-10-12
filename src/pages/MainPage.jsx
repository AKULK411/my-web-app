import './MainPage.css'
import mess from '../assets/letter.svg'
import progects from '../data/myProgect';
import Toolkit from '../data/miniCardsToolkit.jsx'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const topProject = progects.slice(0,3);

export default function MainPage(){
  const { t } = useTranslation();

  return(<>
    <main className='main-page'>
      <div className='___'></div>
      <div className='container-info'>
        <div className='Info-text'>
          <h1 style={{color:'#ffffff', fontSize:'5rem', fontWeight:'900'}}>EGOR<span style={{color:'#ff334b'}}>//</span></h1>
          <h2 className='gradient-text'>AKULA</h2>
          <h3 style={{color:'#ff334b', fontSize:'1.5rem'}}>{t('main.role')}</h3>
          <p style={{color:'#a1a1aa', paddingTop:'1.5rem', fontSize:'1.2rem', fontWeight:'600'}}>{t('main.desc')}</p>
          

          <div className='badges-lang'>
            <p className='lang-dev'>HTML/CSS</p>
            <p className='lang-dev'>JS</p>
            <p className='lang-dev'>React</p>
            <p className='lang-dev'>Java</p>
            <p className='lang-dev'>Kotlin</p>
            <p className='lang-dev'>Python</p>
          </div>
          
          <div>
            <button className='button-nav-main-page'><NavLink to='/MyProgects' style={{textDecoration: 'none'}}><p className='Button-text'>{t('common.exploreProjects')}</p></NavLink></button>
            <button className='button-send-mess'><NavLink to='/ContactMe' style={{textDecoration: 'none'}}><p className='Button-text'>{t('common.sendMessage')}</p></NavLink></button>
          </div>
        </div>
        
        <div className='info-block'>
          <div className='header-block'>
            <div>
              <span style={{color:'#ef4444cc'}} className='circle'>●</span>
              <span style={{color:'#eab308cc'}} className='circle'>●</span>
              <span style={{color:'#22c55ecc'}} className='circle'>●</span>
            </div>
            <p style={{color:'#a1a1aa', padding:'0 6.5rem', fontSize:'0.9rem'}}>dev_profile.kt</p>
            <p style={{color:'#ff334b', fontWeight:'600'}}>&gt;_</p>
          </div>
          <div className='main-info-block'>

            <div className='line-text'><span style={{color:'#ff334b'}}>object&nbsp;</span><span style={{fontWeight:'600', color:'#fff'}}>Developer&nbsp;</span>&#123;</div>
            <div className='line-text'><span style={{color:'#ff334b'}}>&nbsp;&nbsp;val&nbsp;</span>name = <span style={{color:'#34d399'}}>"Егор / AKULA"</span></div>
            <div className='line-text'><span style={{color:'#ff334b'}}>&nbsp;&nbsp;val&nbsp;</span>degree = <span style={{color:'#34d399'}}>"vocational education"</span></div>
            <div className='line-text'><span style={{color:'#ff334b'}}>&nbsp;&nbsp;val&nbsp;</span>specialization = <span style={{color:'#34d399'}}>"Mobile & Web Dev"</span></div>
            <div className='line-text'><span style={{color:'#ff334b'}}>&nbsp;&nbsp;val&nbsp;</span>status = <span style={{color:'#34d399'}}>"Ready for Hiring"</span></div>
            <div className='line-text'><span style={{color:'#ff334b'}}>&nbsp;&nbsp;val&nbsp;</span>stack = listOf(<span style={{color:'#34d399'}}></span></div>
            <div className='line-text'><span style={{color:'#fcd34d'}}>&nbsp;&nbsp;&nbsp;&nbsp;"HTML", "CSS", "JS", "React",</span></div>
            <div className='line-text'><span style={{color:'#fcd34d'}}>&nbsp;&nbsp;&nbsp;&nbsp;"Java", "Kotlin", "Python"</span></div>
            <div className='line-text'><span>&nbsp;&nbsp;)</span></div>
            <div className='line-text'><span>&#125;</span></div>
            <div className='line-text'><span>{t('main.initMsg')}</span></div>
            <div className='line-text'><span style={{color:'#ff334b'}}>&gt; AKULA.buildAwesomeProducts()</span></div>
          </div>
        </div>
      </div>

      <div className='container-Technology-toolkit'>
        <div className='Technology-toolkit-text'>
          <p style={{color:'#ff334b', fontWeight:'400'}}>{t('main.coreCompetencies')}</p>
          <h3 style={{color:'#fff', fontSize:'2rem', fontWeight:'900', marginBottom:'1rem'}}>{t('main.techStackTitle')}</h3>
        </div>
        <div className='toolkits-mini-cards'>
          {Toolkit.map((toolkitCard)=> (
            <div key={toolkitCard.id} className='mini-cards'>
              <img src={toolkitCard.img} className='img-card'/>
              <p style={{color:'#fff', fontWeight:'600'}}>{toolkitCard.name}</p>
              <p style={{color:'#a1a1aa', fontWeight:'100', fontSize:'0.8rem'}}>{toolkitCard.info}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-container-projects'>
        <div className='container-progects'>
          <div className='text-projects-block'>
            <p style={{color:'#ff334b', fontWeight:'400'}}>{t('main.selectedWorks')}</p>
            <h3 style={{color:'#fff', fontSize:'2rem', fontWeight:'900'}}>{t('main.featuredProjects')}</h3>
          </div>
          <div className="projects-grid">
            {topProject.map((top) => (
              <div key={top.id} className="project-card">
                <img src={top.img} className="project-card-image"/>
                <div className="project-card-content">
                  <div className='lang-badges'>
                    <span className='project-card-langBlock'>{top.lang1}</span>
                    <span className='project-card-langBlock'>{top.lang2}</span>
                    <span className='project-card-langBlock'>{top.lang3}</span>
                  </div>
                  <h3 className="project-card-title">{top.name}</h3>
                  <p className="project-card-info">{top.info}</p>
                  <a href={top.src} target="_blank" className="project-card-link">{t('common.viewDetails')}</a>
                </div>
              </div>
            ))}
          </div>
          <div className='Project-directory'>
            <div className='Project-directory-text'>
              <h3 style={{color:'#fff', fontSize:'1.4rem', fontWeight:'900'}}>{t('main.wantToSeeMore')}</h3>
              <p style={{color:'#a1a1aa', fontWeight:'400'}}>{t('main.exploreFullList')}</p>
            </div>
            <button className='button-nav-main-page'>
              <NavLink to='/MyProgects' style={{textDecoration: 'none'}}><p className='Button-text'>{t('main.goToDirectory')}</p></NavLink>
            </button>
          </div>
        </div>
      </div>
    </main>
  </>)
}
