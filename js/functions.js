inputNum = document.querySelector("#inputNum");
tableResult = document.querySelector("#tableResult");

inputNum.addEventListener('keyup', (event) => {
    let str = event.target.value;
    if (str && event.keyCode==13) {
        let num = Number.parseInt(event.target.value);
        str = "<br>";
        for (let i = 1; i <= 10; i++) {
            str += `${num} &nbsp; * &nbsp;   ${i} &nbsp;  =  &nbsp;  ${num * i} <br>`;
        }
       
    }else{
        str = "";

    }
    tableResult.innerHTML = str;
})

//-------------------------------------------------------------------------------------------

num1 = document.querySelector("#num1");
num2 = document.querySelector("#num2");
btnPrime = document.querySelector("#btnPrime");
idPrimes = document.querySelector("#idPrimes");

num1.addEventListener('keyup',()=>{
    let strNum1 = num1.value;
    if(strNum1){
        num1Error.classList.remove('error');
        num1Error.classList.add('removeerror');
           
    }else{
        num1Error.classList.remove('removeerror');
        num1Error.classList.add('error');
    }
})

num2.addEventListener('keyup',()=>{
    let strNum2 = num2.value;
    if(strNum2){
        num2Error.classList.remove('error');
        num2Error.classList.add('removeerror');
        
    }else{
        num2Error.classList.remove('removeerror');
         num2Error.classList.add('error');
     }
})

btnPrime.addEventListener('click',()=>{
    let strNum2 = num2.value;  
    let strNum1 = num1.value;
    if(strNum1 && strNum2){
            let lb = Number.parseInt(strNum1);
            let ub = Number.parseInt(strNum2);
            idPrimes.innerHTML = "We are going to work to generate primes";
    }else{
        num2Error.classList.remove('removeerror');
        num2Error.classList.add('error'); 
        num1Error.classList.remove('removeerror');
        num1Error.classList.add('error');
    }
})

//----------------------------------------------------------------------------------------------------

