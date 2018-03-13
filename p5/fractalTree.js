
var angle = 0;
var slider;

function setup() {
  createCanvas(1000, 800);
  slider = createSlider(0, TWO_PI, PI / 4, 0.001);
}

function draw() {
  background(0);
  angle = slider.value();
  stroke(200, 200, 75);
  translate(500, height);
  branch(200);

}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.70);
    print("hello");
    pop();
    push();
    rotate(-angle);
    branch(len * 0.70);
    pop();
  }
}
