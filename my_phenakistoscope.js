const SLICE_COUNT = 14; 

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false); //set back to true
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("whale" , "png");
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(faces);
  layer1.mode( RING );
  layer1.set_boundary( 0, 1000 ); //1000

  var layer2 = new PLayer(whales);
  layer2.mode( RING );
  layer2.set_boundary( 0, 600 );
}

function faces(x, y, animation, pScope){
  
  //scale(animation.frame*2); //animation.frame*2

  ellipse(0,0,50,50); // draw head
  fill(30);
  ellipse(-10,-10,10,10); //draw eye
  ellipse(10,-10,10,10); // draw eye
  arc(0,10,20,10,0,180); // draw mouth

  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(66, 135, 245)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
  rect(-10,-800-animation.wave()*50,60, 60) // .wave is a cosine wave btw

}

function whales(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
 
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  //fill(66, 135, 245)
  //arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  push()
  scale(3)
  if(animation.frame == 0){
    fill(66, 135, 245)
    arc(x,y,270,270,backgroundArcStart,backgroundArcEnd);
  }
  pop()

  fill(255)
  pScope.draw_image("whale", x,y);
  //rect(-10,-450-animation.wave()*50,60, 60) // .wave is a cosine wave btw
//20 20
//-300
}
