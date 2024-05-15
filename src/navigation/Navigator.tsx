import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import { Home } from '../pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
]);

function Navigator() {
  return <RouterProvider router={router} />;
}

export default Navigator;
