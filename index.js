import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app/App.jsx';
import './pages/app/App.scss';
import Contato from './pages/contato/index.jsx';
import './pages/contato/index.scss';
import './pages/notfound/index.scss';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
          <Routes>
              <Route path='/' element ={<App/>}/>  
              <Route path='/Contato' element ={<Contato/>}/>  
          </Routes>
        </BrowserRouter>
  </React.StrictMode>
);