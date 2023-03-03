// DEPENDENCY
import React from 'react'
import ReactDOM from 'react-dom/client'

// COMPONENT
import { Sidebar } from './components/Sidebar'
import { Timeline } from './pages/Timeline'

// STYLE
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <Sidebar />

      <section className='content'>
        <Timeline />
      </section>
    </div>
  </React.StrictMode>
)
