function tip_calculator() {

    let amount = parseInt(document.querySelector("#amount").value),
        satisfaction = parseInt(document.querySelector('input[name="satisfaction"]:checked').value),
        tipUnrounded = (amount / 100 * satisfaction),
        tip =  parseInt(tipUnrounded.toFixed(2).replace('.', ',')),
        totalUnrounded = (amount + tip),
        total = totalUnrounded.toFixed(2).replace('.', ',');

    document.querySelector("#result-amount").innerHTML = "The amount is " + amount + " &euro;."
    document.querySelector("#result-tip").innerHTML = "The tip is " + tip + " &euro;."
    document.querySelector("#result-total").innerHTML = "The total is " + total + " &euro;."
}

document.querySelector('#calculate').addEventListener('click', tip_calculator);
