function tip_calculator() {

    let amount = parseInt(document.querySelector("#amount").value),
        satisfaction = parseInt(document.querySelector('input[name="satisfaction"]:checked').value),
        persons = parseInt(document.querySelector("#persons").value),
        tipUnrounded = (amount / 100 * satisfaction),
        tip = parseInt(tipUnrounded.toFixed(2).replace('.', ',')),
        totalUnrounded = (amount + tip),
        total = parseInt(totalUnrounded.toFixed(2).replace('.', ',')),
        eachPersonUnrounded = (total / persons),
        eachPerson = parseInt(eachPersonUnrounded.toFixed(2).replace('.', ','))

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
    var checkBox = document.getElementById("split");
    // Get the output text
    var text = document.getElementById("split-bill");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

document.querySelector('#calculate').addEventListener('click', tip_calculator);
