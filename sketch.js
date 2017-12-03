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
  button1 = createButton('UP');
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
//right button  ey//gasy+60

//left button  sx//gasx-(window.innerWidth-(gasx+20))
//left button  ex//gasx
//left button  sy//gasy-40
//left button  ey//gasy+60
if(gasx+20<pmouseX<(window.innerWidth-(gasx+20)) && gasy+60<pmouseY<gasy-40)
{
  print("go right "+(window.innerWidth-(gasx+20)));
  me.dir(.2, 0);
}
else if(gasx-(window.innerWidth-(gasx+20))<pmouseX<gasx && gasy+60<pmouseY<gasy-40)
{
  print("go left "+gasx-(window.innerWidth-(gasx+20));
  me.dir(-.2, 0);
}

}
function touchMoved()
{
  var brakex=(window.innerWidth - track.outerWidth)/4;
  var brakey=window.innerHeight/2;
  var gasx=(window.innerWidth - track.outerWidth)/2 +track.outerWidth+(window.innerWidth - track.outerWidth)/4;
  var gasy=window.innerHeight/2;
  if(gasx+20<pmouseX<(window.innerWidth-(gasx+20)) && gasy+60<pmouseY<gasy-40)
  {
    print("go right "+(window.innerWidth-(gasx+20)));
    me.dir(.2, 0);
  }
  else if(gasx-(window.innerWidth-(gasx+20))<pmouseX<gasx && gasy+60<pmouseY<gasy-40)
  {
    print("go left "+gasx-(window.innerWidth-(gasx+20));
    me.dir(-.2, 0);
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
    /*button1.position(gasx-10, gasy-(gasy/10));
    button1.size(50,50);
    button1.mousePressed(upp);*/


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

  function upp()
  {
    print("im here");
    while (button1.mouseIsPressed)
    {
      print("yes");
      me.dir(0, -.2);
    }
    print("done");
  }
}
