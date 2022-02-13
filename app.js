function updateCase(input, isAdd) {
    const caseNumber = document.getElementById(input);
    const totalTake = caseNumber.value;
    if (isAdd == true) {
        caseNumber.value = parseInt(totalTake) + 1;
    } else {
        if (totalTake > 0) {
            caseNumber.value = totalTake - 1;
        }
    }
}






document.getElementById('case-plus').addEventListener('click', function () {

    const totalTake = updateCase('case-number', true);

});

document.getElementById('case-mins').addEventListener('click', function () {

    const totalTake = updateCase('case-number');

})

