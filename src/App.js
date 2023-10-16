import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import RootLayout from './UI/RootLayout';
import Home from './pages/Home';
import Crew from './pages/Crew';
import Destination from './pages/Destination'
import Technology from './pages/Technology'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/destination', element: <Destination /> },
      { path: '/crew', element: <Crew /> },
      { path: '/technology', element: <Technology /> }
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
