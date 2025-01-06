import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Success from './Pages/Success.jsx'
import Cancel from './Pages/Cancel.jsx'
import Home from './Pages/Home.jsx'
import Layout from './Layout.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"success",
        element:<Success/>
      },
      {
        path:"cancel",
        element:<Cancel/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
