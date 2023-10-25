import WebSocket from "ws";
import "dotenv/config";
import moment from "moment";

const BYTEHIVE_WS_URL = process.env.BYTEHIVE_WS_URL;

const ws = new WebSocket(BYTEHIVE_WS_URL);

ws.on("error", console.error);

ws.on("open", function open() {
  ws.send("something");
});

ws.on("message", function message(data) {
  const message = JSON.parse(data);
  const timestamp = moment().format("LTS");

  WriteOut(`| ${timestamp} | ${message.name} :: ${message.message} \n`);
});

function WriteOut(message) {
  process.stdout.write(message);
}

// Some welcome text
WriteOut(" ================ ByteHive Node Client v1.0.0 ==============\n\n");
