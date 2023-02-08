const button = document.querySelector('button');
const bill = document.querySelector('.bill');
const selectedOptions = document.querySelector('#services');
const people = document.querySelector('.sumOfPeople');
const tipDiv = document.querySelector('tip-calculator');
const theAmount = document.querySelector('.amount');
const subDiv = document.querySelector('.subResult');

function calculator() {
    if (bill.value===''||people.value===''||selectedOptions.value==='') {
        alert('enter the information first !!!');
    return;
    } else if (bill.value==='.'||people.value==='.') {
        alert('the information is not correct');
        tipDiv.style.display ='none';
    return;
    } ;
    let result;
    let parseBill = parseFloat(bill.value);
    let parseSelectedOptions = parseFloat(selectedOptions.value) ;
    let parsePeople = parseInt(people.value);

    people.value=parsePeople;

    switch (parseSelectedOptions) {
        case 5:
            result = (parseBill*0.05)/parsePeople;
            break;
        case 10:
            result = (parseBill*0.1)/parsePeople;
            
            break;
        case 15:
            result = (parseBill*0.15)/parsePeople;
            
            break;
        case 20:
            result = (parseBill*0.2)/parsePeople;
            
            break;
        case 30:
            result = (parseBill*0.3)/parsePeople;
            
            break;
        default:
            break;
    };
    
    let fixedResult = result.toFixed(2);
    subDiv.style.display = 'block';
    document.querySelector('.tip-calculator').style.height ='720px'
    theAmount.innerHTML ='$' +' '+fixedResult;

}


button.addEventListener('click', ()=>{
    
    calculator();
    
});