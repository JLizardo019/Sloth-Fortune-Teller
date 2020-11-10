let data = {
    "start": ["#fortune#"],
    "fortune": ["You are #sloth.a# sloth. #aboutyou# #advice#"],
    "sloth" : ["kind", "calm", "fiesty", "loving", "adventurous","strong", "sleepy","lazy"],
    "aboutyou": ["You will accomplish everything you put your mind to.","You are always ready to hang out, but you know when its time to settle down and be serious.", "Your giving nature allows you to be loved by many and excel in artistic mediums.", "Even though it might make you feel vulnerable, there is no shame in asking for help", "All the leaves in your home are organized and kept in the best shape possible.", "You are quite popular amongst your peers and have a few admirers in the bushes.", "You are always ready to hang out, but you know when its time to settle down and be serious.", "Don't forget to stay loyal to yourself as well as others."],
    "advice": ["Every now and then remember to share your snacks with others!","Do not put so much pressure on yourself, take a nap in the trees.", "Take is one swing at a time. Life is too short to rush.", "Taking a nap will solve all your problems.", "Always be yourself and go your gut.", "Set boundaries for yourself so you are not stepped over.", "Don't forget to stay loyal to yourself as well as others."]
}

let grammar;
let sloth, globe, table, bg, fog1, fog2;
let expansion ="";


let y = 400;
let direction = -1;
let y2 = 400;
let direction2 = 1;
let y3 = 420;
let direction3 = 1;
let y4 = 400;
let direction4 = 1;

function preload(){
    globe = loadImage("crystal-ball.png");
    table = loadImage("wood.png");
    sloth = loadImage("sloth.png");
    bg = loadImage("background2.jpg");
    fog1 = loadImage("fog1.png");
    fog2 = loadImage("fog2.png");
}

function setup(){
    createCanvas(800, 800);
    
    grammar = tracery.createGrammar(data);
    let button1 = createButton("Tell me my fortune");
    button1.position(654, 720);
    button1.mousePressed(generate);

    imageMode(CENTER);
    textAlign(CENTER); 
 }

function draw(){
    // background(220);
    image(bg,400,400,900,900);
    
    //sloth
    image(sloth, 400,y,600,600);
    y-=0.5*direction;
    if (y<370 || y>400){
        direction *= -1;
    }
    
    //table
    image(table,400,700,800,200);    
    
    // globe
    image(fog2,y4,317,300,200);
    image(fog1,y2,420,400,300);
    image(fog1,y2,440,400,300);
    image(globe,400,500,600,600);
    image(fog2,y3,500,300,200);

    y2+=0.5*direction2;
    if (y2>420 || y2<400){
        direction2 *= -1;
    }
    y3-=0.4*direction3;
    if (y3>420 || y3<400){
        direction3 *= -1;
    }
    y4+=0.6*direction4;
    if (y4>420 || y4<400){
        direction4 *= -1;
    }

    // text
    textSize(25);
    fill("#635284");
    text(expansion,218, 351,360,400);
    fill("#9480bc");
    text(expansion,220, 350,360,400);
}

function generate(){
    background(220);
    expansion = grammar.flatten('#start#');
    
}


