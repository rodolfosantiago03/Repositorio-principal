const convertButton = document.querySelector(".convert-button") /// Botão converter ///
const currencySelect = document.querySelector(".box-of-select-to-converted") // caixa com as seleçoes de moedas *//

function convertValues(){
    const inputCurrencyValue = document.querySelector(".main-input").value // caixa para digitar o valor a ser convertido //

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // caixa com opçoes de moedas //

    const currencyValueConverted = document.querySelector(".currency-value") // valor da moeda já convertida //

    console.log(currencySelect.value)

    //valor das moedas do dia//
    const dolarToday = 5.8
    const euroToday = 6.1
    const libraToday = 7.4
    const bitcoinToday = 85.8

    // if DAS MOEDAS //

        // dolar //
    if (currencySelect.value == "dolar") { 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

        //Euro//
    if (currencySelect.value == "euro") { 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

        //Libra///
    if (currencySelect.value == "libra") { 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "LBR"
        }).format(inputCurrencyValue / libraToday)
    }    

        //Bitcoin//
    if (currencySelect.value == "bitcoin") { 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }       
        
        // real brasileiro //
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        console.log(convertValues)
    
        /*ouvinte de eventos quando o botão for clicado*/
        convertButton.addEventListener("click", convertValues)
}

        // função da mudança de nome e imagem das moedas do select//

        function changeCurrency() {
            const currencyName = document.getElementById("currency-name")
            const currencyImage = document.querySelector(".img-outras-moedas")

            if (currencySelect.value == "dolar") {
                currencyName.innerHTML = "Dólar americano"
                currencyImage.src = "./assets/EUA 2.svg"
            }

            if (currencySelect.value == "euro") {
                currencyName.innerHTML = "Euro"
                currencyImage.src = "./assets/euro.svg"
            }

            if (currencySelect.value == "libra") {
                currencyName.innerHTML = "Libra"
                currencyImage.src = "./assets/libra 1.svg"
            }

            if(currencySelect.value == "bitcoin"){
                currencyName.innerHTML = "Bitcoin"
                currencyImage.src = "./assets/bitcoin 1.svg"
            }
            convertValues()
        }
        currencySelect.addEventListener("change", changeCurrency)