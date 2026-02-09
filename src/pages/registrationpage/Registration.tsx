import React, { useState } from 'react';
import ActionButton from '../mainpage/components/ActionButton';
import './Registration.css';

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Данные для регистрации:', formData);
    alert('Аккаунт создан! (Это демо)');
  };

  return (
    <section id="auth" className="registration-section">
      <div className="registration-container">
        <div className="registration-card">
          <h2 className="registration-title">Создать аккаунт</h2>
          <p className="registration-subtitle">Опробуйте гиперреальность IVANVISON</p>

          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Электронная почта</label>
              <input 
                type="email" 
                required 
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="input-group">
              <label>Имя пользователя</label>
              <input 
                type="text" 
                required 
                onChange={(e) => setFormData({...formData, username: e.target.value})}
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

            <div className="registration-footer">
              <ActionButton text="Зарегистрироваться" type="submit" />
            </div>
          </form>

          <p className="login-prompt">
            Уже есть аккаунт? <a href="#login">Войти</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;