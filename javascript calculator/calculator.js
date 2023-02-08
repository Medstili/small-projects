const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const del = document.querySelector('.delete');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const display =document.querySelector('.display');
let disNumber ;
let operatorPlace ;

// event listeners
numbers.forEach(num =>{ num.addEventListener('click', (event)=>{
    if (num.innerHTML==='.' & display.innerHTML==='') return;
    if (num.innerHTML==='.' & display.innerHTML.includes('.')) return;
     display.innerHTML += num.innerHTML.toString()

})});
operators.forEach(operator=>{
operator.addEventListener('click', (event)=>{
    operatorPlace = operator.innerHTML;
    // console.log(operatorPlace);
    operation();

})
})
clear.addEventListener('click', (event)=>{
    allClear();
});
equal.addEventListener('click', (event)=>{
    if (display.innerHTML==='') return;
    theResult();
});
del.addEventListener('click', (event)=>{
    remove();
})

// functions 

function operation() {
       disNumber= parseFloat(display.innerHTML);
       display.innerHTML='';

       return
    };
function remove() {
  let disLength = display.innerHTML;
  let _length = disLength.slice(0, disLength.length-1);
  display.innerHTML =_length;
  return
  
};
function allClear() {
   return  display.innerHTML='';
};
function theResult() {
   let result;
   switch (operatorPlace) {
        case '+':
            result =disNumber + parseFloat(display.innerHTML);
        break;
        case '-':
            result =disNumber - parseFloat(display.innerHTML);
            break;
        case 'x':
             result =disNumber * parseFloat(display.innerHTML);
        break;
        case '÷':
             result =disNumber / parseFloat(display.innerHTML);
        break;
    default:
        break;
   }
   display.innerHTML = result
     return
};
        
    


