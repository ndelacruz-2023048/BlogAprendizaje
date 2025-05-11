import {createBrowserRouter, RouterProvider} from 'react-router'
import { HomePage } from '../pages/HomePage'
import { PostPage } from '../pages/PostPage'


const router = createBrowserRouter([
    {
        path:'/',
        element: <HomePage/>
    },
    {
        path:'/post/:id',
        element:(
             <PostPage/>
        )
    }
])

const MyRoutes =()=><RouterProvider router={router}/>

export default MyRoutes