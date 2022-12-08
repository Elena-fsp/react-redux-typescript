import {Route, Routes} from 'react-router-dom';
import { CarsPage  } from '../pages/CarsPage';
import { ErrorPage } from '../pages/ErrorPage';
import { MainPage } from '../pages/MainPage';
import DriversList from '../pages/DriversPage'
import { navigation } from './navigation';

export const Router = () => (
  <Routes>
    <Route path={navigation.main.path} element={<MainPage/>} />
    <Route path={navigation.cars.path} element={<CarsPage/>} />
    <Route path={navigation.redirect.path} element={<ErrorPage/>} />
  </Routes>
)
