// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);
var score = 0;
var labelScore;
var player;
var pipes = [];
var background = game.add.image(0, 0, "backgroundImg");
background.width = 790;
background.height = 400;

/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
game.load.image("backgroundImg", "../assets/asteroids.jpg");
game.load.image("playerImg", "../assets/kestrel.jpg");
game.load.image("pipeBlock", "../assets/asteroid.jpg");

}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
labelScore = game.add.text(20, 20, "0", {fill: "#009933"});
game.add.image(0, 0, "backgroundImg");
player = game.add.sprite(120, 27, "playerImg");
player.width = 140;
player.height = 95;
game.input.keyboard.addKey(Phaser.Keyboard.UP)
                   .onDown.add(moveUp);
game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
                   .onDown.add(moveDown);
generatePipe();




}
function update() {
  game.physics.arcade.overlap(
          player,
  		  pipes,
  		  gameOver);
}

function changeScore() {
score = score + 1;
labelScore.setText(score.toString());
}


function generatePipe() {
    var gap = game.rnd.integerInRange(1 ,5);
    for (var count = 0; count < 8; count++) {
        if (count != gap && count != gap+1) {
            addPipeBlock(750, count * 50);
        }
    }
    changeScore();
}

function addPipeBlock(x, y) {
    var pipeBlock = game.add.sprite(x,y,"pipeBlock");
    pipes.push(pipeBlock);
    game.physics.arcade.enable(pipeBlock);
    pipeBlock.body.velocity.x = -200;
    pipeBlock.width = 40;
    pipeBlock.height = 40;
}
function playerJump() {
    player.body.velocity.y = -200;
}
function gameOver(){
    game.destroy();
}
function moveUp() {
	player.y -= 80;
}
function moveDown() {
	player.y += 80;
}
