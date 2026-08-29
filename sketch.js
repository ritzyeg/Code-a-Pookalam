function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas-container");
}
function draw() {
    background(30);
    let cx = width / 2;
    let cy = height / 2;
    // FINAL OUTER SCALLOPED - CRESCENT ARCH BORDER
    push();
    translate(cx, cy);
    rotate(frameCount * 0.0005);
    // Outer subtle border
    fill(40, 15, 25);
    noStroke();
    circle(0, 0, 735);
    // Cream base of the outer ring
    fill(242, 235, 205);
    circle(0, 0, 725);
    // Repeating multicoloured scalloped arches
    for (let i = 0; i < 50; i++) {
       push();
       rotate(TWO_PI / 50 * i);
       drawScallopArch(i);
       pop();
    }
    pop();
    //big dark purple outer circle
    push();
    translate(cx,cy);
    //dark border keliye
    fill(28,28,35);
    noStroke();
    circle(0,0,648);
    //to fill dark purple
    fill(55,30,80);
    circle(0,0,639);
    pop();
    // YELLOW OVERLAPPING PETALS
    push();
    translate(cx, cy);
    rotate(-frameCount * 0.0008);
    for (let i = 0; i < 30; i++) {
       push();
       rotate(TWO_PI / 30 * i);
       drawYellowNachoPetal();
       pop();
    }
    pop();
    // CIRCULAR ARCHED SWIRL MOTIFS LAYER 
    push();
    translate(cx, cy);
    rotate(frameCount * 0.0012);
    // Dark Outer Ring Border
    fill(40, 15, 25);
    noStroke();
    circle(0, 0, 520);
    // Cream / Soft Gold Background Ring
    fill(242, 235, 205);
    circle(0, 0, 508);
    // 4 Interlocking Arched Swirl Motifs
    for (let i = 0; i < 4; i++) {
        push();
        rotate(i * (TWO_PI / 4));
        drawArchedWaveFlower();
        pop();
    }
    // Inner Dark Boundary Line
    fill(40, 15, 25);
    noStroke();
    circle(0, 0, 260);
    pop();
    //  MAROON OUTER PETALS 
    push();
    translate(cx, cy);
    rotate(-frameCount * 0.0006);
    for (let i = 0; i < 8; i++) {
      rotate(TWO_PI / 8);
      push();
      scale(1.2);
      drawMaroonPetal();
      pop();
    }
    pop();
    // WHITE SCRATCH MARKS ON MAROON PETALS
    push();
    translate(cx, cy);
    for (let i = 0; i < 8; i++) {
        rotate(TWO_PI / 8);
        drawMaroonScratches();
    }
    pop();
    // OUTER BRIGHT YELLOW BORDER
    fill(245, 204, 91);
    noStroke();
    circle(cx, cy, 205);
    // ORANGE CIRCLE
    fill(220, 91, 24);
    circle(cx, cy, 190);
    // GREEN PETALS - BETWEEN WHITE PETALS
    push();
    translate(cx, cy);
    rotate(sin(frameCount * 0.015) * 0.09);
    rotate(frameCount * 0.0009);
    rotate(TWO_PI / 16);
    for (let i = 0; i < 8; i++) {
      rotate(TWO_PI / 8);
      drawGreenPetal();
    }
    pop();
    // BIG WHITE FLOWER - BACK
    push();
    translate(cx, cy);
    rotate(-frameCount * 0.0007);
    for (let i = 0; i < 8; i++) {
       rotate(TWO_PI / 8);
       drawWhiteFlower();
    }
    pop();
    // SMALL YELLOW PETALS - MIDDLE
    push();
    translate(cx, cy);
    for (let i = 0; i < 12; i++) {
        rotate(TWO_PI / 12);
        drawPetal(0, -18, 11);
    }
    pop();
    // YELLOW CENTER GLOW
    noStroke();
    let glowPulse = 1 + sin(frameCount * 0.03) * 0.7;
    let glowAlpha = map(sin(frameCount * 0.03), -1, 1, 80, 100);
    for (let r = 30 * glowPulse; r >= 12; r -= 3) {
       let alpha = map(r, 30 * glowPulse, 12, 10, 80);
       fill(245, 204, 91, glowAlpha);
       circle(cx, cy, r);
    }

    // YELLOW CENTER BLOOM
    fill(245, 204, 91);
    circle(cx, cy, 12);
}
// ARCHED WAVE FLOWER 
function drawArchedWaveFlower() {
    push();
    translate(0, -215);
    push();
    let bloomPulse = 1 + sin(frameCount * 0.025) * 0.08;
    scale(0.65*bloomPulse); 
    // A. DEEP PURPLE OUTER BLOOMING FLOWER SHELL
    fill(88, 32, 85);
    noStroke();
    beginShape();
    vertex(0, 22);
    bezierVertex(-25, 12, -45, -5, -35, -28);
    bezierVertex(-22, -45, -8, -30, 0, -20);
    bezierVertex(8, -30, 22, -45, 35, -28);
    bezierVertex(45, -5, 25, 12, 0, 22);
    endShape(CLOSE);
    // Side Blooming Petals (Deep Purple)
    beginShape(); vertex(-12, 18); bezierVertex(-38, 12, -50, -15, -25, -22); bezierVertex(-15, -12, -18, 5, -12, 18); endShape(CLOSE);
    beginShape(); vertex(12, 18); bezierVertex(38, 12, 50, -15, 25, -22); bezierVertex(15, -12, 18, 5, 12, 18); endShape(CLOSE);
    // B. DARK BLUE SHORT INNER SWIRLS
    fill(28, 48, 92);
    // Dark Blue Inner Left Swirl
    beginShape();
    vertex(-3, 10);
    bezierVertex(-25, 8, -50, 18, -68, 38);
    bezierVertex(-80, 50, -98, 42, -90, 22);
    bezierVertex(-82, 4, -55, 12, -66, 30);
    bezierVertex(-72, 40, -82, 34, -76, 26);
    bezierVertex(-70, 18, -76, 10, -84, 16);
    bezierVertex(-94, 26, -78, 58, -58, 38);
    bezierVertex(-42, 20, -22, 4, -3, 10);
    endShape(CLOSE);
    // Dark Blue Inner Right Swirl
    beginShape();
    vertex(3, 10);
    bezierVertex(25, 8, 50, 18, 68, 38);
    bezierVertex(80, 50, 98, 42, 90, 22);
    bezierVertex(82, 4, 55, 12, 66, 30);
    bezierVertex(72, 40, 82, 34, 76, 26);
    bezierVertex(70, 18, 76, 10, 84, 16);
    bezierVertex(94, 26, 78, 58, 58, 38);
    bezierVertex(42, 20, 22, 4, 3, 10);
    endShape(CLOSE);

    // BRIGHT ORANGE MIDDLE BLOOMING PETALS
    fill(214, 74, 24);
    beginShape();
    vertex(0, 18);
    bezierVertex(-18, 8, -28, -8, -20, -22);
    bezierVertex(-10, -30, -5, -18, 0, -12);
    bezierVertex(5, -18, 10, -30, 20, -22);
    bezierVertex(28, -8, 18, 8, 0, 18);
    endShape(CLOSE);
    //  INNER GOLDEN YELLOW BUD & DOT ACCENTS
    fill(245, 204, 91);
    beginShape();
    vertex(0, 14);
    bezierVertex(-10, 2, -12, -10, 0, -18);
    bezierVertex(12, -10, 10, 2, 0, 14);
    endShape(CLOSE);
    // Decorative Yellow Accent Dots Array
    let dotAlpha = map(sin(frameCount * 0.04), -1, 1, 50, 255);
    fill(245, 204, 91,dotAlpha);
    circle(-32, -12, 4);
    circle(32, -12, 4);
    circle(-18, -32, 3.5);
    circle(18, -32, 3.5);
    pop();
    // CENTER GREEN LEAF POINTING DOWnward
    push();
    translate(0, 20);           // Position relative to arch base
    rotate(radians(180 + 45));  // Flips leaf upside down and tilts by 45 degrees
    fill(72, 99, 51);
    noStroke();
    beginShape();
    vertex(0, 20);
    bezierVertex(-15, 8, -6, -14, 12, -28); 
    bezierVertex(12, -10, 10, 8, 0, 20);
    endShape(CLOSE);
    // Leaf Center Vein Line
    stroke(45, 65, 30);
    strokeWeight(1.2);
    noFill();
    beginShape();
    vertex(0, 18);
    bezierVertex(-2, 2, 2, -12, 10, -26);
    endShape();
    pop();
    // YELLOW SWIRL PETAL
    noStroke();
    fill(232, 168, 39);
    beginShape();
    vertex(-5, 12);
    bezierVertex(-40, 10, -75, 22, -102, 48);
    bezierVertex(-122, 68, -155, 58, -145, 28);
    bezierVertex(-135, -2, -92, 10, -108, 38);
    bezierVertex(-116, 52, -132, 44, -125, 32);
    bezierVertex(-116, 20, -124, 8, -136, 18);
    bezierVertex(-152, 32, -128, 78, -98, 52);
    bezierVertex(-72, 28, -38, 4, -5, 12);
    endShape(CLOSE);
    // Yellow Swirl Inner Maroon Accent Trace
    stroke(55, 18, 30);
    strokeWeight(0.5);
    noFill();
    beginShape();
    vertex(-125, 32);
    bezierVertex(-132, 44, -116, 52, -108, 38);
    endShape();
    // ORANGE SWIRL PETAL 
    noStroke();
    fill(214, 74, 24);
    beginShape();
    vertex(5, 12);
    bezierVertex(40, 10, 75, 22, 102, 48);
    bezierVertex(122, 68, 155, 58, 145, 28);
    bezierVertex(135, -2, 92, 10, 108, 38);
    bezierVertex(116, 52, 132, 44, 125, 32);
    bezierVertex(116, 20, 124, 8, 136, 18);
    bezierVertex(152, 32, 128, 78, 98, 52);
    bezierVertex(72, 28, 38, 4, 5, 12);
    endShape(CLOSE);
    // Orange Swirl Inner Maroon Accent Trace
    stroke(55, 18, 30);
    strokeWeight(2);
    noFill();
    beginShape();
    vertex(125, 32);
    bezierVertex(132, 44, 116, 52, 108, 38);
    endShape();
    pop();
}
function drawPetal(x, y, size) {
    fill(235, 174, 35);
    noStroke();
    ellipse(x, y, size, size * 2);
}
function drawWhiteFlower() {
    fill(245, 240, 220);
    noStroke();

    beginShape();
    vertex(0, -90);
    bezierVertex(20, -68, 32, -28, 24, -5); 
    bezierVertex(18, 8, 8, 12, 0, 10);
    bezierVertex(-8, 12, -18, 8, -22, -5);
    bezierVertex(-28, -25, -18, -60, 0, -80);
    endShape(CLOSE);
}

function drawGreenPetal() {
    fill(70, 100, 55);
    noStroke();

    beginShape();
    vertex(0, -94);
    bezierVertex(22, -60, 32, -25, 24, -5);
    bezierVertex(18, 8, 8, 12, 0, 10);
    bezierVertex(-8, 12, -18, 8, -24, -5);
    bezierVertex(-32, -25, -22, -60, 0, -80);
    endShape(CLOSE);
}

function drawMaroonPetal() {
    fill(75, 20, 35);
    stroke(48,12,25);
    strokeWeight(0.5);
    
    beginShape();
    vertex(0, -105);
    bezierVertex(-20, -115, -55, -125, -75, -115);
    bezierVertex(-95, -105, -105, -85, -100, -65);
    bezierVertex(-95, -48, -70, -38, -35, -42);
    bezierVertex(-15, -44, -8, -52, 0, -55);
    bezierVertex(8, -52, 15, -44, 35, -42);
    bezierVertex(70, -38, 95, -48, 100, -65);
    bezierVertex(105, -85, 95, -105, 75, -115);
    bezierVertex(55, -125, 20, -115, 0, -105);
    endShape(CLOSE);
}

function drawMaroonScratches() {
    stroke(245, 240, 220);
    strokeWeight(2);
    noFill();

    beginShape();
    vertex(-12, -103);
    bezierVertex(-15, -107, -15, -112, -12, -116);
    endShape();

    beginShape();
    vertex(0, -104);
    bezierVertex(-2, -108, -2, -113, 0, -117);
    endShape();

    beginShape();
    vertex(12, -103);
    bezierVertex(15, -107, 15, -112, 12, -116);
    endShape();
}
function drawYellowNachoPetal() {
    // DARK OUTER BORDER
    push();
    scale(1.03);

    fill(55, 18, 30);   // dark maroon border
    noStroke();

    beginShape();

    vertex(0, -300);

    bezierVertex(
        -18, -285,
        -50, -250,
        -68, -210
    );

    bezierVertex(
        -78, -180,
        -72, -150,
        -50, -128
        );

    bezierVertex(
        -30, -112,
        -8, -108,
        8, -120
    );

    bezierVertex(
        25, -138,
        42, -165,
        38, -195
    );

    bezierVertex(
        34, -230,
        18, -275,
        0, -305
    );

    endShape(CLOSE);
    pop();
    //yellow petal 
    fill(235, 174, 35);
    stroke(75, 20, 35);
    strokeWeight(1);

    beginShape();

    // SOFT, ROUNDED TOP
    vertex(0, -297);

    // LEFT SIDE - gently curves outward
    bezierVertex(
        -18, -285,
        -50, -250,
        -68, -210
    );

    // LEFT SIDE - small sideways curve
    bezierVertex(
        -78, -180,
        -72, -150,
        -50, -128
    );

    // BOTTOM - slightly shifted right
    bezierVertex(
        -30, -112,
        -8, -108,
        8, -120
    );

    // RIGHT SIDE - gentle sideways curve
    bezierVertex(
        25, -138,
        42, -165,
        38, -195
    );

    // RIGHT SIDE - curves back upward
    bezierVertex(
        34, -230,
        18, -275,
        0, -305
    );

    endShape(CLOSE);
}
function drawScallopArch(i) {

    let colour = i % 5;

    if (colour == 0) {
        fill(75, 20, 35);       // MAROON
    }
    else if (colour == 1) {
        fill(214, 74, 24);      // ORANGE
    }
    else if (colour == 2) {
        fill(235, 174, 35);     // YELLOW
    }
    else if (colour == 3) {
        fill(245, 240, 220);    // CREAM
    }
    else {
        fill(70, 100, 55);      // GREEN
    }

    stroke(55, 18, 30);
    strokeWeight(0.7);

    beginShape();

    // OUTER LEFT - WIDER
    vertex(-80, -365);

    // OUTER CURVE
    bezierVertex(
        -32, -377,
         42, -377,
         80, -352
    );

    // ROUND CURVED END
    bezierVertex(
         96, -338,
         98, -320,
         82, -300
    );

    // INNER RIGHT
    vertex(40, -318);

    // INNER CURVE
    bezierVertex(
         55, -330,
         57, -340,
         42, -348
    );

    // BACK TO LEFT
    bezierVertex(
         20, -360,
        -32, -363,
        -80, -365
    );

    endShape(CLOSE);
}