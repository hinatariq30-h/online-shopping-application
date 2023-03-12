const nameOfGoods = document.getElementsByClassName('name');
const quantity = document.getElementsByClassName('number');
const unitPrice = document.getElementsByClassName('u_price');
const totalPrice = document.getElementsByClassName('t_price');

let totalPriceSolution, totalUP, totalQ = 0;
let totalPriceOfAllGoods = 0;
for (i = 0; i < unitPrice.length; i++) {
    unitPrice[i].addEventListener('keyup', function(e) {
        let unitVAl = this.value;

        let parentElement = this.parentElement;
        let previousSibling = parentElement.previousElementSibling;
        let quantityVal = previousSibling.firstElementChild.value;

        totalPriceSolution = quantityVal * unitVAl;
        let totalPriceElm = parentElement.nextElementSibling;
        totalPriceElm.firstElementChild.value = totalPriceSolution;

        let resultOfAllGoods = 0;
        for (i = 0; i < totalPrice.length; i++) {
            if (totalPrice[i].value !== "") {
                resultOfAllGoods += parseInt(totalPrice[i].value);
            }
        }
        let result = resultOfAllGoods;
        totalPriceOfAllGoods.innerHTML = result;
        document.getElementById('taprice').innerHTML = result;
    })
}


for (i = 0; i < quantity.length; i++) {
    quantity[i].addEventListener('keyup', function() {

        let quantityVal = this.value;

        let parentElement = this.parentElement;
        let nextSibling = parentElement.nextElementSibling;
        let unitVal = nextSibling.firstElementChild.value;

        totalPriceSolution = quantityVal * unitVal;
        let totalPriceElm = parentElement.nextElementSibling.nextElementSibling;
        totalPriceElm.firstElementChild.value = totalPriceSolution;

        let resultOfAllGoods = 0;
        for (i = 0; i < totalPrice.length; i++) {
            if (totalPrice[i].value !== "") {
                resultOfAllGoods += parseInt(totalPrice[i].value);
            }
        }
        let result = resultOfAllGoods;
        totalPriceOfAllGoods.innerHTML = result;
        document.getElementById('taprice').innerHTML = result;
    })
};

document.getElementById('submit').onclick = function mysubmit() {
    totalPriceOfAllGoods = 0;
    for (i = 0; i < totalPrice.length; i++) {
        totalPriceOfAllGoods += Number(totalPrice[i].value);
    }

    let result = totalPriceOfAllGoods;
    totalPriceOfAllGoods.innerHTML = result;
    document.getElementById('taprice').innerHTML = result;
}


document.getElementById('reset').onclick = function myreset() {

    for (i = 0; i < nameOfGoods.length; i++) {
        nameOfGoods[i].value = '';
    }
    for (i = 0; i < quantity.length; i++) {
        quantity[i].value = '';
    }
    for (i = 0; i < unitPrice.length; i++) {
        unitPrice[i].value = '';
    }
    for (i = 0; i < totalPrice.length; i++) {
        totalPrice[i].value = '';
    }
    document.getElementById('taprice').innerHTML = '';
}