export interface ClientToServerMessage {
  message: string;
}

export interface ServerToClientMessage {
  status: "received";
  received: ClientToServerMessage;
}
