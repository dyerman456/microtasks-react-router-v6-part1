import {createBrowserRouter} from "react-router-dom"
import {App} from "../App.tsx";
import {Error404} from "../components/pages/Error404.tsx";
import {Adidas} from "../components/pages/Adidas.tsx";
import {Puma} from "../components/pages/Puma.tsx";
import {Abibas} from "../components/pages/Abibas.tsx";
import {Prices} from "../components/pages/Prices.tsx";
import {Model} from "../components/pages/Model.tsx";
import {ProtectedPage} from "../components/pages/ProtectedPage.tsx";
import {ProtectedRoute} from "./ProtectedRoute.tsx";

const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  ABIBAS: '/abibas',
  MODEL: '/:model/:id',
  PRICES: '/prices',
  PROTECTEDPAGE: '/protectedPage',
  ERROR: '/error',
} as const

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error404/>,
    children: [
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
        path: PATH.PROTECTEDPAGE,
        element:
        <ProtectedRoute>
          <ProtectedPage/>
        </ProtectedRoute>
      },
      {
        path: PATH.ERROR,
        element: <Error404/>
      }
    ]
  },
])
