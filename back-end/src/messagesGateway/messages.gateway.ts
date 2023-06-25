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
  async handleMessage(
    client: any,
    payload: {
      userId: string;
      channelId: string;
      message: string;
    },
  ) {
    console.log({
      payload,
    });
    const message = await this.prisma.message.create({
      data: {
        content: payload.message,
        channel: {
          connect: {
            id: payload.channelId,
          },
        },
        user: {
          connect: {
            id: payload.userId,
          },
        },
      },
    });
    console.log(message);
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

// import {
//   WebSocketGateway,
//   WebSocketServer,
//   SubscribeMessage,
//   MessageBody,
//   OnGatewayConnection,
//   OnGatewayDisconnect,
// } from '@nestjs/websockets';
// import { Server, Socket } from 'socket.io';
// // import { PrismaService } from './prisma.service';
// // import { Message } from './message.model';

// @WebSocketGateway()
// export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
//   @WebSocketServer()
//   server: Server;

//   connectedClients: number = 0;

//   constructor(private prisma: PrismaService) {}

//   handleConnection(client: Socket) {
//     this.connectedClients++;
//     this.server.emit('clients', this.connectedClients);
//   }

//   handleDisconnect(client: Socket) {
//     this.connectedClients--;
//     this.server.emit('clients', this.connectedClients);
//   }

//   @SubscribeMessage('chat')
//   async handleMessage(@MessageBody() data: string): Promise<string> {
//     const message: Message = { content: data };
//     await this.prisma.message.create({ data: message });

//     this.server.emit('chat', data);
//     return data;
//   }
// }
