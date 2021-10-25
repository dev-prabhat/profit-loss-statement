var costPrice = document.querySelector("#cost-price")
var Stocks = document.querySelector("#stocks")
var sellingPrice = document.querySelector("#selling-price")
var profitOrLoss = document.querySelector("#profit-or-loss")
var Statement = document.querySelector("#statement")

function checkForProfitOrLoss() {
    var costPriceTotal, sellingPriceTotal; //TODO - Corner Case like when CP , SP and Stocks are null or not entered
    costPriceTotal = calculatePrice(costPrice.value, Stocks.value);
    sellingPriceTotal = calculatePrice(sellingPrice.value, Stocks.value);

    if (sellingPriceTotal >= costPriceTotal) {
        var ProfitPercent = percentage(costPriceTotal, sellingPriceTotal)
        var Profit = sellingPriceTotal - costPriceTotal
        Statement.innerText = `Hii , Profit is ${Profit} Rupees and ${ProfitPercent}% percent`
    }
    else {
        var LossPercent = percentage(costPriceTotal, sellingPriceTotal)
        var Loss = costPriceTotal - sellingPriceTotal
        Statement.innerText = `Hii , Loss is ${Loss} Rupees and ${LossPercent}% percent`
    }
}

function calculatePrice(Price, stocks) {
    return Price * stocks
}

function percentage(CP, SP) {
    var Profit = SP - CP;
    var Loss = CP - SP
    if (SP > CP) {
        return (Profit / SP) * 100;
    }
    else {
        return (Loss / CP) * 100;
    }

}


profitOrLoss.addEventListener("click", checkForProfitOrLoss)
