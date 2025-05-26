import { Client } from "@stomp/stompjs";

export type ChatInputProps = {
  roomId: number;
  senderId: number;
  client: Client | null;
};
