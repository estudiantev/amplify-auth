import { useState } from 'react';
import { loginUsuario } from './services/authService';

export default function Login() {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [message, setMessage] = useState(''); 

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        try {
            const result = await loginUsuario(email, contraseña);
            console.log('Usuario logueado:', result);
            setMessage('¡Inicio de sesión exitoso!');
        } catch (error) {
            console.error(error);
            setMessage('Correo o contraseña incorrectos.');
        }
    }
    return (
        <main>
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Correo electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contraseña">Contraseña:</label>
                    <input
                        type="password"
                        id="contraseña"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
            {message && <p>{message}</p>}
        </main>
    );
}