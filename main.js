var digitalFont = "";
var date = "";

function preload(){
    digitalFont = loadFont("digital.ttf");
}

function setup(){
    noStroke();
    if(screen.width > 700){
        canvas = createCanvas(600, 300);
        canvas.position(400, 160);
        fill("#323599");
        rect(0, 0, 250, 80);
        rect(0, 80, 600, 190);
        fill("black");
        rect(10, 10, 230, 60);
        rect(10, 90, 580, 170);
    } else if(screen.width <= 700) {
        canvas = createCanvas(976, 600);
        canvas.position(0, 160);
        fill("#323599");
        rect(0, 0, 606, 246);
        rect(0, 246, 976, 330);
        fill("black");
        rect(20, 20, 566, 200);
        rect(20, 270, 936, 270);
    }
    textFont(digitalFont);
}

setInterval(function(){
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(hours < 10){
        hours = "0" + hours;
    }

    daynum = date.getDay();
    dayarray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    time = hours + " : " + minutes + " : " + seconds;
    day = dayarray[daynum];

    if(screen.width > 700){
        fill("#323599");
        rect(0, 0, 250, 80);
        rect(0, 80, 600, 190);
        fill("black");
        rect(10, 10, 230, 60);
        rect(10, 90, 580, 170);

        textSize(60);
        fill("red");
        text(day, 25, 58);
        textSize(160);
        fill("white");
        text(time, 25, 218);
    } else if(screen.width <= 700) {
        fill("#323599");
        rect(0, 0, 606, 246);
        rect(0, 246, 976, 330);
        fill("black");
        rect(20, 20, 566, 200);
        rect(20, 270, 936, 270);

        textSize(170);
        fill("red");
        text(day, 35, 168);
        textSize(260);
        fill("white");
        text(time, 35, 478);
    }
}, 1000);