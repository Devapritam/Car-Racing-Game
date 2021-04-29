canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_image;
}

function uploadbackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyEvent = e.keyCode;
    console.log(keyEvent);
    if(keyEvent == '38'){
        car1_up();
        console.log("car1 up");
    }
    if(keyEvent == '40'){
        car1_down();
        console.log("car1 down");
    }
    if(keyEvent == '37'){
        car1_left();
        console.log("car1 left");
    }
    if(keyEvent == '39'){
        car1_right();
        console.log("car1 right");
    }
    if(keyEvent == '87'){
        car2_up();
        console.log("car2 up");
    }
    if(keyEvent == '83'){
        car2_down();
        console.log("car2 down");
    }
    if(keyEvent == '65'){
        car2_left();
        console.log("car2 left");
    }
    if(keyEvent == '68'){
        car2_right();
        console.log("car2 right");
    }
}