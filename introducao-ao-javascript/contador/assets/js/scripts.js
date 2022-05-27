/*var currentNumberWeapper = document.getElementById('currentNumber');

var currentNumber = 0;


function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWeapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWeapper.innerHTML = currentNumber;

}
*/

var currentNumberWeapper = document.getElementById('currentNumber');
var btnsub = document.getElementById('btnsub');
var btninc = document.getElementById('btninc');
btnsub.addEventListener("click", decrement);
btninc.addEventListener("click", increment);
var currentNumber = 0;



function increment() {
    if (currentNumber === 10) {
        btninc.removeEventListener("click");
    }
    else {
       currentNumber = currentNumber + 1;
       currentNumberWeapper.innerHTML = currentNumber;
    }
    
    if (currentNumber < 0) {
       document.getElementById('currentNumber').style.color = 'red';
    }
    else {
      document.getElementById('currentNumber').style.color = 'blue';  
    } 
}

function decrement() {
    if (currentNumber === -10) {
      btnsub.removeEventListener("click");
    }
    else { 
      currentNumber = currentNumber - 1;
      currentNumberWeapper.innerHTML = currentNumber;   
    }

    if (currentNumber < 0) {
      document.getElementById('currentNumber').style.color = 'red';
    }
    else {
    document.getElementById('currentNumber').style.color = 'blue';  
    }
}