

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
    
    export default function loadPage(currencies){

        fillSelectList(currencies,"from");
        fillSelectList(currencies,"to");
    }

    
