
// Arithmetic operators example
const idAdd = document.querySelector("#idAdd");
const idSub = document.querySelector("#idSub");
const idNum1 = document.querySelector("#num1");
const idNum2 = document.querySelector("#num2");
const idRes = document.querySelector("#res");

idAdd.addEventListener('click',(event)=>{
     event.preventDefault();
    let num1 = Number.parseFloat(idNum1.value);
    let num2 = Number.parseFloat(idNum2.value);
    idRes.value = `${num1} + ${num2} = ${num1 + num2}`;
})

idSub.addEventListener('click',(event)=>{
    event.preventDefault();
   let num1 = Number.parseFloat(idNum1.value);
   let num2 = Number.parseFloat(idNum2.value);
   idRes.value = `${num1} - ${num2} = ${num1 - num2}`;
})

// Emi calculator example

const idFromTime = document.querySelector("#idFromTime");
const idToTime = document.querySelector("#idToTime");

const idFrom = document.querySelector("#idFrom");
const idTo = document.querySelector("#idTo");

idFromTime.addEventListener('keyup',(event)=>{
        event.preventDefault();
        let time = Number.parseFloat(event.target.value);
        let fromUnit = idFrom.value;
        let toUnit = idTo.value;
        if(fromUnit==="millisecond" && toUnit==="second"){
            res = time / 1000;
            idToTime.value = res;
        }
        
})

idFrom.addEventListener('change',(event)=>{
    console.log("Change is working")
    event.preventDefault();
    let time = Number.parseFloat(idFromTime.value);
    let fromUnit = idFrom.value;
    let toUnit = idTo.value;
    console.log(fromUnit+" "+toUnit)
   
})


function conversion(fromUint,toUnit,from,to){
    if(fromUnit==="millisecond" && toUnit==="second"){
        res = time / 1000;
        idToTime.value = res;
    }
    if(fromUnit==="second" && toUnit==="minute"){
        res = time / 60;
        idToTime.value = res;
    }
}