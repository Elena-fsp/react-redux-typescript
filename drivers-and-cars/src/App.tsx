import React, { FC } from "react";
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router'


const App: FC = () => (
  <div>
  <BrowserRouter>
  <Router />
  </BrowserRouter>
  </div>
)

export default App;
