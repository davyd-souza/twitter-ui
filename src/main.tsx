// DEPENDENCY
import React from 'react'
import ReactDOM from 'react-dom/client'

// COMPONENT
import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'

// STYLE
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <Sidebar />

      <section className='content'>
        <main className='timeline'>
          <Header title='Home' />

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
