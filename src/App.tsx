import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';

//context
import { Provider as AuthProvider } from './context/authContext';
import { Collections } from './pages/Collection';

import { getLocalStorageItem } from './utils/localstorageService';

function WarKade() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/collections' element={<Collections />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
// export default withRefreshEffect(WarKade);
export default WarKade;

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

// var urlencoded = new URLSearchParams();
// urlencoded.append("txn", "0x1a631a5605d862c43d70a803b984bbeb85d6b50df9cea461896472c2a0a2b341");

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: urlencoded,
//   redirect: 'follow'
// };

// fetch("https://api.aptoswarcade.com/generate", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
