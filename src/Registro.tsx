import { useState } from 'react';
import { registroUsuario, confirmarUsuario } from './services/authService';

export default function Registro() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [codigoConfirm, setCodigoConfirm] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [message, setMessage] = useState('');

    async function handleRegistro(e: React.FormEvent) {
        e.preventDefault();

        try {
            await registroUsuario(email, contraseña, nombre, apellido);
            setShowConfirmation(true);
            setMessage('Se envió un código a tu correo.');
        } catch (error) {
            console.error(error);
            setMessage('No se pudo crear la cuenta.');
        }
    }

    async function handleConfirm(e: React.FormEvent) {
        e.preventDefault();

        try {
            await confirmarUsuario(email, codigoConfirm);
            setMessage('¡Cuenta confirmada correctamente!');
        } catch (error) {
            console.error(error);
            setMessage('El codigo de confirmacion no es correcto.');
        }
    }

    return (
        <main>
            <h1>Crear una cuenta</h1>
            {!showConfirmation ? (
                <form onSubmit={handleRegistro}>

                    <div>
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="apellido">Apellido:</label>
                        <input
                            type="text"
                            id="apellido"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
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
                    <button type="submit">Crear cuenta</button>
                </form>
            ) : (
                <form onSubmit={handleConfirm}>
                    <div>
                        <label htmlFor="codigoConfirm">Código de confirmación:</label>
                        <input
                            type="text"
                            id="codigoConfirm"
                            value={codigoConfirm}
                            onChange={(e) => setCodigoConfirm(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Confirmar cuenta</button>
                </form>
            )}
            {message && <p>{message}</p>}
        </main>
    );
}