function Track() {
  if (width<height)
  {
    this.outerWidth = 100;
    //this.outerWidth = width*.7;
  }else
  {
    this.outerWidth = 100;
    //this.outerWidth = height*.7;
  }
  this.outerHeight = this.outerWidth
  this.innerWidth = this.outerWidth * .7;
  this.innerHeight = this.innerWidth;

  this.drawTrack = function () {
    fill(0, 0, 0);
    ellipse(width / 2, height / 2, this.outerWidth, this.outerHeight);
    fill(51, 51, 51);
    ellipse(width / 2, height / 2, this.innerWidth, this.innerHeight);
  }

  this.isOnTrack = function (x, y, diameter) {
    x = x - width / 2; //set such that 0,0 is at center
    y = y - height / 2;
    d = sqrt(x * x + y * y);
    if ((d - diameter/2 >= this.innerWidth / 2) && (d + diameter/2 <= this.outerWidth / 2)) {
      return true;
    } else {
      return false;
    }
  }

}
