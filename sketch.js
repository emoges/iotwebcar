function setup() {
  createCanvas(window.innerWidth, window.innerHeight); //bg
  me = new Car(255, 255, 255); //car
  track = new Track(); //track
  brake = loadImage("img/brakev2.png");
  gas = loadImage("img/gasv2.png");
  fr = 30; //frameRate
  currentTheta = 0;
  safeMode = false;
  frameRate(fr);
}

function draw() {
  background(51, 51, 51);
  track.drawTrack();
  print("Window width: "+window.innerWidth+" Track outer width: "+track.outerwidth);
  
  var brakex=(window.innerWidth - track.outerwidth)/2;
  var brakey=10;
  var gasx=20;
  var gasy=20;

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
