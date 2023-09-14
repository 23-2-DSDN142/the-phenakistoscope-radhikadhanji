const SLICE_COUNT = 14; 

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false); 
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("whale" , "png");
  pScope.load_image("sea", "png");
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var skyLayer = new PLayer(sky);
  skyLayer.mode( RING );
  skyLayer.set_boundary( 0, 1000 ); 

  var seaLayer = new PLayer(sea);
  seaLayer.mode( RING );
  seaLayer.set_boundary( 0, 1000 ); 

  var layer1 = new PLayer(clouds);
  layer1.mode( RING );
  layer1.set_boundary( 0, 1000 ); 

  var layer2 = new PLayer(whales);
  layer2.mode( RING );
  layer2.set_boundary( 0, 1000 );

}

function sky() {
  const first = color(219, 251, 255); //constant for lightest colour (219, 251, 255)
  const last = color(140, 176, 237); //constant for darkest colour
  
  const firstCol = lerpColor(first, last, 0.15); //lightest
  const secondCol = lerpColor(first, last, 0.45); //second lightest
  const thirdCol = lerpColor(first, last, 0.75); //second darkest
  const fourthCol = lerpColor(first, last, 1); //darkest
  noStroke();

  fill(fourthCol);
  ellipse(0, 0, 2000); //edge ring

  fill(thirdCol);
  ellipse(0, 0, 1800); //2nd closest to middle ring
  
  fill(secondCol);
  ellipse(0, 0, 1500); //Closest to middle ring

  fill(firstCol);
  ellipse(0, 0, 1200); //middle ring
}

function sea(x, y, animation, pScope){

  pScope.draw_image("sea", x, -y-animation.wave()*100); //draws sea w/wave to give a bouncing illusion

}


function clouds(x, y, animation, pScope){

  cloud(-100, -825, animation, 100, 75); //biggest, topmost cloud
  cloud(-10, -725, animation, 90, 65); //middle cloud
  cloud(-150, -625, animation, 30, 5); //border-esque pattern 

}


function whales(x, y, animation, pScope){
  if(animation.frame == 0){
    //Only draws whale on one frame of the animation
    fill(255)
    scale(0.35);
   pScope.draw_image("whale", -10,-1500-animation.wave()*100); 
  }
}

function cloud(x, y, animation, w, h){
  //Draws a single cloud

  let cloudOutline = color(232, 161, 46);

  fill(255);
  //Constructing the cloud
  strokeWeight(10);
  stroke(cloudOutline);
  ellipse(x,y-animation.wave()*50, w, h); //left edge cloud
  ellipse(x + 160, y-animation.wave()*50, w, h); //right edge cloud
  ellipse(x + 80, (y-15)-animation.wave()*50,w + 50, h + 25); //bottom of cloud

  if(w > 50){
    //If it is not the border cloud
    noStroke();
    ellipse(x + 130, (y-65)-animation.wave()*50, w, h + 25);
    ellipse(x + 40,(y-40)-animation.wave()*50, w, h + 25); //top edges of cloud without lines

  }


  //Cloud shading
  fill(250, 225, 202);
  ellipse(x,y-animation.wave()*50, w, h); //left edge cloud
  ellipse(x + 160,y-animation.wave()*50, w, h); //right edge cloud
  ellipse(x + 80,(y -4)-animation.wave()*50,w + 50, h); //bottom of cloud

}
