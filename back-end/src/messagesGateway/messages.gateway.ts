import {
  WebSocketGateway,
  SubscribeMessage,
  OnGatewayInit,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Client } from 'socket.io/dist/client';
import { PrismaService } from 'src/prisma.service';

@WebSocketGateway()
export class MessagesGateway implements OnGatewayInit {
  constructor(private prisma: PrismaService) {}
  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {
    console.log('Socket gateway initialized');
  }

  @SubscribeMessage('join')
  handleJoin(client: any, payload: { userId: string; channelId: string }) {
    client.join(payload.channelId);
    console.log('Joined channel', payload.channelId);
  }

  @SubscribeMessage('message')
  handleMessage(
    client: any,
    payload: {
      userId: string;
      channelId: string;
      message: string;
    },
  ) {
    console.log('Received message', payload);
    this.prisma.message.create({
      data: {
        content: payload.message,
        groupId: payload.channelId,
        userId: payload.userId,
      },
    });
    client.to(payload.channelId).emit('message', payload);
  }

  @SubscribeMessage('leave')
  handleLeave(client: any, payload: { userId: string; channelId: string }) {
    {
      client.leave(payload.channelId);
    }
  }
}
