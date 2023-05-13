function changeMode(){
    let mybody=document.body;
    mybody.classList.toggle('darkmode')
    if(mybody.classList.contains('darkmode')){
        document.getElementById("icon").src="moon.png";
    }
    else{
        document.getElementById("icon").src="sun.png";
    }
}

function loadCoupon(){
    document.getElementById('coupon').style.visibility='visible';
    document.getElementsByTagName('body').style.opacity='0.7'
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility='hidden';
    document.getElementsByTagName('body').style.opacity='1'
}

