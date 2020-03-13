

    class Currency
    {
        constructor(code,swedishname)
        {
            this.code = code;
            this.swedishname = swedishname;
        }
        code;
        swedishname;
        rateSourceUSD;       
    }

    

    export default function initializeCurrencies()
    {
        const currencyInfo = [
        {code:'USD', name:'Amerikansk Dollar'},
        {code:'EUR', name:'Euro'},
        {code:'JPY', name:'Japansk Yen'},
        {code:'GBP', name:'Brittisk Pund'},
        {code:'AUD', name:'Australisk Dollar'},
        {code:'CAD', name:'Kanadensisk Dollar'},
        {code:'CHF', name:'Schweizisk Franc'},
        {code:'CNY', name:'Kinesisk Yuan'},       
        {code:'SEK', name:'Svensk Krona'},
        {code:'NZD', name:'Nyzeeländsk Dollar'}];
        
        let currencyList = new Array();
        for (let currency of currencyInfo)
        {
            currencyList.push(new Currency(currency.code,currency.name));
        }

        return currencyList;
    }
