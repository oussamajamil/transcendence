import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "http";
import { Socket } from "socket.io";
import {Engine} from 'matter-js'
import { GameService } from "./game.service";

@WebSocketGateway(3001, {cors:'localhost:8080'})
export class GameGetaway{
	@WebSocketServer()
	server: Server;

	game: GameService = null;

	connectedUsers : {id: string, client: Socket}[] = [];
	
	@SubscribeMessage('message')
	handleMessages(@MessageBody('data') message: string, @MessageBody('id') id : string, @ConnectedSocket() client: Socket): string{
		// client.send('message', {data:'go a way'});
		// console.log(message, id);
		// this.server.emit('message', message);
		// const index: boolean = !this.connectedUsers.findIndex((cnx)=>{cnx.id === id});
		// const i: number = index ? 1 : 0;
		if (this.connectedUsers.length > 1){
			client.broadcast.emit('message', {data: message, id: client.id})
			// const client: Socket = this.connectedUsers[i].client;
			// client.emit('message', {data: message, id: id});
			// console.log('message was sent');
		}
		return "hello there";
	}

	@SubscribeMessage('move')
	handleMovement(@MessageBody('x') x: number, @ConnectedSocket() sender: Socket){
		if (this.game)
			this.game.movePlayer(sender.id, x);
	}

	handleConnection(client: Socket) {
		console.log('hello there', client.id);
		this.connectedUsers.push({id: client.id, client: client});
		if (!this.game && this.connectedUsers.length == 2){
			console.log('the game is ready to use')
			this.game = new GameService(this.connectedUsers[0].client, this.connectedUsers[1].client, this.server);
			this.game.start();
		}
    }

	handleDisconnect(client: Socket) {
		let index: number = this.connectedUsers.findIndex((el) => {el.id === client.id});
		console.log(this.connectedUsers.length);
		if (index)
			this.connectedUsers.splice(index, 1);
        console.log('client disconnected');
		if (this.connectedUsers.length == 1){
			try{
				this.game.stop();
				this.game = null;
			}catch(err){

			}
		}
    }
}