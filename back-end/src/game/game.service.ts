import { Injectable } from "@nestjs/common";
import Matter, { Bodies, Composite, Engine, Events, Runner, Body } from "matter-js";
import { Server } from "node:http";
import { Socket } from "socket.io";

@Injectable()
export class GameService{
	engine:		Engine;
	walls:		Matter.Body[];
	ball:		Matter.Body;
	racketP1:	Matter.Body;
	racketP2:	Matter.Body;
	runner:		Runner;

	width:		number = 600;
	height:		number = Math.round(600 * 11 / 9);
	goalY: 		number = 25;
	goalWidth: 	number = 180;
	ballR: 		number = 12;

	constructor(public player1: Socket, public player2: Socket, public server: Server){
		this.engine = Engine.create({gravity:{x: 0, y: 0}});
		this.walls = [Bodies.rectangle(0, this.height / 2, 10, this.height, {isStatic: true,   density:5})
					,Bodies.rectangle(this.width / 2, 0, this.width, 10, {isStatic: true,   density:5, label: 'goal2'})
					,Bodies.rectangle(this.width, this.height / 2, 10, this.height, {isStatic: true, density:5})
					,Bodies.rectangle(this.width / 2, this.height, this.width, 10, {isStatic: true, density:5, label: 'goal1'})];
		this.ball = Bodies.circle(this.width / 2, this.height / 2, this.ballR, {density: 0.1, label: "ball", inertia: Infinity, restitution: 1, friction: 0, frictionAir: 0});
		this.racketP1 = Bodies.rectangle(this.width / 2, this.height - this.goalY, this.goalWidth, 10, {isStatic: true});
		this.racketP2 = Bodies.rectangle(this.width / 2, this.goalY, this.goalWidth, 10, {isStatic: true});
		Composite.add(this.engine.world, [this.ball, ...this.walls, this.racketP1, this.racketP2]);
		this.beforeUpdate();
		this.collision();
	}

	beforeUpdate(){
		Events.on(this.engine, 'beforeUpdate', () =>{
			let data = {
				ball: this.ball.position,
				p1:	this.racketP1.position,
				p2: this.racketP2.position,
			};
			let data2 = {
				ball: this.reverseVector(this.ball.position),
				p1: this.reverseVector(this.racketP2.position),
				p2: this.reverseVector(this.racketP1.position)
			}
			if (this.ball.position.x > 600 || this.ball.position.x < 0 || this.ball.position.y > this.height || this.ball.position.y < 0)
				console.log("where the fuck are you going");
			this.player1.emit('starter', data);
			this.player2.emit('starter', data2);
		});
	}

	collision(){
		Events.on(this.engine, 'collisionEnd', (coll)=>{
			// let pair: Matter.Pair = coll.pairs[0];
			// let bodya: Body = pair.bodyA, bodyb: Body = pair.bodyB;
			// if ((bodya.label === 'ball' && bodyb.label === 'goal1') || (bodyb.label === 'ball' && bodya.label === 'goal1')){
			// 	Runner.stop(this.runner);
			// 	this.player1.emit('endgame', {message: 'you lost'});
			// 	this.player2.emit('endgame', {message: 'you won'});
			// }
			// if ((bodya.label === 'ball' && bodyb.label === 'goal2') || (bodyb.label === 'ball' && bodya.label === 'goal2')){
			// 	Runner.stop(this.runner);
			// 	this.player1.emit('endgame', {message: 'you won'});
			// 	this.player2.emit('endgame', {message: 'you lost'});
			// }
		})
	}

	start(){
		this.ball.force = {x: 1.1, y: 0.6};
		this.runner = Runner.create();
		Runner.run(this.runner, this.engine);
		console.log(this.ball.force);
	}

	movePlayer(id: string, x: number){
		if (id === this.player1.id)
			Body.setPosition(this.racketP1, {x: x, y: this.racketP1.position.y});
		else
			Body.setPosition(this.racketP2, {x: this.width - x, y: this.racketP2.position.y})
	}

	stop(){
		Engine.clear(this.engine);
		Runner.stop(this.runner);
	}

	reverseVector(vector: Matter.Vector): Matter.Vector{
		let newVector: Matter.Vector = {x: 0, y: 0};
		newVector.x = this.width - vector.x;
		newVector.y = this.height - vector.y;
		return (newVector);
	}
}