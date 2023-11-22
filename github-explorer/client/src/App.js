// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import UserDetails from './components/UserDetails';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/user/:username" element={<UserDetails user={user} setUser={setUser} />} />
        <Route path="/" element={<Search setUser={setUser} />} />
      </Routes>
    </Router>
  );
};

export default App;
