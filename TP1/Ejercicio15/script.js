const bC = document.getElementById('bC');
const bSub = document.getElementById('bSub');
const bAdd = document.getElementById('bAdd');
const bMul = document.getElementById('bMul');
const bDiv = document.getElementById('bDiv');
const bEq= document.getElementById('bEq');
const display = document.getElementById('display');
const bNumbers = [];

let v1 = 0;
let v2 = 0;
let result = 0;
let op = "";
let isFirst = true;

for (let i = 0; i < 10; i++){
    const bNumber = document.getElementById(`b${i}`);
    bNumber.addEventListener('click', (e) => {
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
    v1 = 0;
    v2 = 0;
    op = "";
    isFirst = true;

    display.value = v1;
});

bSub.addEventListener('click', (e) => {
    v1 = Number(display.value);
    op = "sub";
    display.value = v2;
    isFirst = false;
});

bAdd.addEventListener('click', (e) => {
    if(!isFirst){
        v2 = Number(display.value);
        result = v1 + v2;
        display.value = result;
        v1 = result;
        op = "add";
        isFirst = false;
        
    }else{
        v1 = Number(display.value);
        op = "add";
        isFirst = false;
        display.value = v2;
    }
    
});

bMul.addEventListener('click', (e) => {
    v1 = Number(display.value);
    op = "mul";
    isFirst = false;
    display.value = v2;
});

bDiv.addEventListener('click', (e) => {
    
    v1 = Number(display.value);
    op = "div";
    isFirst = false;
    display.value = v2;
});

bEq.addEventListener("click", () => {
    if (!isFirst){
        v2 = Number(display.value);
        let result = 0;
        switch (op){
            case "add":
                result = v1 + v2;
                break;
            case "mul":
                result = v1 * v2;
                break;
            case "div":
                result = v1 / v2;
                break;
            case "sub":
                result = v1 - v2;
                break
        }
        display.value = result.toString();
    } 
});