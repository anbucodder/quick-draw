var timer=0;
function setup(){
    classifier = ml5.imageClassfier("DoodleNet");
    console.log("ml5 vertion: "+ml5.vertion)
}
function setup(){
    canvas = createCanvas(900,400);
    canvas.center();
    canvas.background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}
function draw(){
    strokeWeight(5);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function settopic(){
    document.getElementById("topic").innerHTML="Topic : "+localStorage.getItem('topic')
}
function clearCanvas(){
    canvas.background("white");
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("label").innerHTML="Label : "+results[0].label;
        document.getElementById("confidence").innerHTML="Confidence : "+Math.round(results[0].confidence*100)+"%";
        var utterthis = new SpeechSynthesisUtterance(results[0].label);
        synth.speek(utterthis);
    }
}