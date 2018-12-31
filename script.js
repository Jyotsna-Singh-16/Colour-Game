var red = document.querySelector(".red");
var green = document.querySelector(".green");
var blue = document.querySelector(".blue");

var changeColor = document.querySelector("#change");

var easyClick = document.querySelector("#clear");
var hardClick = document.querySelector("#unclear");

var addColor = document.querySelectorAll(".addColor");

// var boxDisplay = document.querySelector(".addColor")

var num = 6;

finalColors();

function finalColors(){
 changeColor.addEventListener("click" , function()
    {
        red.textContent = Math.floor(Math.random() * 256);
        green.textContent = Math.floor(Math.random() * 256);
        blue.textContent = Math.floor(Math.random() * 256);
   
        allColor(num);
    } );

}
var storedAns = 0;
function allColor(num){
    var ans= Math.floor(Math.random() * num);
     storedAns= ans;
    for(var j=0; j<num; j++){
    if( j === ans){
        console.log(j);
        var result = "rgb(" + red.textContent + "," + green.textContent + ","  + blue.textContent + ")";
        addColor[j].style.background=result;
        // console.log(addColor[j].style.background)
    }
    else{
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        addColor[j].style.background=bgColor;
        }
    }
}

easyLevel();

function easyLevel(){
easyClick.addEventListener("click", function(){
    num=3;
    var x = document.getElementById("appear");
    if (x.style.display === "block") {
              x.style.display = "none";
    } 
    else {
            x.style.display = "none";
    }
    allColor(num);

 });
}

hardLevel();

function hardLevel() {

 hardClick.addEventListener("click", function(){
    num=6;
    var x = document.getElementById("appear");
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
  else {
        x.style.display = "block";
    }
    allColor(num);
});
}

function myFunction(count)
{
    
            if(count === storedAns)
                {
                    document.getElementById("incorrect").style.display="none"
                    document.getElementById("correct").style.display="block"
                    SuccessVanish();
                    // alert("Correct");
                    var result = "rgb(" + red.textContent + "," + green.textContent + ","  + blue.textContent + ")";
                    // console.log(result);
                    for(var k=0; k<6; k++){
                    addColor[k].style.background=result;
                    }
                }
                else{
                    document.getElementById("correct").style.display="none"

                    document.getElementById("incorrect").style.display="block"
                    TryAgainVanish();
                    // alert("Try again");
                    // var y = document.querySelectorAll("addColor")[count];
                    // y.style.display = "none";
                }
    
               
}

function SuccessVanish() {
    setTimeout(function(){ document.getElementById("correct").style.display="none"; }, 2000);
  }

  function TryAgainVanish() {
    setTimeout(function(){ document.getElementById("incorrect").style.display="none"; }, 2000);
  }






