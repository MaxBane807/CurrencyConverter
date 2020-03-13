export default async function GetData(currencies){

    const accesskey = "bc416e43dd120c5ad739e5ece8314f11";

    let baseUrl = "http://apilayer.net/api/live?access_key=" + accesskey;

    let url = baseUrl + "&currencies=";

    let counter = 0;
    for (let currency of currencies)
    {
        if (counter == 0)
        {
            url += currency.code;
        }
        else
        {
            url += ("," + currency.code);
        }
        counter++;
    }
    
    return await fetch(url)
    .then(response => response.json())
    .then(answer => {

        let counter = 0;
        for (let quote in answer.quotes)
        {
            currencies[counter].rateSourceUSD = answer.quotes[quote];
            counter++;
        }
        return currencies;
    });
    
}