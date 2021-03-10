var gameState,playerCount, database;
var form, player, game;


function setup(){
  database = firebase.database();
  gameState = 0;
  createCanvas(400, 400);
  game = new Game();
  game.getState();
  game.state();

}

function draw(){
  background("lavender");
  
  drawSprites();
}
