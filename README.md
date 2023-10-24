# ByteHive

A bring-your-own-client used to demo a Rust chat application.

Server hosted on [www.shuttle.rs](www.shuttle.rs), with a simple API that anyone can use.

Get the server going, connect to it at `wss://your-domain.shuttle.rs/ws`, and send a JSON formatted message to the server to get a response:

```json
{
  "name": "Your name",
  "message": "Hello, world!"
}
```

## Attribution

Original server code [curtesy of Shuttle.rs's documentation](https://docs.shuttle.rs/tutorials/websocket-chat-app-js#getting-started-with-rust)
