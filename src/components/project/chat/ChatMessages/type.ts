import { Client } from "@stomp/stompjs";

export type ChatMessagesProps = {
  roomId: number;
  client: Client | null;
};
