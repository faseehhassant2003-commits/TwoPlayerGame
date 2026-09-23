package game.multiPlayerGame.room;

import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequestMapping("/api/rooms")
public class RoomController {

    private final Map<String, GameRoom> rooms = new ConcurrentHashMap<>();

    @PostMapping("/create")
    public GameRoom createRoom(@RequestParam String gameType) {

        String roomCode = UUID.randomUUID()
                .toString()
                .substring(0, 6)
                .toUpperCase();

        GameRoom room = new GameRoom(roomCode, gameType);

        rooms.put(roomCode, room);

        return room;
    }
}