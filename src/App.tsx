import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'


import {HomePage, AddNotePage, EditNotePage, ArchiveNotePage} from './pages/index'
import Layout from './components/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path = "/add" element = {<AddNotePage />} />
            <Route path = "/edit/:id" element = {<EditNotePage />} />
            <Route path="/archive" element={<ArchiveNotePage />} />
          </Route>
            <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;