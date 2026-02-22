import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../mainpage/components/ActionButton';
import './Authorization.css';


const Authorization: React.FC = () => {
  const navigate = useNavigate();

    const [formData, setFormData] = useState({
    userEmail: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userEmail: formData.userEmail,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || 'Ошибка авторизации');
        return;
      }

      // 🔐 сохраняем токены
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      alert('Успешный вход!');
      navigate('/'); // редирект на главную
    } catch (error) {
      console.error(error);
      alert('Ошибка соединения с сервером');
    }
  };

  

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
                value={formData.userEmail}
                onChange={(e) => setFormData({...formData, userEmail: e.target.value})}
              />
            </div>

            <div className="input-group">
              <label>Пароль</label>
              <input 
                type="password" 
                required 
                value={formData.password}
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