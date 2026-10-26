import './AboutMe.css'
import { useTranslation, Trans } from 'react-i18next'

export default function AboutMe(){
  const { t } = useTranslation();

  return(<>
  <main className='main'>
    <div className='___'></div>
    <div className='container-AboutMe'>
      <div className='About-text'>
        <p style={{color:'#ff334b', fontWeight:'400'}}>{t('about.bgQualifications')}</p>
        <h3 style={{color:'#fff', fontSize:'1.7rem', fontWeight:'900'}}>{t('about.title')}</h3>
        <p style={{color:'#a1a1aa', fontSize:'1rem'}}>{t('about.desc')}</p>
      </div>
      
      <div className='about-text-block'>
        <div className='flex-about'>
          <div className='left-about-blocks'>
            <div className='left-about-bio'>
              <h2 style={{color:'#fff', fontWeight:'600',padding:'3%'}}>{t('about.bioOverview')}</h2>

              <p style={{color:'#a1a1aa', fontWeight:'400',paddingBottom:'3%'}}>
                <Trans i18nKey="about.bioText">
                  Hello! I am <span style={{color:'#fff', fontWeight:'600'}}>Egor</span>, known online as <span style={{color:'#ff334b', fontWeight:'600'}}>AKULA</span>.
                  I hold a <span style={{color:'#fff', fontWeight:'600'}}>specialized secondary education degree</span> in Mobile and Web Application Development.
                </Trans>
              </p>
              <span style={{color:'#a1a1aa',fontWeight:'400'}}>{t('about.bioExtra')}</span>
            </div>
            <div className='left-about-education'>
              <h2 style={{color:'#fff', fontWeight:'600',padding:'3%'}}>{t('about.educationCredentials')}</h2>
              <div className='left-about-education-redLine-style'>
                <p style={{color:'#fff', fontWeight:'600',paddingBottom:'1.5%'}}>{t('about.specDegree')}</p>
                <p style={{color:'#ff334b', fontWeight:'600',paddingBottom:'3%', fontSize:'0.8rem'}}>{t('about.specMobileWeb')}</p>
                <span style={{color:'#a1a1aa', paddingBottom:'3%'}}>{t('about.rigorousTech')}</span>
              </div>
            </div>
          </div>
          
          <div className='right-about-Skills'>
            <h2 style={{color:'#fff',margin:'5%'}}>{t('about.skillProficiency')}</h2>

            <div className='progress-container'>
              <label className='progress-label'><p style={{color:'#fff'}}>HTML / CSS</p> <p style={{color:'#ff334b'}}>80%</p></label>
              <div className='progress-max'><div style={{backgroundColor:'#ff334b',width:'80%',height:'0.6rem',borderRadius:'0.4rem', border:'1px solid #27272a'}}></div></div>
            </div>
            <div className='progress-container'>
              <label className='progress-label'><p style={{color:'#fff'}}>JS / React</p> <p style={{color:'#ff334b'}}>70%</p></label>
              <div className='progress-max'><div style={{backgroundColor:'#ff334b',width:'70%',height:'0.6rem',borderRadius:'0.4rem', border:'1px solid #27272a'}}></div></div>
            </div>
            <div className='progress-container'>
              <label className='progress-label'><p style={{color:'#fff'}}>Java / Kotlin</p> <p style={{color:'#ff334b'}}>55%</p></label>
              <div className='progress-max'><div style={{backgroundColor:'#ff334b',width:'55%',height:'0.6rem',borderRadius:'0.4rem', border:'1px solid #27272a'}}></div></div>
            </div>
            <div className='progress-container'>
              <label className='progress-label'><p style={{color:'#fff'}}>Python</p> <p style={{color:'#ff334b'}}>60%</p></label>
              <div className='progress-max'><div style={{backgroundColor:'#ff334b',width:'60%',height:'0.6rem',borderRadius:'0.4rem', border:'1px solid #27272a'}}></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
    
  </>)
}