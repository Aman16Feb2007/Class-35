var ball, position, database,ballposition;

function setup(){
    database = firebase.database();

    createCanvas(500,500);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    ballposition = database.ref('ball/position');
    ballposition.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-15,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(15,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-15);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+15);
    }
    drawSprites();
}

function changePosition(x,y){
    ballposition.set({
        'x':osiption1.x+x,
        'y':position1.y+y
    })
}

function readPosition(data){
    position1 = data.val();
    ball.x = position1.x;
    ball.y = position1.y;
}
