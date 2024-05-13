import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Vans from "./Pages/vans/Vans.jsx"
import { Detailloader as vanDetailLoader, loader as vansLoader } from "./Util/loader.js"
import VanDetail from "./Pages/vans/VanDetail.jsx"
import Layout from "./components/Layout.jsx"
import Dashboard from './Pages/host/Dashboard.jsx'
import Income from "./Pages/host/Income.jsx"
import Review from "./Pages/host/Review.jsx"
import HostVan from "./Pages/host/HostVan.jsx"
import HostLayout from "./components/HostLayout.jsx"
import HostVanDetail from "./Pages/host/HostVanDetail.jsx"
import Details from "./Pages/host/Details.jsx"
import HostVanPhotos from "./Pages/host/HostVanPhotos.jsx"
import HostVanPricing from "./Pages/host/HostVanPricing.jsx"
import NotFound from "./Pages/NotFound.jsx"
import Error from "./components/Error.jsx"
import './server.js'
import SignIn from "./Pages/SignIn.jsx"
import { hostLoader as hostVan } from "./Util/HostLoader.js"
import { loginLoader } from "./Util/LoginLoader.js"
import { loginAction } from "./Util/loginAction.js"
import { requireAuth } from "./Util/Util.js"



const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route 
    path="vans" 
    element={<Vans/>} 
    errorElement={<Error/>} 
    loader={vansLoader}
    />
    <Route 
     path="vans/:id" 
     element={<VanDetail/>}
     errorElement={<Error/>} 
     loader={vanDetailLoader}
    />

    <Route path="host" element={<HostLayout/>}>
      <Route
        index element={<Dashboard/>}
        errorElement={<Error/>} 
        loader={ requireAuth}
      />
      <Route
        path="income" element={<Income/>}
        loader={ requireAuth}
      />
      <Route
        path="reviews" element={<Review/>}
        errorElement={<Error/>}
        loader={ requireAuth}
      />
      <Route
        path="vans" element={<HostVan/>}
        errorElement={<Error/>}
        loader={ hostVan}
      />
      <Route path="vans/:id" element={<HostVanDetail />} errorElement={<Error/>}  loader={ hostVan}>
        <Route index element={<Details />} loader={requireAuth} />
        <Route path="pricing" element={<HostVanPricing />} loader={requireAuth} />
        <Route path="photos" element={<HostVanPhotos />} loader={requireAuth} />
      </Route>
    </Route>
    <Route path="*" element={<NotFound/>}/>
    <Route 
    path="login" 
    element={<SignIn/>} 
    errorElement={<Error/>} 
    loader={loginLoader}
    action={loginAction}/>
  </Route>
))

const App = () => {
  return (
    <>
      <div className=" h-full">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
