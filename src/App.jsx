import { useState, useEffect } from 'react'
import './App.css'
import './i18n'
import { Route, Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import MyProgects from './pages/MyProgects'
import MainPage from './pages/MainPage'
import AboutMe from './pages/AboutMe'
import ContactMe from './pages/ContactMe'

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000, display: 'flex', gap: '10px' }}>
        <button onClick={() => i18n.changeLanguage('en')} style={{ color: i18n.language === 'en' ? '#ff334b' : '#fff', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>EN</button>
        <button onClick={() => i18n.changeLanguage('ru')} style={{ color: i18n.language === 'ru' ? '#ff334b' : '#fff', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>RU</button>
      </div>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='/MyProgects' element={<MyProgects />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/ContactMe' element={<ContactMe />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}