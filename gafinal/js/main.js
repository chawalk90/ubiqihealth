/*

var total = 0;

document.getElementByClass("lever").onclick=pullLever;
document.getElementById("spring").mouseDown=shrinkSpring;
document.getElementById("ball").mouseUp=shootBall;
document.getElementById("gutter").mouseUp=slideGutter;
document.getElementById("flipper").keyPress;
function pullLever () {

}

function silver () {
	total+=200;
}
function gold () {
	total+=500;
}
function center () {
	total+=1000;
}
function shrinkSpring () {
	y-=1;
	document.spring.height = y;
}
function pullLever () {

}
function shootBall () {
	y+=;
}

make spring relative to window

*/
$("body").on("keydown",function(e){
	e.preventDefault();
})
var startPoint = {
	top:"500px",
    left:"500px"
};
var numBalls = 0;
var score = 0;
var canvasElem = document.getElementById("pinball");
var world = boxbox.createWorld(canvasElem,{gravity:{x:0,y:10},collisionOutlines:true});
/*var ball;
function addBall(){
	ball=world.createEntity({
		name: "player",
		image: "images/ball.png",
		x:23.65,
		y:20,
		restitution:1,
		shape:"circle"
	});
}/*/


/*world.createEntity({
	name:"scoreboard",
	type:"static",
	image:"images/scoreboard.png",
	width:"250px",
	height:"400px",
	x:27.8,
	y:4.2
});
world.createEntity({
	name:"newgame",
	image:"images/newgame.png",
	type:"static",
	height:"50px",
	width:"150px",
	x:28.6,
	y:9.3
});*/
/*world.createEntity({
	name: "board",
	type: "static",
	image: "http://i283.photobucket.com/albums/kk310/LedZepForever/pinball_zps761e17f0.jpg",
	width: 544,
	height: 700,
	y: 10,
	x: 6
});*/


world.createEntity({
	name:"flipper-left",
	image: "images/flipper.png",
	x:7.7,
	y:28.8,
	type:"static"
});
world.createEntity({
	name:"flipper-right",
	image: "images/flipper-right.png",
	x:13.5,
	y:28.2,
	type:"static"
});


world.createEntity({
	name:"extra-ball-left",
	image:"images/ball-extra.png",
	height:"35px",
	width:"35px",
	type:"static",
	x:2,
	y:4.3
});
world.createEntity({
	name:"extra-ball-right",
	image:"images/ball-extra.png",
	height:"35px",
	width:"35px",
	type:"static",
	x:21.25,
	y:4.3
});
world.createEntity({
	name:"center",
	image:"images/center.png",
	height:"200px",
	weight:"200px",
	type:"static",
	x:10.1,
	y:8
});
world.createEntity({
	name:"silverstar",
	image:"images/silverstar.png",
	height:"50px",
	weight:"50px",
	type:"static",
	x:2.7,
	y:12.3
});
world.createEntity({
	name:"goldstar",
	image:"images/goldstar.png",
	height:"50px",
	weight:"50px",
	type:"static",
	x:20,
	y:12.3
});
world.createEntity({
	name:"blackhole",
	image:"images/blackhole.png",
	height:"50px",
	weight:"50px",
	type:"static",
	x:11.15,
	y:18.3
});
var lever=world.createEntity({
	name:"lever",
	image:"images/lever.png",
	x:22.04,
	y:32,
	height:6,
	width:4,
	type: 'static'
	/*if (entity.y() < 32) {
		this.type('dynamic');
	}*/
});
/*var release = function() {
	lever.y++;
	if (lever.y() > 32) {
		this.type('static');
	}
};*/

/*lever.setForce("antigrav",480,0);
var intervalId;
lever.onKeydown(function(e){
	console.log(e.which)
	if(e.which==40){
		this.position.y=this.position({x:this.position().x,y:this.position().y+.1});
	}
	
});
/*lever.onKeyup(function(e){
	entity.applyImpulse(10, 1, -1);
});*/
var gutter=world.createEntity({
	name:"gutter",
	image:"images/gutter.png",
	height:"63px",
	width:"500px",
	x:11.2,
	y:.9,
	type:"static"
});
var shooter=world.createEntity({
	name:"shooter",
	image:"images/sienna.png",
	height:"900px",
	width:"45px",
	type:"static",
	x: 23.84,
	y: 10.31
});

var ball=world.createEntity({
	name:"ball",
	image:"images/ball.png",
	height:"35px",
	width:"35px",
	x:23.92,
	y:29.4,
	type:"dynamic"
});



/*if ($("lever").mouseDown() == true) {
	shootball();
} else {
	($("ball").stop();
}*/
/*var spring=world.createEntity({
	name:"spring",
	image:"images/spring.png",
	x:23.65,
	y:29.84,
	height:"144px",
	width:"90px",
	type:"static"
});*/

/*document.getElementById("boom").onclick=function(){
	lever.setForce("bob",200,1);
}
document.getElementById("new-game").onclick=function(){
	addBall();
}*/

$("lever").on("click.shootball");

function shootball() {
	$("ball").animate({
		top:"+=50"
	});
	$("ball").animate({
		left:"+=50"
	});
}

/*world.createEntity({
	name:"flipper-right",
	image: "images/flipper-right.png",
	/*onKeyUp: function(e) {
		this.applyImpulse(10, 45)
	}
});

world.createEntity({
	name: "silverstar",
	image: "images/silverstar.png"
});*/
/*



document.getElementById("flipper").keyPress;*/