// DEPENDENCY
import { createBrowserRouter } from 'react-router-dom'

// COMPONENT
import { Timeline } from './pages/Timeline'
import { Status } from './pages/Status'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Timeline />,
  },
  {
    path: '/status',
    element: <Status />,
  },
])
