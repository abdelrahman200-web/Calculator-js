function cal() {
    let number = document.getElementById('input').value;
    try {
        let result = eval(number);
        if (!isFinite(result)) throw new Error("Invalid Calculation");
        document.getElementById('input').value = result;
    } catch (error) {
        alert("Invalid input. Please enter a correct mathematical expression.");
    }
}