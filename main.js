Webcam.set(
    {
        width:350,
        height:300,
        Image_format:"png",
        png_quality:50
    }
);


camera = document.getElementById("cam");

Webcam.attach("#cam")


function snap(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/ >'
    });
}

console.log('ml5 version:',ml5.version);