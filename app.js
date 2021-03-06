const costPrice = document.querySelector("#cost-price")
const Stocks = document.querySelector("#stocks")
const sellingPrice = document.querySelector("#selling-price")
const profitOrLoss = document.querySelector("#profit-or-loss")
const Statement = document.querySelector("#statement")

const checkForProfitOrLoss = () => {
    var costPriceTotal, sellingPriceTotal;
    costPriceTotal = calculatePrice(costPrice.value, Stocks.value);
    sellingPriceTotal = calculatePrice(sellingPrice.value, Stocks.value);

    if (sellingPriceTotal !== 0 && costPriceTotal !== 0 && Stocks.value !== 0) {
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
    else {
        Statement.innerText = "Enter Valid amount and stocks value"
    }
}

const calculatePrice = (Price, stocks) => Price * stocks


const percentage = (CP, SP) => {
    var Profit = SP - CP;
    var Loss = CP - SP
    var percent = 0
    if (Profit > Loss) {
        percent = (Profit / CP) * 100;
    }
    else {
        percent = (Loss / CP) * 100;
    }
    return percent.toFixed(2);
}


profitOrLoss.addEventListener("click", checkForProfitOrLoss)
