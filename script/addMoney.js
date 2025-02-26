document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputValueById("amount");
    const pin = getInputValueById("pin");
    const accountNumber = document.getElementById("accountNumber").value;
    const mainBalance = getInnerTextById("main-balance");
    const selectedBank=document.getElementById('selected-bank').value;
    
    if(amount<5)
    {
        alert("Amount Must shuld be greater than 5");
        return;
    }
    if (accountNumber.length === 11) {
      if (pin === 1234) {
        const sum = mainBalance + amount;
        setInnerTextByIdandValue("main-balance", sum);

        const container = document.getElementById("transaction-container");
        const div=document.createElement('div');
        div.classList.add("bg-gray-200");
        
        div.innerHTML=`
            <h2>Added Money from ${selectedBank}</h2>
            <h1>${amount}</h1> 
            <p>Account Num: ${accountNumber}</p>
        `

        container.appendChild(div);
      } else {
        alert("Pin number doesn't matched");
      }
    } else {
      alert("Account number is not Correct");
    }
  });
