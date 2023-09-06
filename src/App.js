import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Blog from './components/Blog';
import BlogDetail from './components/BlogPost';
import Store from './components/Store';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/account" element={<Signin />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
  );
}

export default App;