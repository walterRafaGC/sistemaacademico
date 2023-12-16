import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Asegúrate de tener axios instalado: npm install axios

function ChatBox() {
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([]);

    const sendMessage = async () => {
        try {
            await axios.post('http://localhost:8080/api/chat/send', { message });
            // Limpiar el mensaje después de enviarlo, si es necesario
            setMessage('');
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
        }
    };

    useEffect(() => {
        // Lógica para recibir mensajes del servidor
        const interval = setInterval(async () => {
            try {
                const response = await axios.get('URL_PARA_RECIBIR_MENSAJES_DEL_SERVIDOR');
                // Actualizar el estado con los mensajes recibidos del servidor
                setChatMessages(response.data);
            } catch (error) {
                console.error('Error al recibir mensajes del servidor:', error);
            }
        }, 2000); // Intervalo de tiempo para obtener mensajes (ejemplo: cada 2 segundos)

        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }, []);

    return (
        <div>
            <div id="chat">
                {/* Mostrar los mensajes del chat */}
                {chatMessages.map((chatMessage, index) => (
                    <div key={index}>{chatMessage}</div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe un mensaje..."
            />
            <button onClick={sendMessage}>Enviar</button>
        </div>
    );
}

export default ChatBox;
