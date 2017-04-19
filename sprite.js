var sequenceAnimation;
var glitch;

function preload() {
sequenceAnimation = loadAnimation("img/animation/Power_Save_00002", "img/animation/Power_Save_00003");
glitch = loadAnimation("data/dog.png", "data/horse.png", "data/cat.png", "data/snake.png");
}

function setup() {
createCanvas(800, 600);
}

function draw() {
background(0);
animation(sequenceAnimation, 100, 100);
animation(glitch, 200, 100);
}