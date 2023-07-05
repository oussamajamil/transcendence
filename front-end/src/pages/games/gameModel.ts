import { Body, Engine, Render, Bodies, Composite } from "matter-js";

export class Game{
	engine: Engine;
	render: Render;

	ball: Body;
	walls: Body[];
	racket1: Body;
	racket2: Body;

	height: number;
	width: number;
	goalWidth: number = 180;
	goalY: number = 25;

	widthLimit: number = 800

	constructor(element: HTMLElement, width: number, height: number){
		this.width = this.widthLimit
		if (this.width < this.widthLimit)
			this.width = width;
		this.height = Math.round(width * 11 / 9)
		console.log(this.width, this.height)
		this.engine = Engine.create({gravity: {x: 0, y: 0}})
		this.render = Render.create({
			engine: this.engine,
			element: element,
			options:{
			  height: this.height,
			  width: this.width,
			  background: "0x0",
			  wireframes: false
			}
		  })
		this.ball = Bodies.circle(this.height/2, this.width/2, 10);
		this.walls = [Bodies.rectangle(0, this.height / 2, 10, this.height * 10, {isStatic: true,   density:5})
					,Bodies.rectangle(this.width / 2, 0, this.width * 10, 10, {isStatic: true,   density:5, label: 'goal2'})
					,Bodies.rectangle(this.width, this.height / 2, 10, this.height * 10, {isStatic: true, density:5})
					,Bodies.rectangle(this.width / 2, this.height, this.width * 10, 10, {isStatic: true, density:5, label: 'goal1'})];
		this.racket1 = Bodies.rectangle(this.width / 2, this.height - this.goalY, this.goalWidth, 10, {isStatic: true});
		this.racket2 = Bodies.rectangle(this.width / 2, this.goalY, this.goalWidth, 10, {isStatic: true});
		
		  Composite.add(this.engine.world, [this.ball, ...this.walls, this.racket1, this.racket2]);
		  Render.run(this.render);
	}

	respensivness(width: number, height: number){
		this.width = this.widthLimit;
		if (width < this.widthLimit)
			this.width = width;
		this.height = Math.round(this.width * 11/9);
		console.log(this.width, this.height)
		this.render.canvas.width = this.width;
        this.render.canvas.height = this.height;
        Body.setPosition(this.ball, {x: this.width / 2, y: this.height / 2})
        Body.setPosition(this.walls[0], {x: 0, y: this.height / 2})
		Body.setPosition(this.walls[1], {x: this.width / 2, y: 0})
		Body.setPosition(this.walls[2], {x: this.width, y: this.height / 2})
		Body.setPosition(this.walls[3], {x: this.width / 2, y: this.height})
		Body.setPosition(this.racket1, {x: this.width / 2, y: this.height - this.goalY})
		Body.setPosition(this.racket2, {x: this.width / 2, y: this.goalY})
		Engine.update(this.engine);
	}

	map(value: number, in_max: number, out_max: number): number {
		return value * out_max / in_max;
	}

}