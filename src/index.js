// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let coinsValue = {
        "H": 50,
        "Q": 25,
        "D": 10,
        "N": 5,
        "P": 1
    };

    let coins = {};

    if (currency <= 0) {
        return coins;
    } else if (currency > 10000) {
        coins.error = "You are rich, my friend! We don't have so much coins for exchange";
        return coins;
    }

    for (const coin in coinsValue) {
        const coinCount = calculate(coinsValue[coin]);
        if (coinCount > 0) {
            coins[coin] = coinCount;
        }
        if (currency === 0) break;
    }

    function calculate(coin) {
        let coinCount = division(currency, coin);
        if (coinCount > 0) {
            currency = findRemainder(currency, coin);
        }
        return coinCount;
    }

    function division(currency, coin) {
        return Math.floor(currency / coin);
    }

    function findRemainder(currency, coin) {
        return currency % coin;
    }

    return coins;
}