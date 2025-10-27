import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom"
import {App} from "../App.tsx";
import {Error404} from "../components/pages/Error404.tsx";
import {Adidas} from "../components/pages/Adidas.tsx";
import {Puma} from "../components/pages/Puma.tsx";
import {Abibas} from "../components/pages/Abibas.tsx";
import {Prices} from "../components/pages/Prices.tsx";
import {Model} from "../components/pages/Model.tsx";
import {ProtectedPage} from "../components/pages/ProtectedPage.tsx";
import {Login} from "../components/pages/Login.tsx";
import {PrivateRoutes} from "../components/pages/PrivateRoutes.tsx";

const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  ABIBAS: '/abibas',
  MODEL: '/:model/:id',
  PRICES: '/prices',
  PROTECTEDPAGE: '/protectedPage',
  ERROR: '/error',
  LOGIN: '/login'
} as const

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Adidas/>
  },
  {
    path: PATH.ADIDAS,
    element: <Adidas/>
  },
  {
    path: PATH.PUMA,
    element: <Puma/>
  },
  {
    path: PATH.MODEL,
    element: <Model/>
  },
  {
    path: PATH.ABIBAS,
    element: <Abibas/>
  },
  {
    path: PATH.PRICES,
    element: <Prices/>
  },
  {
    path: PATH.LOGIN,
    element: <Login/>
  },
  {
    path: PATH.ERROR,
    element: <Error404/>
  }
]

const privateRoutes: RouteObject[] = [
  {
    path: PATH.PROTECTEDPAGE,
    element: <ProtectedPage/>
  },
]

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Navigate to={PATH.ERROR}/>,
    children: [
      {
        element: <PrivateRoutes/>,
        children: privateRoutes
      },
      ...publicRoutes,
    ]
  },
])