import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App'

import {loader as projectLoader} from "./Room";
import * as THREE from 'three';
import {extend,createRoot,events} from "@react-three/fiber";
import {create3DCanvas} from "./components/root";

extend(THREE);

const {injectCanvas, r3fState} = create3DCanvas();

const router = createBrowserRouter([
    {
        path: "/",
        element: <App injectCanvas={injectCanvas} />,
        // loader: projectLoader,
        children: [{
                element: <App/>,
                path: "/:projId",
            }]
    }]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
);
