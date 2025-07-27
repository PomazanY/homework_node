import { useState, useEffect } from "react";
import io from "socket.io-client";

import MessageForm from "../../components/MessageForm/MessageForm";
import MessagesList from "../../components/MessagesList/MessagesList";

const socket = io.connect(`${import.meta.env.VITE_WEBSOCKET_URL}`);

const Chat = () => {

    const [messagesAll, setMessagesAll] = useState([]);

    const submitForm = (message) => {
        // повідомлення від юзера обгортаємо в об'єкт
        const newMessage = { author: "User", text: message };
        // одразу показати повідомлення юзера
        setMessagesAll(prev => [...prev, newMessage]);
        // надсилаємо тільки текст
        socket.emit("message", message);
    };

    useEffect(() => {

        // Усі вхідні повідомлення від сервера обгортаємо в об'єкт { author: "Server", text: message }

        // Отримуємо привітання від сервера
        socket.on("welcome", (message) => {
            setMessagesAll(prev => [...prev, { author: "Server", text: message }]);
        });

        // Отримуємо відповідь на повідомлення
        socket.on("reply", (message) => {
            setMessagesAll(prev => [...prev, { author: "Server", text: message }]);
        });

        return () => {
            socket.off("welcome");
            socket.off("reply");
        };
    }, []);

    return (
        <main>
            <h1>Simple chat</h1>
            <MessagesList items={messagesAll} />
            <MessageForm submitForm={submitForm} />
        </main>
    )
};

export default Chat;