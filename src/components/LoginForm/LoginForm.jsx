import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!username || !password) {
            setError('შეიყვანეთ ლოგინი და პაროლი');
            return;
        }

        try {
            await onLogin(username, password);
            setError(''); // Clear any previous errors on successful login
        } catch (err) {
            setError('არასწორი ლოგინი ან პაროლი');
        }
    };

    return (
        <div className="login-form">
            <h2>ადმინ პანელში შესვლა</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Логин"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">შესვლა</button>
            </form>
        </div>
    );
};

export default LoginForm;