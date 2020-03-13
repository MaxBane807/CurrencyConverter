

function fillSelectList(currencies, listID)
{       
    let selectList = document.querySelector("#" + listID);
    for (let currency of currencies)
    {
        let option = document.createElement('option');
        option.textContent = currency.swedishname;
        option.value = currency.code;
        selectList.appendChild(option);
    }      
}

export function loadPage(currencies){

    fillSelectList(currencies,"from");
    fillSelectList(currencies,"to");

}

export function showValue(value)
{
    let answerTag = document.querySelector('#answer');
    answerTag.innerHTML = "Det blir: " + value;
}

    
