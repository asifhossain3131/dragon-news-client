import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CategoryNews from "../pages/public/CategoryNews";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/category/:id',
                element: <CategoryNews></CategoryNews>
            }
        ]
    }
])

export default router