var left_button_1 = document.getElementById("left_button_1");
var right_button_1 = document.getElementById("right_button_1");
var left_button_2 = document.getElementById("left_button_2");
var right_button_2 = document.getElementById("right_button_2");
var left_button_3 = document.getElementById("left_button_3");
var right_button_3 = document.getElementById("right_button_3");
var left_button_4 = document.getElementById("left_button_4");
var right_button_4 = document.getElementById("right_button_4");

var index= 0;

var imgs= ["DSC07776-2.jpg", "DSC07778.jpg", "DSC07780.jpg", "DSC07804.jpg", "1793022020077.jpg", "1793022020099.jpg", "1793022020125.jpg", "1793022020155.jpg"];
var imgs2= ["1792957084524.jpg", "1792957084534.webp", "1792957084544.webp", "1792957084554.jpg", "1792957084576.jpg"];
var imgs3= ["Capture d'écran 2026-09-29 211412.png", "Capture d'écran 2026-09-29 213239.png", "Capture d'écran 2026-09-29 213324.png", "Capture d'écran 2026-09-29 213411.png", "Capture d'écran 2026-09-29 213430.png"];
var imgs4= ["Capture d'écran 2026-09-18 231748.png", "Capture d'écran 2026-09-18 231938.png", "Capture d'écran 2026-09-18 232016.png", "Capture d'écran 2026-09-18 232053.png"];   


function button_img_left(){

if(index>0){
    index--;}
    document.getElementById("image1").src=imgs[index];
    document.getElementById("image2").src=imgs[index + 1];
    document.getElementById("image3").src=imgs[index + 2];
    document.getElementById("image4").src=imgs[index + 3];
}

function button_img_right(){
    if(index < imgs.length - 4){
        index++;
    }
    document.getElementById("image1").src=imgs[index];
    document.getElementById("image2").src=imgs[index + 1];
    document.getElementById("image3").src=imgs[index + 2];
    document.getElementById("image4").src=imgs[index + 3];
}