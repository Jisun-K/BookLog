import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './component/page/Main';
import BookDetail from './component/page/BookDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path='/books/:id' element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
