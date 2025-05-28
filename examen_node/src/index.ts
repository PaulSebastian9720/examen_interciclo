import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3000 });
const anyWord = [
  "hola",
  "mundo",
  "websocket",
  "servidor",
  "conexión",
  "mensaje",
  "cliente",
  "conectar",
  "desconectar",
  "broadcast",
  "evento",
  "respuesta",
  "enviar",
  "recibir",
  "comunicación",
  "asíncrono",
  "promesa",
  "callback",
  "error",
  "excepción",
  "json",
];

wss.on("connection", async (ws: WebSocket) => {
  console.log("Cliente conectado");

  for (let i = 0; i < anyWord.length; i++) {
    setTimeout(() => {
      ws.send(
        JSON.stringify({ type: "words", message: anyWord.slice(0, i + 1) })
      );
    }, 1000);
  }
});

console.log("Server se levanto en el puerto 3000");
