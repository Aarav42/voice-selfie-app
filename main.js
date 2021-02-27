var SpeechRecognition=window.webkitSpeechRecognition;
var recognation=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognation.start();
}
recognation.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if(content=="take my selfie"){
        console.log("taking selfie---");
        speak();
    }
    
}
function speak(){
    var synth=window.speechSynthesis;
    var speechdata= "taking your selfie in five seconds";
    var utterthis=new SpeechSynthesisUtterance(speechdata);
synth.speak(utterthis);
Webcam.attach(camera);
 setTimeout(
     function(){
         takesnapshot();
         save();

     },5000

 );
     
 



}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfie_image' src='"+data_uri+"'>";
    });
}
function save(){
   link=document.getElementById("link");
   image=document.getElementById("selfie_image").src;
   link.href=image;
   link.click();
}
