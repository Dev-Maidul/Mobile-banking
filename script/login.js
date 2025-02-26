document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const accountNumber=document.getElementById('accountNumber').value;
    const pin=document.getElementById('pin').value;
    if(accountNumber.length===11)
    {
        if(pin==="1234")
        {
            window.location.href="./main.html";

        }
        alert("Pin does't match")
    }
    else {
        alert("Please Input your 11 digit number")
    }
})