var s = function( p ) { // p could be any variable name
  var x = 100; 
  var y = 100;
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);
  };
};
var myp5 = new p5(s, 'c1');
