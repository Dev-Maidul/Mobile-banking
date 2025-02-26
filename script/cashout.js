
document.getElementById('cashout-btn').addEventListener('click',function(event){
    event.preventDefault();
    const accountNumber=document.getElementById('cashout-accountNumber').value;
    const amount=getInputValueById('cash-amount');
    const pin=getInputValueById('cashout-pin');
    const mainBalance=getInnerTextById('main-balance');
    if(amount>mainBalance)
        {
            alert("Invalid Amount");
            return;
        }
    if(accountNumber.length===11)
    {
        if(pin===1234)
        {
            const sum=mainBalance-amount;
            setInnerTextByIdandValue("main-balance",sum);

            const container = document.getElementById("transaction-container");
            const div=document.createElement('div');
            div.classList.add("bg-gray-200");
            
            div.innerHTML=`
               
                <h1>Cashout from ${amount}</h1> 
                <p>Account Num: ${accountNumber}</p>
            `
    
            container.appendChild(div);


        }else{
            alert("Incorrect PIN Number");
        }
    }else{
        alert("Account Number is invalid");
    }
})


// document.getElementById('cashout-btn').addEventListener('click',function(event){
//     event.preventDefault();
//     const pin=document.getElementById('cashout-pin').value;
//     const convertedPin=parseInt(pin);
//     const amount=document.getElementById('cash-amount').value;
//     const convertedCashoutAmount= parseFloat(amount);
//     const mainBalance=document.getElementById('main-balance').innerText;
//     const convertedMainBalance=parseFloat(mainBalance);
//     if(convertedPin===1234)
//     {
//         const sum=convertedMainBalance-convertedCashoutAmount;
//         document.getElementById('main-balance').innerText=sum;
//     }
//     else{
//         alert("Enter valid pin");
//     }

// })