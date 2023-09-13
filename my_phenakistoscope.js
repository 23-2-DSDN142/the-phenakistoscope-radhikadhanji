const SLICE_COUNT = 14; //14

function setup_pScope(pScope){
  pScope.output_mode( ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false); 
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("whale" , "png");
  pScope.load_image("sea", "png");
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(clouds);
  layer1.mode( RING );
  layer1.set_boundary( 0, 1000 ); 

  var layer2 = new PLayer(whales);
  layer2.mode( RING );
  layer2.set_boundary( 0, 1000 );

  

}


function clouds(x, y, animation, pScope){
  
  const first = color(219, 251, 255);
  const last = color(140, 176, 237);
  let gradientCol = lerpColor(first, last, animation.wave());
  
  let cloudOutline = color(232, 161, 46);

  pScope.fill_background(gradientCol);
  
  pScope.draw_image("sea", x, -y-animation.wave()*100);

  fill(255)
  //Constructing the cloud
  strokeWeight(10);
  stroke(cloudOutline);
  ellipse(-90,-785-animation.wave()*50, 100, 75); //left edge cloud
  ellipse(70,-785-animation.wave()*50, 100, 75); //right edge cloud
  ellipse(-10,-800-animation.wave()*50,150, 100); //bottom of cloud
  noStroke();
  ellipse(40,-850-animation.wave()*50, 100, 100);
  ellipse(-50,-825-animation.wave()*50, 100, 100);

  //Cloud shading
  fill(250, 225, 202);
  ellipse(-90,-785-animation.wave()*50, 100, 75); //left edge cloud
  ellipse(70,-785-animation.wave()*50, 100, 75); //right edge cloud
  ellipse(-10,-789-animation.wave()*50,150, 75); //bottom of cloud

}

function whales(x, y, animation, pScope){
  push()
  //scale(3)
  if(animation.frame == 0){
    fill(255)
    scale(0.35);
   pScope.draw_image("whale", -10,-1500-animation.wave()*100); //x, y
    
  }
  pop()
}
