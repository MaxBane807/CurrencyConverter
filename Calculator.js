export default function CalculateValue(currencies,fromCode,toCode,askedValue)
{
    let fromCurrency;
    let toCurrency;

    for (let currency of currencies)
    {
        if (currency.code == fromCode)
        {
            fromCurrency = currency;
        }
        else if (currency.code == toCode)
        {
            toCurrency = currency;
        }
    }

    //1.Omvandla från fromCurrency till dollar
    let rate = 1/fromCurrency.rateSourceUSD;  
    let dollarvalue = askedValue * rate;

    //2. Omvandlar från dollar till toCurrency
    return dollarvalue * toCurrency.rateSourceUSD;

}