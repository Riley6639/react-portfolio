// import the React and ReactDOM libraries

import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import About from './pages/about'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio'
import Resume from './pages/resume'
import Error from './pages/error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,  
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/Resume',
        element: <Resume />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);


