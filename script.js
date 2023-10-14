const numberBtns = document.querySelectorAll(".button");
const operatorBtns = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector("#equal");
const inputField = document.querySelector(".screen");
const deleteBtn = document.querySelector("#delete");

// display numbers
numberBtns.forEach(button => {
    button.addEventListener("click", function(e){
    inputField.value += e.target.value;   
    })
    
});

// display operators
operatorBtns.forEach(button => {
    button.addEventListener("click", function(e){
    inputField.value += e.target.value;   
    })
    
});

// calculation
equalBtn.addEventListener('click', function(){
    inputField.value = eval(inputField.value)
});

// clear the input field
clearBtn.addEventListener("click", function(){
    inputField.value = "";
});

// delete the last number
deleteBtn.addEventListener("click", function(){
    inputField.value = inputField.value.slice(0,-1);
})
