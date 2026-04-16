import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/content/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Work from './pages/Work.jsx'
import Testimonial from './pages/Testimonial.jsx'

//router 객체 생성
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,  // Layout 구성 컴포넌트 정의 : App.jsx는 미리 생성되어있음
    children: [
      {index: true, element: <Home/>},
      {path: "/about", element: <About/>},
      {path: "/skills", element: <Skills/>},
      {path: "/work", element: <Work/>},
      {path: "/testimonial", element: <Testimonial/>},
    ],
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
)
