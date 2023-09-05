//create a currency code converter
//create a function that takes in a number and a currency code
//convert the number to the currency code
//return the number in the currency code
//create a function that takes in a number and a currency code
//convert the number to the currency code
//return the number in the currency code


//click result button to convert currency
document.getElementById("convert").addEventListener("click", function () {

    //get the value of the input source currency code
    let sourceCurrencyCode = document.getElementById("sourceCurrencyCode").value;


    //get the value of the input target currency code
    let targetCurrencyCode = document.getElementById("targetCurrencyCode").value;

    convertCurrencyRate(sourceCurrencyCode, targetCurrencyCode)

});

//CREATE A function that takes currency rate and name
function convertCurrencyRate(sourceCurrencyCode, targetCurrencyCode) {
    //source api url
    let url = "https://api.exchangerate.host/latest?base=" + targetCurrencyCode + "&symbols=" + sourceCurrencyCode;
    //create a request variable
    let request = new XMLHttpRequest();
    //open a new connection, using the GET request on the URL endpoint
    request.open('GET', url, true);
    //response type
    request.responseType = 'json';
    //send request
    request.send();

    //load response
    request.onload = function () {
        //get response
        let response = request.response;
        //get currency amount
        let currencyAmount = document.getElementById("sourceCurrency").value;
        //get currency rate
        let currencyRate = response.rates[sourceCurrencyCode];
        //call function to convert currency
        let result = (1 / currencyRate) * currencyAmount;
        //display result
        document.getElementById("targetCurrency").value = result;
    }

}

