//alert("Hello World");

/*
   Comment
*/

  //Создание переменных
  // 1. var
  // 2. let

var colorArray = [
            "#5A9C6E",
            "#A8BF5A",
            "#2a0132",
            "#CCC",
            "#000",
            "#00ff00"
            ];
var i = 0;         

function changeColor()  {
    document.body.style.background = colorArray[i];

    i++;

    console.log(colorArray[i])

    if (i> colorArray.length  -1) {
        i = 0;
    }
}

function selectColor() {
  let color = document.getElementById("color").value;
  document.body.style.background = color;

  console.log(color);
} 

