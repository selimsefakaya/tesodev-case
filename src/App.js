import React from 'react'
import { AppContext } from "./context"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/Home/HomePage"
import AddRecordPage from "./pages/AddRecord/AddRecordPage"
import SearchPage from './pages/SearchPage/SearchPage'
import NotFound from './pages/NotFound/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <AppContext>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="add-new-record" element={<AddRecordPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext>
    </BrowserRouter>
  )
}

export default App