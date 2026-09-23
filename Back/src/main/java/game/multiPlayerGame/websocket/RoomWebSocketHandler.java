package game.multiPlayerGame.websocket;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Component
public class RoomWebSocketHandler extends TextWebSocketHandler {

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        System.out.println("✅ WebSocket connected: " + session.getId());

        session.sendMessage(
                new TextMessage("Connected successfully!")
        );
    }

    @Override
    protected void handleTextMessage(
            WebSocketSession session,
            TextMessage message) throws Exception {

        System.out.println("📩 Received: " + message.getPayload());

        session.sendMessage(
                new TextMessage("Server received: " + message.getPayload())
        );
    }
}