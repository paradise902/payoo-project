// console.log("Login script loaded");

document.getElementById("login-btn").addEventListener("click", function() {
    // console.log("Login button clicked");
    //get mobile number 
    const numberInput = document.getElementById("input-number")
    const contactNumber = numberInput.value;
    console.log("Contact number entered:", contactNumber);

    //get the pin number
    const pinInput = document.getElementById("input-pin");
    const pinNumber = pinInput.value;
    console.log("Pin number entered:", pinNumber);

    //match the pin number with the mobile number
    if (contactNumber === "01234567890" && pinNumber === "1234") {
    //3-1 true -> go to home page
    alert("Login successful! Redirecting to home page...");
    window.location.assign("/home.html");

    }
    // false -> show error message);
    else {
        alert("Invalid contact number or pin. Please try again.");
        return;
    }


    });  