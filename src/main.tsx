// DEPENDENCY
import React from 'react'
import ReactDOM from 'react-dom/client'

// STYLE
import './styles/global.css'
import {
  DotsThree,
  Bell,
  BookmarkSimple,
  Envelope,
  FileText,
  Hash,
  House,
  User,
} from 'phosphor-react'

// ASSET
import twitterLogo from './assets/twitter-logo.svg'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <aside className='sidebar'>
        <img className='logo' src={twitterLogo} alt='Logo' />

        <nav className='navigation'>
          <a href='#' className='navigation__link' data-active>
            <House weight='fill' />
            Home
          </a>
          <a href='#' className='navigation__link'>
            <Hash />
            Explore
          </a>
          <a href='#' className='navigation__link'>
            <Bell />
            Notifications
          </a>
          <a href='#' className='navigation__link'>
            <Envelope />
            Messages
          </a>
          <a href='#' className='navigation__link'>
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href='#' className='navigation__link'>
            <FileText />
            Lists
          </a>
          <a href='#' className='navigation__link'>
            <User />
            Profile
          </a>
          <a href='#' className='navigation__link'>
            <DotsThree />
            More
          </a>
        </nav>

        <button className='button' type='button'>
          Tweet
        </button>
      </aside>
      <div className='content'>content</div>
    </div>
  </React.StrictMode>
)
