import React from 'react';
import '../pages/Login.css';
import 'boxicons/css/boxicons.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const res = await axios.post('http://127.0.0.1:8000/api/login', {
                email,
                password,
            });

            if (res.data.success) {
                alert('Inicio de sesión exitoso');
                localStorage.setItem('userEmail', email);
                form.reset();
                navigate('/aprendizaje-individual');
            } else {
                alert('Credenciales incorrectas');
            }
        } catch (err) {
            alert('Error al iniciar sesión: ' + (err.response?.data?.message || err.message));
        }
    };

    return (
        <div className="container" style={{ maxWidth: "400px", margin: "60px auto" }}>
            <div className="form-box login" style={{ width: "100%", position: "relative", right: "auto" }}>
                <form onSubmit={handleLogin}>
                    <h1>Inicio de sesion</h1>
                    <div className="input-box">
                        <input type="email" name="email" placeholder="Email" required />
                        <i className="bx bxs-user"></i>
                    </div>
                    <div className="input-box">
                        <input type="password" name="password" placeholder="Password" required />
                        <i className="bx bxs-lock-alt"></i>
                    </div>
                    
                    <button type="submit" className="btn">Iniciar</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
