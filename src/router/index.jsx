import { createBrowserRouter } from "react-router-dom";
import Home from "~/pages/home";
import Layout from "~/pages/layout";
import NotAvailable from "~/pages/not-available";
import Subscription from "~/pages/subscription";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'subscription',
                element: <Subscription/>
            }
        ]
    },
    {
        path: '*',
        element: <NotAvailable/>
    }
])