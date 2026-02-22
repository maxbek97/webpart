import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../mainpage/components/ActionButton';
import './Registration.css';


const Registration: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userEmail: '',
    userLogin: '',
    password: '',
  });

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || 'Ошибка регистрации ');
        return;
      }

      alert('Регистрация успешна!');
      navigate('/auth');
    } catch (error) {
      console.error(error);
      alert('Ошибка соединения с сервером');
    }
  };

  

  const handleAction = () => {
    navigate('/auth');
  };

  return (
    <section id="reg" className="registration-section">
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
                value={formData.userEmail}
                onChange={(e) => setFormData({...formData, userEmail: e.target.value})}
              />
            </div>

            <div className="input-group">
              <label>Имя пользователя</label>
              <input 
                type="text" 
                required 
                value={formData.userLogin}
                onChange={(e) => setFormData({...formData, userLogin: e.target.value})}
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

            <div className="registration-footer">
              <ActionButton text="Зарегистрироваться" type="submit" />
            </div>
          </form>

          <p className="login-prompt">
            Уже есть аккаунт? <a onClick={handleAction}>Войти</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;