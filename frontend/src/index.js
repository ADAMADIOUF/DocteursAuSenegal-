import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import HomePage from './pages/HomePage';
import CentreAide from './pages/CentreAide';
import  store  from './store'
import { Provider } from 'react-redux'
import Doctors from './pages/Doctors';
import SingleDoctor from './pages/SingleDoctor';
import BookingSuccess from './pages/MyAppointments';
import Login from './pages/Login';
import MyAppointments from './pages/MyAppointments';
import RegisterScreen from './pages/Register';
import PrivateRoute from './components/PrivateRoute';
import ProfileScreen from './pages/Profile';
import DoctorRoute from './components/DoctorRoute';
import DoctorAppointments from './pages/DoctorAppointments';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomePage />} />
      <Route path='/search/:keyword' element={<HomePage />} />
      <Route path='/centre-aide' element={<CentreAide />} />
      <Route path='/all-doctors' element={<Doctors />} />
      <Route path='/doctor/:id' element={<SingleDoctor />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/booking-success' element={<BookingSuccess />} />

      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<ProfileScreen />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
      </Route>
      <Route path='' element={<DoctorRoute />}>
        <Route
          path='/doctor/doctor-appointments'
          element={<DoctorAppointments />}
        />
      </Route>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
