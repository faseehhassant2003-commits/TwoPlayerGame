import { useEffect, useState } from "react";

function Game({ roomCode }) {

    const [connected, setConnected] = useState(false);
    const [messages, setMessages] = useState([]);

    useEffect(() => {

        const socket = new WebSocket(
            `ws://localhost:8080/ws?roomCode=${roomCode}`
        );

        socket.onopen = () => {
            setConnected(true);
            console.log("WebSocket connected");
        };

        socket.onmessage = (event) => {
            setMessages((prev) => [...prev, event.data]);
        };

        socket.onclose = () => {
            setConnected(false);
            console.log("WebSocket disconnected");
        };

        socket.onerror = (error) => {
            console.log("WebSocket error:", error);
        };

        return () => {
            socket.close();
        };

    }, [roomCode]);

    return (
        <div>
            <h1>Guess 🎯</h1>

            <h2>Room: {roomCode}</h2>

            <p>
                Status:{" "}
                {connected ? "🟢 Connected" : "🔴 Disconnected"}
            </p>

            <hr />

            <h3>Messages</h3>

            {messages.map((message, index) => (
                <p key={index}>
                    {message}
                </p>
            ))}
        </div>
    );
}

export default Game;