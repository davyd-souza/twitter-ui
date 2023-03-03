// DEPENDENCY
import { Outlet } from 'react-router-dom'

// COMPONENT
import { Sidebar } from '../../components/Sidebar'

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
