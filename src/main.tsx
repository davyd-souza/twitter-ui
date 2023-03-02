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
  Sparkle,
} from 'phosphor-react'

// ASSET
import twitterLogo from './assets/twitter-logo.svg'
import { Tweet } from './components/Tweet'

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
      <section className='content'>
        <main className='timeline'>
          <header className='timeline__header'>
            <h2 className='timeline__title'>Home</h2>
            <Sparkle />
          </header>

          <form className='new-tweet-form'>
            <div className='new-tweet-form__group'>
              <img
                className='user-avatar'
                src='https://github.com/davyd-souza.png'
                alt='Davyd Souza'
              />
              <textarea
                className='new-tweet-form__textarea'
                name='tweet'
                id='tweet'
                placeholder='What&lsquo;s happening?'
                // rows={1}
              />
            </div>

            <button className='button' type='submit'>
              Tweet
            </button>
          </form>

          <div className='separator' />

          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </section>
    </div>
  </React.StrictMode>
)
