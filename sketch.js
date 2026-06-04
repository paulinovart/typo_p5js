
let fonts = [];
let l;

let letters = [];

function preload(){
    //fonts[0] = loadFont('fonts/DeezerProduct-Bold.ttf');
    //fonts[1] = loadFont('fonts/AcuminVariableConcept.otf');
   // fonts[2] = loadFont('fonts/kenpixel.ttf');
}



fonts[0] = ('Courier New');
fonts[1] = ('Impact');
fonts[2] = ('Trebuchet MS');








function setup(){
    canvasHeight = windowHeight - 200;

     canvasWidth = canvasHeight 
  

createCanvas(canvasWidth, canvasHeight);
angleMode (DEGREES);


}


function draw(){
    background("#0D274F");

    for (let i = letters.length-2; i >= 0 ; i--){
        letters[i].update();
        letters[i].display();


        if (letters[i].offScreen() == true){
            letters.splice(i, 1);
        }
    }


   
}

function mouseDragged(){//built function in p5, called everytime u drag ur mouse
   letters.push(new Letter(mouseX, mouseY));
}