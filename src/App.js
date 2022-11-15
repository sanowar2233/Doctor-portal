
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Register from './Pages/Register/Register';
import DashBoard from './Pages/DashBoard/DashBoard';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './Layout/PrivateRote/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path:'/', element:<Main></Main>,  children:[
        {
          path:'/', element: <Home></Home>
        },
        {
          path:'/login', element:<Login></Login>
        },
        {
          path:'/about' , element:<About></About>
        },
        {
          path:'/appointment', element:<Appointment></Appointment>
        },
        {
          path:'/register', element:<Register></Register>
        },
        {
          path:'/dashboard', element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
        }
        
      ]
    }
  ])
  return (
    <div className='container mx-auto' >
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
