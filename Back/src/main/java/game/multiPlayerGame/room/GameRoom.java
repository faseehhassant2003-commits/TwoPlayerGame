package game.multiPlayerGame.room;

public class GameRoom {

    private String roomCode;
    private String gameType;
    private int players;

    public GameRoom(String roomCode, String gameType) {
        this.roomCode = roomCode;
        this.gameType = gameType;
        this.players = 1;
    }

    public String getRoomCode() {
        return roomCode;
    }

    public String getGameType() {
        return gameType;
    }

    public int getPlayers() {
        return players;
    }

    public void addPlayer() {
        players++;
    }
}