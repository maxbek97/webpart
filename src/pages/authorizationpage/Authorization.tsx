import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../mainpage/components/ActionButton';
import './Authorization.css';

const Authorization: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Данные для регистрации:', formData);
    alert('Аккаунт создан! (Это демо)');
  };

  const navigate = useNavigate();

  const handleAction = () => {
    navigate('/register');
  };

  return (
    <section id="auth" className="authorization-section">
      <div className="authorization-container">
        <div className="authorization-card">
          <h2 className="authorization-title">Войти в аккаунт</h2>

          <form className="authorization-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Электронная почта</label>
              <input 
                type="email" 
                required 
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="input-group">
              <label>Пароль</label>
              <input 
                type="password" 
                required 
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>

            <div className="authorization-footer">
              <ActionButton text="Войти" type="submit" />
            </div>
          </form>

          <p className="login-prompt">
            Нет аккаунта? <a onClick={handleAction}>Зарегистрироваться</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Authorization;