'use strict';

(function () {

$('#orderButton').click(function(){
    let about = $('#inputAbout');
    let name = $('#inputName');
    let phone = $('#inputPhone');
    let valid = true;
    about.css('border-color','#71081e');
    name.css('border-color','#71081e');
    phone.css('border-color','#71081e');
    about.next().hide();
    name.next().hide();
    phone.next().hide();

    if (!about.val()){
        about.next().show();
        about.css('border-color','red');
        valid = false;
    } 
    if (!name.val()){
        name.next().show();
        name.css('border-color','red');
        valid = false;

    }
    if (!phone.val()){
        phone.next().show();
        phone.css('border-color','red');
        valid = false;

    }

    if (valid){
        let url = 'https://testologia.site/checkout?';
        $.ajax({
            method: "POST",
            url: url,
            data: { 
                product: about.val(),
                name: name.val(), 
                phone: phone.val() }
          })
            .done(function( msg ) {
                if (msg && msg.hasOwnProperty('success') && msg.success===1)
                {
                    $('.order__about, .order__description').css('display','none');
                    $('.order__form').append('<p style="text-align:center; color:#821328" >Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!</p>');
                }
                else {
                    $('.order__about, .order__description').css('display','none');
                    $('.order__form').append('<p style="text-align:center; color:#821328" >Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ.</p>');
                }    
            });

    }

    
})

$('#inputPhone').keydown((e) => {
    if (e.keyCode == 46 || e.keyCode == 8 || e.ctrlKey && e.keyCode == 65 || e.ctrlKey && e.keyCode == 88) {
        return true;
    }
    if (isNaN(parseInt(e.key))){
        return false;
    } 
})

})()