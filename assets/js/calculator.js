function tip_calculator() {

    let amount = parseInt(document.querySelector("#amount").value),
        satisfaction = parseInt(document.querySelector('input[name="satisfaction"]:checked').value),
        persons = parseInt(document.querySelector("#persons").value),
        tipUnrounded = ((amount / 100 * satisfaction) - amount),
        tip = parseInt(tipUnrounded.toFixed(2).replace('.', ',')),
        totalUnrounded = (amount + tip),
        total = parseInt(totalUnrounded.toFixed(2).replace('.', ',')),
        eachPerson = total / persons

    if (persons > 1) {
        document.querySelector("#result-eachPerson").style.display = "block"
    }

    document.querySelector("#result-amount").innerHTML = "The amount is " + amount + " &euro;."
    document.querySelector("#result-tip").innerHTML = "The tip is " + tip + " &euro;."
    document.querySelector("#result-total").innerHTML = "The total is " + total + " &euro;."
    document.querySelector("#result-eachPerson").innerHTML = "Each person pays " + eachPerson + " &euro;."
}

function splitBill() {
    // Get the checkbox
    let checkBox = document.getElementById("split");
    // Get the output text
    let inputNumberOfPersons = document.getElementById("split-bill");

    // If the checkbox is checked, display the inputNumberOfPersons input field
    if (checkBox.checked == true) {
        inputNumberOfPersons.style.display = "block";
    } else {
        inputNumberOfPersons.style.display = "none";
    }
}

function tc_reset() {
    document.querySelector("#result-amount").innerHTML = "";
    document.querySelector("#result-tip").innerHTML = "";
    document.querySelector("#result-total").innerHTML = "";
    document.querySelector("#result-eachPerson").innerHTML = "";
    document.querySelector("#split-bill").style.display = "none";
}

document.querySelector('#calculate').addEventListener('click', tip_calculator);
document.querySelector('#reset').addEventListener('click', tc_reset);
