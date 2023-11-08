import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './pages/Error404';
import SiteDev from './site/SiteDev';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteDev />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;