import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mainpage from './pages/mainpage/mainpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Registration from './pages/registrationpage/Registration';
import Authorization from './pages/authorizationpage/Authorization';

function App() {
return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            {/* Главная страница */}
            <Route path="/" element={
                <Mainpage />
            } />

            {/* Страница регистрации */}
            <Route path="/register" element={
              <Registration />
            } />

            {/* Страница авторизации */}
            <Route path="/auth" element={
              <Authorization/>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
