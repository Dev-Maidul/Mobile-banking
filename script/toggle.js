document.getElementById('cashoutsection').style.display='none';
document.getElementById('transertion-history').style.display='none';

document.getElementById('add-money-box').addEventListener('click',function(){
    toggleControl("cashoutsection","none");
    toggleControl('transertion-history','none');
    toggleControl("addmoney","block");
})

document.getElementById('cash-out-box').addEventListener('click',function(){
    toggleControl("cashoutsection","block");
    toggleControl("addmoney","none");
    toggleControl('transertion-history','none');    

})


