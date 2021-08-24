

window.onload = function domcalc(){

    const calculator = document.createElement("div");
    calculator.setAttribute("class","calc")
    //calculator.setAttribute("onclick","keysValue()");

    const calcdisplay = document.createElement("div");
    calcdisplay.setAttribute("class","calcdisplay");
    const num = document.createElement("p");
    num.innerText = 0;
    calcdisplay.append(num);
    
    const calckeys = document.createElement("div");
    calckeys.setAttribute("class","calc_keys");
   

    const calcrow1 = document.createElement("div");
    calcrow1.setAttribute("class","calcrow");
    const acbutton = document.createElement("button");
    acbutton.setAttribute("data-action","clear");
    acbutton.setAttribute("class","double");
    acbutton.innerText = "AC";
    const modbutton = document.createElement("button");
    modbutton.setAttribute("class","math_calc");
    modbutton.setAttribute("data-action","sub");
    modbutton.innerText = "%";
    const divbutton = document.createElement("button");
    divbutton.setAttribute("class","math_calc");
    divbutton.setAttribute("data-action","div");
    divbutton.innerText = "÷";
    calcrow1.append(acbutton,modbutton,divbutton);


    const calcrow2 = document.createElement("div");
    calcrow2.setAttribute("class","calcrow");
    const button7 = document.createElement("button");
    
    button7.innerText = 7;
    const button8 = document.createElement("button");
    button8.innerText = 8;
    const button9 = document.createElement("button");
    button9.innerText = 9;
    const mulbutton = document.createElement("button");
    mulbutton.setAttribute("class","math_calc");
    mulbutton.setAttribute("data-action","mul");
    mulbutton.innerText = "*";
    calcrow2.append(button7,button8,button9,mulbutton);


    const calcrow3 = document.createElement("div");
    calcrow3.setAttribute("class","calcrow");
    const button4 = document.createElement("button");
    button4.innerText = 4;
    const button5 = document.createElement("button");
    button5.innerText = 5;
    const button6 = document.createElement("button");
    button6.innerText = 6;
    const subbutton = document.createElement("button");
    subbutton.setAttribute("class","math_calc");
    subbutton.setAttribute("data-action","sub");
    subbutton.innerText = "-";
    calcrow3.append(button4,button5,button6,subbutton);


    const calcrow4 = document.createElement("div");
    calcrow4.setAttribute("class","calcrow");
    const button1 = document.createElement("button");
    button1.innerText = 1;
    const button2 = document.createElement("button");
    button2.innerText = 2;
    const button3 = document.createElement("button");
    button3.innerText = 3;
    const addbutton = document.createElement("button");
    addbutton.setAttribute("class","math_calc");
    addbutton.setAttribute("data-action","add");
    addbutton.innerText = "+";
    calcrow4.append(button1,button2,button3,addbutton);
   
    
    const calcrow5 = document.createElement("div");
    calcrow5.setAttribute("class","calcrow");   
    const button0 = document.createElement("button");
    button0.setAttribute("class","double");
    button0.innerText = 0;
    const decibutton = document.createElement("button");
    decibutton.setAttribute("data-action","decimal");
    decibutton.innerText = ".";
    const equalbutton = document.createElement("button");
    equalbutton.setAttribute("class","math-equal");
    equalbutton.setAttribute("data-action","calculate");
    equalbutton.innerText = "=";
    calcrow5.append(button0,decibutton,equalbutton);

    calckeys.append(calcrow1,calcrow2,calcrow3,calcrow4,calcrow5);

    calculator.append(calcdisplay,calckeys);

    document.body.append(calculator);


const calc = document.querySelector(".calc");
const keys = document.querySelector(".calc_keys");
console.log(keys);
const display = document.querySelector(".calcdisplay");
const buttonclass = document.querySelector("math_calc");

keys.addEventListener("click",e => {
    if(e.target.matches("button")){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.innerText;
        const previousKeyType = calc.dataset.previousKeyType;
        if(!action){
            console.log('number Key!');          
            if(displayedNum === "0" || previousKeyType === 'operator'){
                display.textContent = keyContent;
            }
            else{
                display.textContent = displayedNum + keyContent;
            }
        }
        if(action=== "add" || action=== "sub" || action=== "mul" || action=== "div" || action=== "mod"){
            console.log("operator Keys");
            // key.classList.add('is-depressed');
            calc.dataset.previousKeyType = "operator";

            calc.dataset.firstValue = displayedNum;
            calc.dataset.operator = action;    
            
            console.log(key);
                    }
        if(action === "decimal"){
            console.log("decimal keys");
            if(!displayedNum.includes("."))
            display.textContent = displayedNum + ".";
        }
        if(action === "clear"){
            console.log("clear key");
            display.textContent = 0;
        }
        if(action === "calculate"){
            
            console.log("equal key");


            const secondValue = displayedNum;

            const firstValue = calc.dataset.firstValue;
            const operator = calc.dataset.operator;

            display.textContent = calculate(firstValue,operator,secondValue);
        }

        
    }   
})


    const calculate = (num1 , op , num2) => {
     
       
        let result = "";

        if(op === "add"){
            result = +(num1) + +(num2);
        }
        if(op === "sub"){
            result = +(num1) - +(num2);;
        }
        if(op === "mul"){
            result = +(num1) * +(num2);;
        }
        if(op === "div"){
            result = +(num1) / +(num2);;
        }
        if(op === "mod"){
            result = +(num1) % +(num2);;
        }

        return result;
    }



}

