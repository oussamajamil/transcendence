import {
  WebSocketGateway,
  SubscribeMessage,
  OnGatewayInit,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChannelType } from '@prisma/client';
import { Server } from 'socket.io';
import { Client } from 'socket.io/dist/client';
import { PrismaService } from 'src/prisma.service';

@WebSocketGateway({ cors: true })
export class MessagesGateway implements OnGatewayInit {
  constructor(private prisma: PrismaService) {}
  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {
    console.log('Socket gateway initialized');
  }

  @SubscribeMessage('join')
  async handleJoin(
    client: any,
    payload: {
      userId: string;
      channelId: string;
      type: ChannelType;
      name: string;
    },
  ) {
    client.join(payload.channelId);
    await this.prisma.channel.create({
      data: {
        type: payload.type || 'DM',
        name: payload.name,
      },
    });
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
  @SubscribeMessage('test')
  testmsg(client: any, payload: any) {
    console.log('test', payload);
    let i = 0;
    while (i++ < 100) {
      client.emit('test', payload);
    }
  }
}
