import {createBrowserRouter, RouterProvider} from "react-router";
import Root from "./components/Root.tsx";
import "./App.css";

export default function App() {

    const router = createBrowserRouter(
        [
            {path: "*", Component: Root}
        ]
    )

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}
