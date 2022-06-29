const objects=["fan","basketball","football","ball","clock","ears","phone" ,"cake"," cookie","donut"]
function topic(){
    var topic=objects[Math.round(Math.random()*10)];
    document.getElementById("rtopic").innerHTML="Your topic is : "+topic;  
    localStorage.setItem("topic",topic);
}
function go(){
    window.location="main.html";
}