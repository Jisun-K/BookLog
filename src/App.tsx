import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './component/page/Main';
import BookDetail from './component/page/BookDetail';
import Home from './component/page/Home';
import { AppProvider } from './context/AppContext';
import WriteReport from './component/page/WriteReport';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route index element={<Home />} />
            <Route path='/books/:id' element={<BookDetail />} />
            <Route path='/write/:id' element={<WriteReport />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
