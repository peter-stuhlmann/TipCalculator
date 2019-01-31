function tip_calculator() {

    let amount = parseInt(document.querySelector("#amount").value),
        satisfaction = parseInt(document.querySelector('input[name="satisfaction"]:checked').value),
        tip = (amount / 100 * satisfaction)

    tip.toFixed(2).replace('.', ',')

    document.querySelector("#tip-result").innerHTML = "The tip should be " + tip + " euros."

}

document.querySelector('#calculate').addEventListener('click', tip_calculator);
