// DEPENDENCY
import { Outlet } from 'react-router-dom'

// COMPONENT
import { Sidebar } from '../../components/Sidebar'

// STYLE
import './Default.css'

export function Default() {
  return (
    <div className='layout'>
      <Sidebar />

      <section className='content'>
        <Outlet />
      </section>
    </div>
  )
}
