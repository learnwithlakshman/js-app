function add(num1,num2){
    return num1 + num2;
}

add = (num1,num2)=> num1 + num2;
mul = (num1,num2)=> num1 * num2;

perform = function(callback,arr){
      let res = arr[0];
      for(let i=1;i<arr.length;i++){
          res = callback(res,arr[i]);
      }
      return res;
}

let result = perform((num1,num2)=> num1 + num2,[1,2,3,4,5,6,7,8,9,10]);
console.log(result);

