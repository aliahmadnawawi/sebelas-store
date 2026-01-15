import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: { origin: '*', credentials: true },
  namespace: '/ws'
})
export class InboxGateway {
  @WebSocketServer()
  server!: Server;

  handleConnection(client: Socket) {
    client.emit('welcome', { message: 'Connected to Sebelas inbox.' });
  }

  @SubscribeMessage('join')
  handleJoin(@ConnectedSocket() client: Socket, @MessageBody() body: { storeId: string }) {
    if (body?.storeId) {
      client.join(`store:${body.storeId}`);
    }
    return { joined: body?.storeId || null };
  }

  @SubscribeMessage('message')
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: { storeId: string; channel: string; text: string }
  ) {
    const payload = {
      id: Date.now().toString(),
      storeId: body.storeId,
      channel: body.channel,
      text: body.text,
      from: 'agent',
      timestamp: new Date().toISOString()
    };
    if (body?.storeId) {
      this.server.to(`store:${body.storeId}`).emit('message', payload);
    }
    return payload;
  }
}
