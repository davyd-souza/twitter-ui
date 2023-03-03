// DEPENDENCY
import { createBrowserRouter } from 'react-router-dom'

// COMPONENT
import { Timeline } from './pages/Timeline'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Timeline />,
  },
])
