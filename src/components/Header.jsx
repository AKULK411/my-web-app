import { NavLink } from "react-router-dom"
import './Header.css'
import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function Header() {
  const [isHovered, setIsHovered] = useState(false)
  const { t } = useTranslation()

  return (<>
    <header className='Header'>
      <div className='header-nav'>
        <div className='Logo-Block'>
          <div className='Logo-Icon'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ border: isHovered ? '1px solid #ff334b' : '1px solid rgba(0,0,0,0)' }}
          ><p>&lt;&gt;</p></div>
          <div className='Logo-Text'>
            <h3
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ color: isHovered ? '#ff334b' : '#fff', cursor: 'pointer' }}>AKULA</h3>
            <p style={{ color: '#a1a1aa' }}>// EGOR</p>
          </div>
        </div>
        <nav className='Navigate'>
          <NavLink to='/' end className='Nav'><p className='Text-Bg'>/home</p></NavLink>
          <NavLink to='/MyProgects' className='Nav'><p className='Text-Bg'>/projects</p></NavLink>
          <NavLink to='/AboutMe' className='Nav'><p className='Text-Bg'>/about</p></NavLink>
          <NavLink className='Button-Contact-Me' to='/ContactMe' style={{ textDecoration: 'none' }}>
            <p style={{ color: '#fff' }}>{t('header.contactMe')}</p>
          </NavLink>
        </nav>
      </div>
    </header>
  </>)
}
