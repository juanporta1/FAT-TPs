const bC = document.getElementById('bC');
const bSub = document.getElementById('bSub');
const bAdd = document.getElementById('bAdd');
const bMul = document.getElementById('bMul');
const bDiv = document.getElementById('bDiv');
const bEq= document.getElementById('bEq');
const display = document.getElementById('display');
const secondaryDisplay = document.getElementById('secondary-display');
const bNumbers = [];

let principalValue = "0";
let secondaryValue = "0";
let op = "";
let isFirst = true;
let isAfterEq = false;
let reset = false;

function makeAOperation(value1, value2, operation){
    value1 = Number(value1);
    value2 = Number(value2);
    let result = 0;
    switch (op){
        case "add":
            result = value1 + value2;
            break;
        case "mul":
            result = value1 * value2;
            break;
        case "div":
            result = value1 / value2;
            break;
        case "sub":
            result = value1 - value2;
            break
        case "":
            result = value1;
    }
    return result;
}

for (let i = 0; i < 10; i++){
    const bNumber = document.getElementById(`b${i}`);
    bNumber.addEventListener('click', (e) => {
        if (reset){
            principalValue = "0";
            secondaryValue = "0";
            isFirst = true;
            op = "";
            display.value = "0";
            reset = false;
        }
        if (isFirst){
            principalValue = principalValue.concat(`${i}`)
        }else{
            secondaryValue = secondaryValue.concat(`${i}`)
        }
        if (display.value != "0"){
            display.value = display.value.concat(`${i}`)
        }
        else{
            display.value = `${i}`    
        }
        
        
    })
    bNumbers.push();
}

bC.addEventListener('click', (e) => {
    principalValue = "0";
    secondaryValue = "0";
    op = "";
    isFirst = true;
    display.value = principalValue;
});

bSub.addEventListener('click', (e) => {
    if (isFirst){
        display.value = 0;
        isFirst = false;
        op = "sub";
    }else if (!isFirst && !isAfterEq){
        principalValue = makeAOperation(Number(principalValue),Number(secondaryValue),op).toString()
        display.value = 0;
        secondaryValue = "0";
        op = "sub";
    }else if (isAfterEq && !isFirst){
        display.value = 0;
        secondaryValue = "0";
        op = "sub";
        isAfterEq = false;
    }
    secondaryDisplay.value = Number(principalValue).toString() + "-";
});

bAdd.addEventListener('click', (e) => {
    if (isFirst){
        display.value = 0;
        isFirst = false;
        op = "add";
    }else if (!isFirst && !isAfterEq){
        principalValue = makeAOperation(Number(principalValue),Number(secondaryValue),op).toString()
        display.value = 0;
        secondaryValue = "0";
        op = "add";
    }else if (isAfterEq && !isFirst){
        display.value = 0;
        secondaryValue = "0";
        op = "add";
        isAfterEq = false;
    }
    secondaryDisplay.value = Number(principalValue).toString() + "+";
});

bMul.addEventListener('click', (e) => {
    if (isFirst){
        display.value = 0;
        isFirst = false;
        op = "mul";
    }else if (!isFirst && !isAfterEq){
        principalValue = makeAOperation(Number(principalValue),Number(secondaryValue),op).toString()
        display.value = 0;
        secondaryValue = "0";
        op = "mul";
    }else if (isAfterEq && !isFirst){
        display.value = 0;
        secondaryValue = "0";
        op = "mul";
        isAfterEq = false;
        
    }
    secondaryDisplay.value = Number(principalValue).toString() + "x";
});

bDiv.addEventListener('click', (e) => {
    if (isFirst){
        display.value = 0;
        isFirst = false;
        op = "div";
    }else if (!isFirst && !isAfterEq){
        principalValue = makeAOperation(Number(principalValue),Number(secondaryValue),op).toString()
        display.value = 0;
        secondaryValue = "0";
        op = "div";
    }else if (isAfterEq && !isFirst){
        display.value = 0;
        secondaryValue = "0";
        op = "div";
        isAfterEq = false;
        
    }
    secondaryDisplay.value = Number(principalValue).toString() + "÷";
});

bEq.addEventListener("click", () => {
    if (!isFirst){
        principalValue = makeAOperation(Number(principalValue),Number(secondaryValue),op).toString();
        display.value = principalValue;
        isAfterEq = true;
        reset = true;
    }else{
        principalValue = makeAOperation(Number(principalValue),Number(secondaryValue),op).toString();
        display.value = principalValue;
    }
    secondaryDisplay.value = "";
});