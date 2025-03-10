import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './component/page/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
