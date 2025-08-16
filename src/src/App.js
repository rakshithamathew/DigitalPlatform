import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeMain from './components/Home/HomeMain';
import Seller from './components/Home/Seller';
import Buyer from './components/Home/Buyer';
import SignUpPage from './components/Home/SignUpPage';
import SellerBuyer from './components/Home/SellerBuyer';


const App = () => {
   const router = createBrowserRouter([
      {
        path: "/",
        element:<HomeMain/>,  
      },
      {
        path:"/Buyer",
        element: <Buyer />
      },
      {
        path:"/Seller",
        element: <Seller />
      },
      {
        path:"/SignUpPage",
        element: <SignUpPage />
      },
      {
        path:"/SellerBuyer",
        element: <SellerBuyer />
      }

   ])
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  )
}

export default App