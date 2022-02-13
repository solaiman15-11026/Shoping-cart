function updateCase(product, isAdd, price, Amont) {
    const caseNumber = document.getElementById(product);
    let totalTake = caseNumber.value;
    if (isAdd == true) {
        totalTake = parseInt(totalTake) + 1;
    } else {
        if (totalTake > 0) {
            totalTake = totalTake - 1;
        }
    }
    caseNumber.value = totalTake;
    //update case price------ 
    const caseAmont = document.getElementById(Amont);
    caseAmont.innerText = totalTake * price;
}

//phone total take and rpice-----------------
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCase('phone-number', true, 1219, 'phone-Amont');

});
document.getElementById('phone-mins').addEventListener('click', function () {
    updateCase('phone-number', false, 1219, 'phone-Amont');

});



// case total take ans price-------------
document.getElementById('case-plus').addEventListener('click', function () {

    updateCase('case-number', true, 59, 'case-Amont');

});

document.getElementById('case-mins').addEventListener('click', function () {

    updateCase('case-number', false, 59, 'case-Amont');

})


