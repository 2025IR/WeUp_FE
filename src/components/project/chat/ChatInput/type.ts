import { Client } from "@stomp/stompjs";

export type ChatInputProps = {
  roomId: number;
  client: Client | null;
};
