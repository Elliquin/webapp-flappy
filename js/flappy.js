// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(1000, 600, Phaser.AUTO, 'game', stateActions);
var score = 0;
var labelScore;
var player;
var pipes = [];
var uparrow = [];
var downarrow =[];
var background;
var availableBackgrounds = [];
/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
loadbackground("backgroundImg1", "asteroids1.jpg");
loadbackground("backgroundImg2", "asteroids2.jpg");
loadbackground("backgroundImg3", "asteroids3.jpg");
loadbackground("backgroundImg4", "asteroids4.jpg");
loadbackground("backgroundImg5", "asteroids5.jpg");
loadbackground("backgroundImg6", "asteroids6.jpg");
loadbackground("backgroundImg7", "asteroids7.jpg");
loadbackground("backgroundImg8", "asteroids8.jpg");
loadbackground("backgroundImg9", "asteroids9.jpg");
loadbackground("backgroundImg10", "asteroids10.jpg");

game.load.image("playerImg", "../assets/kestrel.jpg");
game.load.image("pipeBlock", "../assets/asteroid.jpg");
game.load.image("uparrow", "../assets/uparrow.jpg");
game.load.image("downarrow", "../assets/downarrow.jpg");
}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
labelScore = game.add.text(20, 20, "0", {fill: "#ff0000"});
game.physics.startSystem(Phaser.Physics.ARCADE);
generatebackground();
background.width = 1000;
background.height = 600;
player = game.add.sprite(140, 200 , "playerImg");
player.anchor.setTo(0.5, 0.5);
game.physics.arcade.enable(player);
player.body.gravity.y = 350;
player.width = 65;
player.height = 50 ;
game.input.keyboard.addKey(Phaser.Keyboard.UP)
                   .onDown.add(moveUp);
game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
                   .onDown.add(moveDown);
generate();
game.input.keyboard
    .addKey(Phaser.Keyboard.SPACEBAR)
    .onDown
    .add(playerJump);
var pipeInterval = 1.75 * Phaser.Timer.SECOND;
game.time.events.loop(
        pipeInterval,
        generate
    );

}
function update() {
  game.physics.arcade.collide(
          player,
  		  pipes,
  		  gameOver);
  if(player.body.y < -40 || player.body.y > 590){
    gameOver();
  }
  player.rotation = Math.atan(player.body.velocity.y / 200);
}

function changeScore() {
score = score + 1;
labelScore.setText(score.toString());
}


function generatePipe() {
    var gap = game.rnd.integerInRange(1 ,8  );
    for (var count = 0; count < 13 ; count++) {
        if (count != gap && count != gap+1 && count != gap+2 ) {
            addPipeBlock(1030, count * 50 );
        }
    }
}

function addPipeBlock(x, y) {
    var pipeBlock = game.add.sprite(x,y,"pipeBlock");
    pipes.push(pipeBlock);
    game.physics.arcade.enable(pipeBlock);
    pipeBlock.body.velocity.x = -200;
    pipeBlock.width = 40;
    pipeBlock.height = 40 ;
}
function playerJump() {
    player.body.velocity.y = -250;
}
function gameOver(){
game.state.restart();
  gameGravity = 200;
}
function moveUp() {
	player.y -= 80;
}
function moveDown() {
	player.y += 80;
}

function changeGravity(g) {
    gameGravity += g;
    player.body.gravity.y = gameGravity;
}

function generateUpwards() {
    var up = game.add.sprite(1030, 630, "uparrow");
    uparrow.push(up);
    game.physics.arcade.enable(up);
    up.body.velocity.x = - 200;
    up.body.velocity.y = - game.rnd.integerInRange(60, 100);
    up.width = 40;
    up.height = 40;
}

function generateDownwards() {
    var down = game.add.sprite(1030, -30 , "downarrow");
    downarrow.push(down);
    game.physics.arcade.enable(down);
    down.body.velocity.x = - 200;
    down.body.velocity.y = game.rnd.integerInRange(60, 100);
    down.width = 40;
    down.height = 40;
}

function generate() {
    var diceRoll = game.rnd.integerInRange(1, 10);
    if(diceRoll==1) {
      generateUpwards();
  } else if(diceRoll==2) {
      generateDownwards();
  } else {
      generatePipe();
  }
}

function generatebackground() {
var diceRoll = game.rnd.integerInRange(0, availableBackgrounds.length - 1);
var choice = availableBackgrounds[diceRoll];
background = game.add.image(0, 0, choice);

}

function loadbackground(name,filename) {
  game.load.image(name, "../assets/" + filename);
  availableBackgrounds.push(name);
}

function changeScore() {
  score = score + 1;
  labelScore.setText(score.toString());
}
