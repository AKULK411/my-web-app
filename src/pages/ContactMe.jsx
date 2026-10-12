import './ContactMe.css'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Contact from '../data/communicationChanel'

export default function ContactMe(){
  const { t } = useTranslation();
  const [buttonState, setButtonState] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  function validEmail(email){ return emailRegex.test(email); }
  function handleChange(e){ setButtonState(!validEmail(e.target.value)); }

  return(<>
    <div className='___'></div>
    <div className='container-ContactMe'>
      <div className='div_'>
        <div className='Contact-text'>
          <p style={{color:'#ff334b', fontWeight:'400'}}>{t('contact.getInTouch')}</p>
          <h3 style={{color:'#fff', fontSize:'1.7rem', fontWeight:'900'}}>{t('contact.title')}</h3>
          <p style={{color:'#a1a1aa', fontSize:'1rem'}}>{t('contact.desc')}</p>
        </div>
        
        <div className='contact-container'>
          <div className='Block-Form'>
            <form>
              <div className='input'>
                <label style={{color:'#a1a1aa', marginBottom:'2%'}}>{t('contact.yourName')}</label>
                <input name='inp' className='inFocus' type='text' placeholder={t('contact.namePlaceholder')} required/>
              </div>
              <div className='input'>
                <label style={{color:'#a1a1aa', marginBottom:'2%'}}>{t('contact.email')}</label>
                <input name='inp' className='inFocus' type='email' placeholder={t('contact.emailPlaceholder')} onChange={handleChange} required/>
              </div>
              <div className='input'>
                <label style={{color:'#a1a1aa', marginBottom:'2%'}}>{t('contact.subject')}</label>
                <input name='inp' className='inFocus' type='text' placeholder={t('contact.subjectPlaceholder')} required/>
              </div>
              <div className='input'>
                <label style={{color:'#a1a1aa', marginBottom:'2%'}}>{t('contact.message')}</label>
                <textarea name='inp' className='inFocus textArea' placeholder={t('contact.messagePlaceholder')} required/>
              </div>
              <button disabled={buttonState}
                style={{backgroundColor:buttonState ? '#a1a1aa' : '#ff334b', color: buttonState ?'#27272a':'#fff', cursor: buttonState ? 'default':'pointer'}}
                className='button-form'>
                {t('contact.transmitMessage')}
              </button>
            </form>
          </div>
          
          <div className='contact-link'>
            <p style={{color:'#fff', fontSize:'1.2rem', fontWeight:'600',marginBottom:'3%',textAlign:'center'}}>{t('contact.directChannels')}</p>
            {Contact.map((link)=>(
              <div key={link.id} className='link-block'>
                <div className='link-img-block'><img src={link.img} className='link-img'/></div>
                <div className='contact-text-block'>
                  <p style={{color:'#a1a1aa',fontWeight:'400'}}>{link.name}</p>
                  <a href={link.src} target="_blank" className='link-src' style={{fontWeight:'600'}}>{link.linkName}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>)
}