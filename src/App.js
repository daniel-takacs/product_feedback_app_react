import React, { useContext, useState } from 'react'
import './App.css';
import { PostProvider } from './context/PostContext'
import { CategoryProvider } from './context/CategoryContext'
import { SortProvider } from './context/SortContext'
import './global.css';
import Home from './pages/Home/Home'
import CreateFeedback from './pages/AddFeedback/CreateFeedback';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SortContext } from './context/SortContext'
import { CategoryContext } from './context/CategoryContext'

function App() {

  const [sorted, setSorted] = useState('most-upvotes')
  const [category, setCategory] = useState('all')

  return (
    <PostProvider>
      <CategoryContext.Provider value={{category}}>
        <SortContext.Provider value={{sorted}}>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateFeedback />} />
            </Routes>
          </Router>
        </div>
        </SortContext.Provider>
      </CategoryContext.Provider>
    </PostProvider>
  );
}

export default App;
