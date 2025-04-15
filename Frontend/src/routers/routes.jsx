import {createBrowserRouter, RouterProvider} from 'react-router'
import { HomePage } from '../pages/HomePage'

const router = createBrowserRouter([
    {
        path:'/',
        element: <HomePage/>
    }
])

const MyRoutes =()=><RouterProvider router={router}/>

export default MyRoutes