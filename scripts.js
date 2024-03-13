const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencyOptions = document.querySelector(".currency-options");
const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
const currencyValueToConverted = document.querySelector(".currency-value");

convertButton.addEventListener("click", convertValues);

function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value);

    const realToday = 1.00;
    const dolarToday = 5.00;
    const euroToday = 5.41;
    const libraToday = 6.33;
    const bitcoinToday = 257.05;

    let convertedValue;

    if (currencySelect.value === "real") {
        if (currencyOptions.value === "dolar") {
            convertedValue = inputCurrencyValue / dolarToday;
        } else if (currencyOptions.value === "euro") {
            convertedValue = inputCurrencyValue / euroToday;
        } else if (currencyOptions.value === "libra") {
            convertedValue = inputCurrencyValue / libraToday;
        } else if (currencyOptions.value === "bitcoin") {
            convertedValue = inputCurrencyValue / bitcoinToday;
        } else {
            convertedValue = inputCurrencyValue;
        }
    } else if (currencySelect.value === "dolar") {
        if (currencyOptions.value === "real") {
            convertedValue = inputCurrencyValue * dolarToday / realToday;
        } else if (currencyOptions.value === "euro") {
            convertedValue = inputCurrencyValue * dolarToday / euroToday;
        } else if (currencyOptions.value === "libra") {
            convertedValue = inputCurrencyValue * dolarToday / libraToday;
        } else if (currencyOptions.value === "bitcoin") {
            convertedValue = inputCurrencyValue * dolarToday / bitcoinToday;
        } else {
            convertedValue = inputCurrencyValue;
        }
    } else if (currencySelect.value === "euro") {
        if (currencyOptions.value === "real") {
            convertedValue = inputCurrencyValue * euroToday / realToday;
        } else if (currencyOptions.value === "dolar") {
            convertedValue = inputCurrencyValue * euroToday / dolarToday;
        } else if (currencyOptions.value === "libra") {
            convertedValue = inputCurrencyValue * euroToday / libraToday;
        } else if (currencyOptions.value === "bitcoin") {
            convertedValue = inputCurrencyValue * euroToday / bitcoinToday;
        } else {
            convertedValue = inputCurrencyValue;
        }
    } else if (currencySelect.value === "libra") {
        if (currencyOptions.value === "real") {
            convertedValue = inputCurrencyValue * libraToday / realToday;
        } else if (currencyOptions.value === "dolar") {
            convertedValue = inputCurrencyValue * libraToday / dolarToday;
        } else if (currencyOptions.value === "euro") {
            convertedValue = inputCurrencyValue * libraToday / euroToday;
        } else if (currencyOptions.value === "bitcoin") {
            convertedValue = inputCurrencyValue * libraToday / bitcoinToday;
        } else {
            convertedValue = inputCurrencyValue;
        }
    } else if (currencySelect.value === "bitcoin") {
        if (currencyOptions.value === "real") {
            convertedValue = inputCurrencyValue * bitcoinToday / realToday;
        } else if (currencyOptions.value === "dolar") {
            convertedValue = inputCurrencyValue * bitcoinToday / dolarToday;
        } else if (currencyOptions.value === "euro") {
            convertedValue = inputCurrencyValue * bitcoinToday / euroToday;
        } else if (currencyOptions.value === "libra") {
            convertedValue = inputCurrencyValue * bitcoinToday / libraToday;
        } else {
            convertedValue = inputCurrencyValue;
        }
    } else {
        convertedValue = inputCurrencyValue;
    }

    currencyValueToConvert.innerHTML = inputCurrencyValue.toFixed(2);
    currencyValueToConverted.innerHTML = convertedValue.toFixed(2);
}


currencySelect.addEventListener("change", changeCurrency);

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");
  
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro";
        currencyImage.src = "assets/real.png.webp"; 
    }

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano";
        currencyImage.src = "assets/dolar.png"; 
    }
    
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "assets/euro.png"; 
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "assets/bitcoin.png"; 
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra";
        currencyImage.src = "assets/libra.png"; 
    }
}



currencyOptions.addEventListener("change", currencyChange);

function currencyChange() {
    const nameCurrency = document.getElementById("name-currency");
    const imageCurrency = document.querySelector(".img-currency");

    if (currencyOptions.value == "real") {
        nameCurrency.innerHTML = "Real Brasileiro";
        imageCurrency.src = "assets/real.png.webp"; 
    }

    if (currencyOptions.value == "dolar") {
        nameCurrency.innerHTML = "Dolar Americano";
        imageCurrency.src = "assets/dolar.png"; 
    }
    
    if (currencyOptions.value == "euro") {
        nameCurrency.innerHTML = "Euro";
        imageCurrency.src = "assets/euro.png"; 
    }

    if (currencyOptions.value == "bitcoin") {
        nameCurrency.innerHTML = "Bitcoin";
        imageCurrency.src = "assets/bitcoin.png"; 
    }

    if (currencyOptions.value == "libra") {
        nameCurrency.innerHTML = "Libra";
        imageCurrency.src = "assets/libra.png"; 
    }


}