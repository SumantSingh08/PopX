
import { createRoot } from 'react-dom/client'
import {Provider } from 'react-redux'
import App from './App.jsx'
import store from './store/store.js'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Signup from './Pages/Signup.jsx'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Profile from './Pages/Profile.jsx'


const route = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>} >
    <Route  path='' element={<Home/>} />
    <Route path='signup' element={<Signup/>} />
    <Route path='login' element={<Login/>} />
    <Route path='account-settings' element={<Profile/>} />
  </Route>
))

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={route} />
  </Provider>
)
