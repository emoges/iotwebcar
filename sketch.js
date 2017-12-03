function setup() {
  createCanvas(window.innerWidth, window.innerHeight); //bg
   track = new Track(); //track
  me = new Car(255, 255, 255); //car
  brake = loadImage("img/brakev2.png");
  gas = loadImage("img/gasv2.png");
  fr = 30; //frameRate
  currentTheta = 0;
  safeMode = false;
  frameRate(fr);
}

function touchStarted()
{
  var brakex=(window.innerWidth - track.outerWidth)/4;
  var brakey=window.innerHeight/2;
  var gasx=(window.innerWidth - track.outerWidth)/2 +track.outerWidth+(window.innerWidth - track.outerWidth)/4;
  var gasy=window.innerHeight/2;
//right button  ex//window.innerWidth-gasx+20
//right button  sx//gasx+20
//right button  sy//gasy-40
//right button  ey//gasy+40

//left button  ex//window.innerWidth-gasx+20
//left button  sx//gasx+20
//left button  sy//gasy-40
//left button  ey//gasy+40
  if(gasx+20<pmouseX<window.innerWidth-gasx+20 && gasy+60<pmouseY<gasy-40)
  {
    print(gasx+20+"  "+pmouseX+"  "+(window.innerWidth-gasx+20))
    print("go right");
  }


}
function touchMoved()
{
  var brakex=(window.innerWidth - track.outerWidth)/4;
  var brakey=window.innerHeight/2;
  var gasx=(window.innerWidth - track.outerWidth)/2 +track.outerWidth+(window.innerWidth - track.outerWidth)/4;
  var gasy=window.innerHeight/2;
  if(gasx+20<pmouseX<window.innerWidth-gasx+20 && gasy+60<pmouseY<gasy-40)
  {
    print(gasx+20+"  "+pmouseX+"  "+window.innerWidth-gasx+20)
    print("go right");
  }
}

function draw() {
  background(51, 51, 51);
  track.drawTrack();
  //print("Window width: "+window.innerWidth+" Track outer width: "+track.outerWidth);
  var brakex=(window.innerWidth - track.outerWidth)/4;
  var brakey=window.innerHeight/2;
  var gasx=(window.innerWidth - track.outerWidth)/2 +track.outerWidth+(window.innerWidth - track.outerWidth)/4;
  var gasy=window.innerHeight/2;
  if (safeMode === false) {
    me.update();
    me.show();
    if (keyIsDown(UP_ARROW)) {
      me.dir(0, -.2);
    }
    if (keyIsDown(DOWN_ARROW)) {
      me.dir(0, .2);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      me.dir(.2, 0);
    }
    if (keyIsDown(LEFT_ARROW)) {
      me.dir(-.2, 0);
    }

    if (keyIsDown(82) || keyIsDown(114)) { //r for reset
      setup();
    }

    if (keyIsDown(88) || keyIsDown(120)) { //x for brake
      me.deccelerate();
      image(brake, brakex, brakey, 20, 20); //make brake smaller, appear depressed
    } else {
      image(brake, brakex, brakey, 20, 20);
    }

    if (keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW) || keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)) {
      image(gas, gasx, gasy, 20, 20);//make gas smaller, appear depressed
    } else {
      image(gas, gasx, gasy, 20, 20);
    }

    if (!track.isOnTrack(me.x, me.y, me.radius)) {
      me.handleBounce();
    }
  } else {
    me.calcSpeed();
    me.safemode();
    me.show();
  }
}
