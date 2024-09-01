import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error";
import Register from "../pages/Register/Register";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import ViewedProp from "../pages/ViewedProp/ViewedProp";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import UpdateProfile from "../pages/UpdateProfle/UpdateProfile";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error> ,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('/estates.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/update',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/estates/:id',
                element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
                loader: () => fetch('/estates.json')
            },
            {
                path: '/viewed',
                element: <PrivateRoute><ViewedProp></ViewedProp></PrivateRoute>,
                loader: () => fetch('/estates.json')
            }
        ]
    }
])

export default router;