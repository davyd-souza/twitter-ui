// DEPENDENCY
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

// COMPONENT
import { Sidebar } from './components/Sidebar'

// STYLE
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <Sidebar />

      <section className='content'>
        <RouterProvider router={router} />
      </section>
    </div>
  </React.StrictMode>
)
