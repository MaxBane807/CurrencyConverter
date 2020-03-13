import Currency from './Currency.js';
import {showValue,loadPage} from './DomManipulation.js';
import GetData from './GetData.js';
import Calculator from './Calculator.js';

let currencylist = Currency();

loadPage(currencylist);

let lastFetched = localStorage.getItem("lastfetched");

let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

//Ta bort nedanstående
lastFetched = null;

if (lastFetched == null || lastFetched != date)
{
    GetData(currencylist).then(currencylist =>{

        let jsonCurrencyList = JSON.stringify(currencylist);
        localStorage.setItem("currencies",jsonCurrencyList);
        localStorage.setItem("lastfetched",date);
    });
    
    var finishedList = JSON.parse(localStorage.getItem("currencies"));
}
else{   
    var finishedList = JSON.parse(localStorage.getItem("currencies"));
}

let button = document.querySelector('#convertButton');

button.addEventListener('click',() => {

    let fromList = document.querySelector('#from');
    let toList = document.querySelector('#to'); 
    let valueInput = document.querySelector('#askedAmount'); 
    let value = Calculator(finishedList, fromList.value, toList.value,valueInput.value);
    showValue(value);
});
