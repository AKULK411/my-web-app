import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './NotFound.css'

export default function NotFound(){
  const { t } = useTranslation();

  return(<>
    <div className='Not-Found-Block'>
      <div className='container-404'>
        <div className='Info-text-404'>
          <h1 style={{color:'#ffffff', fontSize:'8rem', fontWeight:'900'}}>404 <span style={{color:'#ff334b'}}>// </span></h1>
          <h2 className='gradient-text' style={{fontSize:'2.5rem'}}>{t('notFound.title')}</h2>
          <p style={{color:'#a1a1aa', paddingTop:'1.5rem', fontSize:'1.2rem', fontWeight:'600'}}>{t('notFound.desc')}</p>
          <div>
            <button className='button-main-page'>
              <NavLink to='/' style={{textDecoration: 'none'}}>
                <p className='Button-text'>{t('common.returnHome')}</p>
              </NavLink>
            </button>
          </div>
        </div>
        
        <div className='info-block'>
          <div className='header-block'>
            <div>
              <span style={{color:'#ef4444cc'}} className='circle'>●</span>
              <span style={{color:'#eab308cc'}} className='circle'>●</span>
              <span style={{color:'#22c55ecc'}} className='circle'>●</span>
            </div>
            <p style={{color:'#a1a1aa', padding:'0 6.5rem', fontSize:'0.9rem'}}>404_exception.log</p>
            <p style={{color:'#ff334b', fontWeight:'600'}}>&gt;_</p>
          </div>
          <div className='main-info-block'>

            <div className='line-text'><span style={{color:'#ff334b'}}>class&nbsp;</span><span style={{fontWeight:'600', color:'#fff'}}>PageNotFoundException&nbsp;</span>: Exception()</div>
            <div className='line-text'>&#123;</div>
            <div className='line-text'><span style={{color:'#ff334b'}}>&nbsp;&nbsp;val&nbsp;</span>status = <span style={{color:'#fcd34d'}}>"404"</span></div>
            <div className='line-text'><span style={{color:'#ff334b'}}>&nbsp;&nbsp;val&nbsp;</span>route = <span style={{color:'#34d399'}}>"REQUESTED_URL"</span></div>
            <div className='line-text'><span style={{color:'#ff334b'}}>&nbsp;&nbsp;val&nbsp;</span>messege = <span style={{color:'#34d399'}}>"Target node unreachable"</span></div>
            <div className='line-text'>&#125;</div>
            

            <div className='line-text'><span>{t('notFound.stackTrace')}</span></div>
            <div className='line-text'><span style={{color:'#f87171'}}>&gt; ERR_HTTP_404_NOT_FOUND</span></div>
            <div className='line-text'><span style={{color:'#f87171'}}>&gt; Route lookup failed</span></div>
            <div className='line-text'><span style={{color:'#f87171'}}>&gt; Redirecting to main node...</span></div>
            <div className='line-text'>&nbsp;</div>
            <div className='line-text'><span style={{color:'#ff334b'}}>&gt; AKULA.resolveRoute()</span></div>
          </div>
        </div>
      </div>
    </div>
  </>)
}