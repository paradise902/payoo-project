// console.log("Cashout script loaded");
document.getElementById("cashout-btn").addEventListener("click", function() {
    //get the agent number and validate
    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    // console.log("Cashout number entered:", cashoutNumber);
    // Simple validation for agent number (assuming it should be 11 digits)
    if (cashoutNumber.length != 11) {
        alert("Please enter a valid 11-digit agent number.");
        return;
    }

    //get the amount, 
     const cashoutAmountInput = document.getElementById("cashout-amount");
     const cashoutAmount = cashoutAmountInput.value;
    //  console.log("Cashout amount entered:", cashoutAmount);

    //get the current balance 
    balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    

    //calculate the new balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    if (newBalance < 0) {
        alert("Insufficient balance for this cashout.");
        return;
    }
    
    
    //get the pin and verify 
        const cashoutPinInput = document.getElementById("cashout-pin");
        const pin = cashoutPinInput.value;
        if (pin !== "1234") {
            alert("Invalid PIN. Please try again.");
            return;
        }
       alert("Cashout successful! Your new balance is: " + newBalance);
    //    console.log("Cashout Successful. New balance:", newBalance);

    //update the balance on the page
        balanceElement.innerText = newBalance;
    
    
    
});
