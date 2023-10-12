const numberBtns = document.querySelectorAll(".button");
const operatorBtns = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector("#equal");
const inputField = document.querySelector(".screen");
const previousOperandEl = document.querySelector(".previousOperand");
const currentOperandEl = document.querySelector(".currentOperand");

// display numbers
numberBtns.forEach(button => {
    button.addEventListener("click", function(e){
    // console.log(e.target.value);
    inputField.innerHTML += e.target.value;
     
    })
    
});


// calculation

// const calcNumber = function(previousOperand, currentOperand, operator){
//     switch (operator) {
//         case "+":
//             previousOperand + currentOperand;
//             break;
//         case "-":
//             previousOperand - currentOperand;
//             break;
//         case "*":
//             previousOperand * currentOperand;
//             break;
//         case "/":
//             previousOperand / currentOperand;
//             break;        
//         default:
//             `Enter valid operator;`
//             break;
//     }
// }
//  console.log(calcNumber(2,3,"+"));

// clear the input field
// clearBtn.addEventListener("click", function(){
//     inputField.value = "";
// });
