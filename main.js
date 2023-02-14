// Create the reference variable of the canvas using fabric.Canvas()
var canvas=new fabric.Canvas("myCanvas");

// Define the starting width and height of the block images
block_height=30;
block_width=30;

// Define the starting x and y coordinates for the player
player_x=10;
player_y=10;

// Define a variable named player_object to store object of the player image
var player_object="";
var block_object="";
// Add a function named player_update() to add the player image
function player_update(){
    fabric.Image.fromURL("player.png", function(Img) {
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

// Add a function named new_image() to add the different images as per the specific keys pressed
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img) {
       block_object=Img;

       block_object.scaleToWidth(block_width);
       block_object.scaleToHeight(block_height);
       block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);
    if(e.shiftKey && key_pressed=="80")
    {
        console.log("p and shift pressed together");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if(e.shiftKey && key_pressed=="77")
    {
        console.log("m and shift pressed together");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if(key_pressed == "38")
    {
        up();
        console.log("up");
    }
    if(key_pressed == "40")
    {
        down();
        console.log("down");
    }  if(key_pressed == "37")
    {
        left();
        console.log("left");
    }  if(key_pressed == "39")
    {
        right();
        console.log("right");
    }
    if(key_pressed == "87")
    {
        new_image("wall.jpg");
        console.log("w");
    }
    if(key_pressed == "71")
    {
        new_image("ground.png");
        console.log("g");
    }
    if(key_pressed == "76")
    {
        new_image("light_green.png");
        console.log("l");
    }
    if(key_pressed == "84")
    {
        new_image("trunk.jpg");
        console.log("t");
    }
    if(key_pressed == "82")
    {
        new_image("roof.jpg");
        console.log("r");
    } if(key_pressed == "89")
    {
        new_image("yellow_wall.png");
        console.log("y");
    } if(key_pressed == "68")
    {
        new_image("dark_green.png");
        console.log("d");
    }
    if(key_pressed == "85")
    {
        new_image("unique.png");
        console.log("u");
    }
    if(key_pressed == "67")
    {
        new_image("cloud.jpg");
        console.log("c");
    }
}

function up(){
    if(player_y >=30)
    {
        player_y=player_y-block_height;
        console.log("block image height = " + block_height);
        console.log("When up arrow key is pressed, X = " + player_x +" , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y <450)
    {
        player_y=player_y+block_height;
        console.log("block image height = " + block_height);
        console.log("When down arrow key is pressed, X = " + player_x +" , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x >0)
    {
        player_x=player_x-block_width;
        console.log("block image width = " + block_width);
        console.log("When left arrow key is pressed, X = " + player_x +" , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x <=900)
    {
        player_x=player_x+block_width;
        console.log("block image width = " + block_width);
        console.log("When right arrow key is pressed, X = " + player_x +" , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}