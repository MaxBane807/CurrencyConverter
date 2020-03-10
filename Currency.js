function CurrencyModule() {

    class Currency
    {
        constructor(shortname,name)
        {
            this.shortname = shortname;
            this.name = name;
        }
        shortname;
        name;
        rateSourceUSD;
    }

}