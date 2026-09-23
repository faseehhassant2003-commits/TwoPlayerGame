import { useState } from "react";
import api from "../services/api";
import Game from "./Game";

function Home() {

    const [roomCode, setRoomCode] = useState("");
    const [createdRoom, setCreatedRoom] = useState(null);
    const [message, setMessage] = useState("");

    const createRoom = async () => {
        try {

            const response = await api.post(
                "/rooms/create?gameType=GUESS"
            );

            setCreatedRoom(response.data);
            setRoomCode(response.data.roomCode);
            setMessage("");

        } catch (error) {
            setMessage("Failed to create room");
        }
    };

    const joinRoom = async () => {
        try {

            const response = await api.post(
                `/rooms/join?roomCode=${roomCode}`
            );

            setCreatedRoom(response.data);
            setRoomCode(response.data.roomCode);
            setMessage("");

        } catch (error) {
            setMessage("Room not found or room is full");
        }
    };

    if (createdRoom) {
        return <Game roomCode={roomCode} />;
    }

    return (
        <div>

            <h1>Guess 🎯</h1>

            <h2>2 Player Game</h2>

            <hr />

            <h3>Create Room</h3>

            <button onClick={createRoom}>
                Create Room
            </button>

            <hr />

            <h3>Join Room</h3>

            <input
                type="text"
                placeholder="Enter room code"
                value={roomCode}
                onChange={(e) =>
                    setRoomCode(e.target.value.toUpperCase())
                }
            />

            <button onClick={joinRoom}>
                Join Room
            </button>

            {message && <p>{message}</p>}

        </div>
    );
}

export default Home;