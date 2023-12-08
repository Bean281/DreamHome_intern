import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Approutes from "./AppRoutes";


const router = createBrowserRouter(Approutes)

const Router = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Router;