import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';

//context
import { Provider as AuthProvider } from './context/authContext';
import { Collections } from './pages/Collection';

import { AppInit } from './hoc/AppInit';

function WarKade() {
  return (
    <AuthProvider>
      <AppInit>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/collections' element={<Collections />}></Route>
          </Routes>
        </BrowserRouter>
      </AppInit>
    </AuthProvider>
  );
}
// export default withRefreshEffect(WarKade);
export default WarKade;
