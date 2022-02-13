// total order --------------------------

function updateNumber(product, isAdd, price, Amont) {
    const productNumber = document.getElementById(product);
    let totalTake = productNumber.value;
    if (isAdd == true) {
        totalTake = parseInt(totalTake) + 1;
    } else {
        if (totalTake > 0) {
            totalTake = totalTake - 1;
        }
    }
    productNumber.value = totalTake;
    //update case price------ 
    const productAmont = document.getElementById(Amont);
    productAmont.innerText = totalTake * price;

    //sub,tax er call
    calculateAmont()
}

//total amont -----------------------------
function totalProduct(product) {
    const input = document.getElementById(product);
    const totalProductWent = parseInt(input.value);
    return totalProductWent;
}

function calculateAmont() {
    const phoneTotal = totalProduct('phone-number') * 1219;
    const takeTotal = totalProduct('case-number') * 59
    const subTotal = phoneTotal + takeTotal;
    const tax = subTotal / 20;
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}










//phone total take and rpice-----------------
document.getElementById('phone-plus').addEventListener('click', function () {
    updateNumber('phone-number', true, 1219, 'phone-Amont');

});
document.getElementById('phone-mins').addEventListener('click', function () {
    updateNumber('phone-number', false, 1219, 'phone-Amont');

});

// case total take ans price-------------
document.getElementById('case-plus').addEventListener('click', function () {

    updateNumber('case-number', true, 59, 'case-Amont');

});

document.getElementById('case-mins').addEventListener('click', function () {

    updateNumber('case-number', false, 59, 'case-Amont');

})


