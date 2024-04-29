class Currency {
    constructor() {
        //this.url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_ocZp4cp6UK4Z4blqCAps2DN4ZErmctGS5K92zlwd&base_currency=";
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=DwubsVWBQzrAI1rY529XjbZy1rny84BA3XaIujP0&base_currency=";
    }


    async exchange(amount, firstCurreny, secondCurrency) {
        const response = await fetch(`${this.url}${firstCurreny}`);
        const result = await response.json();
        //console.log(result.data[secondCurrency]);
        const exchangedResult = amount * result.data[secondCurrency];
        return exchangedResult;
    }
}

