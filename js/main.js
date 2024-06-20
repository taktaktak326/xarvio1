$(document).ready(function($) {
    $(".main--faq .list-faq .head--qContent").click(function(e) {
        $(this).toggleClass("toggle");
        $(this).parent().find(".main--aContent").stop().slideToggle();
    })
    $('.tab-link').click(function() {
        var tabID = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab-' + tabID).addClass('active').siblings().removeClass('active');
    });

    var url = window.location.href;
    var linkPara = url.split('#');
    if (linkPara.length > 1) {
        var getLink = linkPara[1].split('_')[1];
        if (getLink == 'tab1') {
            $("#dataTab1").trigger("click");
        } else if (getLink == 'tab2') {
            $("#dataTab2").trigger("click");
        } else if (getLink == 'tab3') {
            $("#dataTab3").trigger("click");
        } else {
            $("#dataTab4").trigger("click");
        }
        if (getLink == 'tab1' || getLink == 'tab2' || getLink == 'tab3' || getLink == 'tab4') {
            $('html, body').animate({
                scrollTop: $("#" + linkPara[1]).offset().top - 113
            });
        }
    }

    $(document).on('click', '.link-to-bottom', function(event) {
        event.preventDefault();
        let destination = $(this).data('destination');
        let marginTop = $(this).data('mt');
        $('html, body').animate({
            scrollTop: $('#' + destination).offset().top - marginTop
        }, 500);
    });

    $("div[data-includeHTML]").each(function() {
        $(this).load($(this).attr("data-includeHTML"));
    });

    let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    $.each(numbers , function (index, value){
        $('.modal-toggle-video'+ value).on('click', function(e) {
            e.preventDefault();
            $('.modal-popup'+ value).toggleClass('is-visible');
        });
        // ==
        $(document).on('click', '.modal-popup .modal-close,.modal-popup .modal-close--btn, .modal-overlay', function (e) {
            e.preventDefault();
            $('.iframe-videoM'+ value).each(function(index) {
                $(this).attr('src', $(this).attr('src'));
                return false;
            });
        })
    });

});
window.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.lazy')
    images.forEach(image => {
        new IntersectionObserver((entries, observe) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target
                    const dataSRC = img.getAttribute('data-load')
                    img.setAttribute('src', dataSRC)
                    img.removeAttribute('data-load')
                    observe.disconnect()
                }
            })
        }).observe(image)
    })
})


$(window).on('load', function() {
    //ハンバーガー
    $(function() {
        $('.burger-btn-wrap').click(function() {
            $('.burger-btn').toggleClass('close');
            $('.nav-wrapper').toggleClass('fade');
            $('body').toggleClass('noscroll');
        });
    });
    $(window).on("resize", function() {
        if ($("body").width() > 1000) {
            if ($('body').hasClass("noscroll")) {
                $('body').removeClass('noscroll');
            }
        } else {
            if ($(".nav-wrapper").hasClass("fade")) {
                $('body').addClass('noscroll');
            }
        }
    })

    $(".nav-list .nav-item a").on("click", function() {
        $('.nav-wrapper').removeClass("fade");
        $('.burger-btn').removeClass('close');
        $('body').removeClass('noscroll');
    })

    //モーダル
    $(function() {
        var open = $('.c-modal-open'),
            close = $('.c-modal-close'),
            container = $('.c-modal-container');
        open.on('click', function() {
            $(".c-modal-overlay").addClass('active');
            container.addClass('active');
            return false;
        });
        $(".c-modal-close,.c-modal-overlay").on("click", function() {
            $(".c-modal-overlay").removeClass('active');
            container.removeClass('active');
        })
    });


});

//commonインクルード
$(function() {
    $.ajaxSetup({ cache: false });
    $('body').prepend(
        '<!-- Google Tag Manager (noscript) --><!-- gtmのnoscriptはここに記載 --><!-- End Google Tag Manager (noscript) -->'
    );
    $('.modal').load('../modal.html');
});

//アコーディオン
$(function() {
    $('.J-accordion .J-accordion-box .J-accordion-head').click(function() {
        $(this).next('.J-accordion-inner').slideToggle();
        $(this).toggleClass('open');
    });
});

// ======== Price
$(document).ready(function($) {
    $(document).on('click','.list--filter-li li a',function(e){
        $(this).parent().toggleClass("active");
        if ($('.list--filter-li li').hasClass("active")) {
            $('.text--des-price,.text--note,.button--submit-price').css("display","block");

        }else{
            $('.total--price--item,.text--des-price,.text--bottom-description,.text--note,.button--submit-price').css("display","none");
        }
    });
    


    let values = [1,2,3,4,5,6,7,8,9,10];
    $.each(values , function (index, value){
        let numbers = index+1;
        $(document).on('click', '.price--item-'+ numbers, function(event) {
            event.preventDefault();
            $('.col--price-'+ numbers).addClass('col--active');
            if(!$('.price--item-1').parent().hasClass("active")){
                $('.col--price-1').removeClass('col--active');
            }

            if(!$('.price--item-2').parent().hasClass("active")){
                $('.col--price-2').removeClass('col--active');
            }

            if(!$('.price--item-3').parent().hasClass("active")){
                $('.col--price-3').removeClass('col--active');
            }

            let priceLeft1 = 0;
            priceLeft1 = $('.top--filter-head .active').length;
            let inputValue = $('#paddyRice1');
            if (inputValue.val() == '') {
                inputValue.val(priceLeft1);
            }else{
                inputValue.val('');
                inputValue.val(priceLeft1);
            }

            let priceRight1 = 0;
            priceRight1 = $('.top--filter-main .active').length;
            let inputValue2 = $('#priceRight1');
            if (inputValue2.val() == '') {
                inputValue2.val(priceRight1);
            }else{
                inputValue2.val('');
                inputValue2.val(priceRight1);
            }

            let pricePotatoes3 = 0;
            pricePotatoes3 = $('.top--filter-head2 .active').length;
            let inputValue3 = $('#potatoes1');
            if (inputValue3.val() == '') {
                inputValue3.val(pricePotatoes3);
            }else{
                inputValue3.val('');
                inputValue3.val(pricePotatoes3);
            }
        });
    });
    
    $(document).on('change keyup keydown', '.input--none-number', function(e) {
        if(!(/[0-9０-９]/g.test(this.value))){
            this.value = this.value.replace(/[^\d\.]/g,'')
        }
    });

    $(document).on('click', '.total--button', function(e) {
        let textSum = $('#price__number');
        
        let priceLeft2 = $('#paddyRice2').val();
        let priceLeft3 = $('#paddyRice3').val();
        let priceLeft4 = $('#paddyRice4').val();

        let potatoes2 = $('#potatoes2').val();
        let potatoes3 = $('#potatoes3').val();
        let potatoes4 = $('#potatoes4').val();

        let priceRight2 = $('#priceRight2').val();
        let priceRight3 = $('#priceRight3').val();
        

        if((/[０-９]/g.test(priceLeft2))){
            priceLeft2 = priceLeft2.replace(/[\uff01\uff03-\uff06\uff08-\uff3b\uff3d-\uff5d]/g, function(ch) {
                return String.fromCharCode(ch.charCodeAt(0) - 65248);
            });
        }
        if((/[０-９]/g.test(priceLeft3))){
            priceLeft3 = priceLeft3.replace(/[\uff01\uff03-\uff06\uff08-\uff3b\uff3d-\uff5d]/g, function(ch) {
                return String.fromCharCode(ch.charCodeAt(0) - 65248);
            });
        }
        if((/[０-９]/g.test(priceLeft4))){
            priceLeft4 = priceLeft4.replace(/[\uff01\uff03-\uff06\uff08-\uff3b\uff3d-\uff5d]/g, function(ch) {
                return String.fromCharCode(ch.charCodeAt(0) - 65248);
            });
        }
        if((/[０-９]/g.test(priceRight2))){
            priceRight2 = priceRight2.replace(/[\uff01\uff03-\uff06\uff08-\uff3b\uff3d-\uff5d]/g, function(ch) {
                return String.fromCharCode(ch.charCodeAt(0) - 65248);
            });
        }
        if((/[０-９]/g.test(priceRight3))){
            priceRight3 = priceRight3.replace(/[\uff01\uff03-\uff06\uff08-\uff3b\uff3d-\uff5d]/g, function(ch) {
                return String.fromCharCode(ch.charCodeAt(0) - 65248);
            });
        }

         // 
         if((/[０-９]/g.test(potatoes2))){
            potatoes2 = potatoes2.replace(/[\uff01\uff03-\uff06\uff08-\uff3b\uff3d-\uff5d]/g, function(ch) {
                return String.fromCharCode(ch.charCodeAt(0) - 65248);
            });
        }
        if((/[０-９]/g.test(potatoes3))){
            potatoes3 = potatoes3.replace(/[\uff01\uff03-\uff06\uff08-\uff3b\uff3d-\uff5d]/g, function(ch) {
                return String.fromCharCode(ch.charCodeAt(0) - 65248);
            });
        }
        if((/[０-９]/g.test(potatoes4))){
            potatoes4 = potatoes4.replace(/[\uff01\uff03-\uff06\uff08-\uff3b\uff3d-\uff5d]/g, function(ch) {
                return String.fromCharCode(ch.charCodeAt(0) - 65248);
            });
        }
        // 

        
        
        if ((($('#paddyRice2').val().length) > 0) && (($('#priceRight2').val().length) > 0)) {
            // ====
            // let sumTotal = 0;
            let sumTotalAll = 0;
            let d2 = parseInt($('.value--input2').val());
            let c2 = parseInt($('.value--input').val());
            let f2 = parseInt($('.value--input3').val());
            
            

            // =======
            if(f2<1){
                if(d2<1){
                    let sumTotal1 = 0;
                    if(parseFloat(priceLeft2) < 100){
                        if(parseFloat(priceLeft2) < 2*c2){
                            cabbageSum1 = 0;
                        }else{
                            cabbageSum1 = (Math.ceil(priceLeft2) - 2 * c2 ) * 500;
                        }
                    }else{
                        cabbageSum1 = (100-c2*2)*500;
                    }

                    if(parseFloat(priceLeft3) < 100){
                        if(parseFloat(priceLeft3) < 2*c2){
                            cabbageSum2 = 0;
                        }else{
                            cabbageSum2 = (Math.ceil(priceLeft3) - 2 * c2 ) * 500;
                        }
                    }else{
                        cabbageSum2 = (100-c2*2)*500;
                    }

                    if(parseFloat(priceLeft4) < 100){
                        cabbageSum3 = (Math.ceil(priceLeft4) * 1000);
                    }else{
                        cabbageSum3 = 100*1000;
                    }

                    sumTotal1 = (cabbageSum1 + cabbageSum2 + cabbageSum3 + (12000*c2)) * 1.1;
                    sumTotalAll = sumTotal1;
                }else{
                    let sumTotal2 = 0;
                    if ((parseFloat(priceLeft2) + parseFloat(priceRight2)) < 100){
                        if((parseFloat(priceLeft2) + parseFloat(priceRight2)) < 2 * (c2 + 1)){
                            Sum1 = 0;
                        }else{
                            let sumLeftRight1 = parseFloat(priceLeft2) + parseFloat(priceRight2);
                            Sum1 = (Math.ceil(sumLeftRight1) - 2 * (c2 + 1)) * 500;
                        }
                    }else{
                        Sum1 = (100 - (c2 + 1) * 2) * 500;
                    }

                    if (100 > priceLeft3){
                        if(priceLeft3 < (c2 * 2)){
                            Sum2 = 0;
                        }else{
                            Sum2 = (Math.ceil(priceLeft3) - 2 * c2) * 500
                        }
                    }else{
                        Sum2 = (100 - c2 * 2) * 500;
                    }

                    if ((parseFloat(priceLeft4) + parseFloat(priceRight3)) < 100){
                        let sumLeftRight3 = parseFloat(priceLeft4) + parseFloat(priceRight3);
                        Sum3 = Math.ceil(sumLeftRight3) * 1000;
                    }else{
                        Sum3 = 1000 * 100;
                    }

                    sumTotal2 = ( Sum1 + Sum2 + Sum3 + (12000*c2+6000*1)) * 1.1;
                    sumTotalAll = sumTotal2;
                }
            }else{
                if(d2<1){
                    if(parseFloat(priceLeft2) < 100){
                        if(parseFloat(priceLeft2) < 2*c2){
                            cabbageSum1 = 0;
                        }else{
                            cabbageSum1 = (Math.ceil(priceLeft2) - 2 * c2 ) * 500;
                        }
                    }else{
                        cabbageSum1 = (100-c2*2)*500;
                    }

                    if(parseFloat(priceLeft3) < 100){
                        if(parseFloat(priceLeft3) < 2*c2){
                            cabbageSum2 = 0;
                        }else{
                            cabbageSum2 = (Math.ceil(priceLeft3) - 2 * c2 ) * 500;
                        }
                    }else{
                        cabbageSum2 = (100-c2*2)*500;
                    }

                    if(parseFloat(priceLeft4) < 100){
                        cabbageSum3 = (Math.ceil(priceLeft4) * 1000);
                    }else{
                        cabbageSum3 = 100*1000;
                    }

                    sumTotalD1 = (cabbageSum1 + cabbageSum2 + cabbageSum3 + (12000*c2)) * 1.1;
                    // sumTotalAll = sumTotalD1;
                }else{
                    // let sumTotal2 = 0;
                    if ((parseFloat(priceLeft2) + parseFloat(priceRight2)) < 100){
                        if((parseFloat(priceLeft2) + parseFloat(priceRight2)) < 2 * (c2 + 1)){
                            Sum1 = 0;
                        }else{
                            let sumLeftRight1 = parseFloat(priceLeft2) + parseFloat(priceRight2);
                            Sum1 = (Math.ceil(sumLeftRight1) - 2 * (c2 + 1)) * 500;
                        }
                    }else{
                        Sum1 = (100 - (c2 + 1) * 2) * 500;
                    }

                    if (100 > priceLeft3){
                        if(priceLeft3 < (c2 * 2)){
                            Sum2 = 0;
                        }else{
                            Sum2 = (Math.ceil(priceLeft3) - 2 * c2) * 500
                        }
                    }else{
                        Sum2 = (100 - c2 * 2) * 500;
                    }

                    if ((parseFloat(priceLeft4) + parseFloat(priceRight3)) < 100){
                        let sumLeftRight3 = parseFloat(priceLeft4) + parseFloat(priceRight3);
                        Sum3 = Math.ceil(sumLeftRight3) * 1000;
                    }else{
                        Sum3 = 1000 * 100;
                    }

                    sumTotalD1 = ( Sum1 + Sum2 + Sum3 + (12000*c2+6000*1)) * 1.1;
                    // sumTotalAll = sumTotalD1;
                }


                let sumTotalS4 = 0;
                if(parseFloat(potatoes2) < 100){
                    if(parseFloat(potatoes2) < 2*f2){
                        PTSum1 = 0;
                    }else{
                        PTSum1 = (Math.ceil(potatoes2) - 2 * f2 ) * 500;
                    }
                }else{
                    PTSum1 = (100-f2*2)*500;
                }

                if(parseFloat(potatoes3) < 100){
                    if(parseFloat(potatoes3) < 2*f2){
                        PTSum2 = 0;
                    }else{
                        PTSum2 = (Math.ceil(potatoes3) - 2 * f2 ) * 500;
                    }
                }else{
                    PTSum2 = (100-f2*2)*500;
                }

                if(parseFloat(potatoes4) < 100){
                    PTSum3 = (Math.ceil(potatoes4) * 1000);
                }else{
                    PTSum3 = 100*1000;
                }

                sumTotalS4 = (PTSum1 + PTSum2 + PTSum3 + (6000*f2)) * 1.1;
                sumTotalAll = sumTotalS4 + sumTotalD1;

            }
            
            // ====
            let numberFormat = new Intl.NumberFormat('en-US');  
            sumTotalAll = numberFormat.format(sumTotalAll).toString();
            if((parseInt(priceLeft4) > parseInt(priceLeft2)) || (parseInt(priceRight3) > parseInt(priceRight2)) || (parseInt(potatoes3) > parseInt(potatoes2))){
            }else{
                if(($('.col--price-1').hasClass("col--active")) && (!$('.col--price-2').hasClass("col--active")) && ($('.col--price-3').hasClass("col--active")) || 
                    ($('.col--price-1').hasClass("col--active")) && ($('.col--price-2').hasClass("col--active")) && (!$('.col--price-3').hasClass("col--active")) ||
                    ($('.col--price-1').hasClass("col--active")) && (!$('.col--price-2').hasClass("col--active")) && (!$('.col--price-3').hasClass("col--active")) ||

                    ($('.col--price-1').hasClass("col--active")) && ($('.col--price-2').hasClass("col--active")) && (!$('.col--price-3').hasClass("col--active")) || 
                    (!$('.col--price-1').hasClass("col--active")) && ($('.col--price-2').hasClass("col--active")) && ($('.col--price-3').hasClass("col--active")) ||
                    (!$('.col--price-1').hasClass("col--active")) && ($('.col--price-2').hasClass("col--active")) && (!$('.col--price-3').hasClass("col--active")) ||

                    ($('.col--price-3').hasClass("col--active")) && ($('.col--price-2').hasClass("col--active")) && (!$('.col--price-1').hasClass("col--active")) ||
                    ($('.col--price-3').hasClass("col--active")) && (!$('.col--price-2').hasClass("col--active")) && ($('.col--price-1').hasClass("col--active")) ||
                    ($('.col--price-3').hasClass("col--active")) && (!$('.col--price-2').hasClass("col--active")) && (!$('.col--price-1').hasClass("col--active"))
                ){
                    if((($('#paddyRice3').val().length) && ($('#paddyRice4').val().length) || ($('#priceRight3').val().length))> 0){
                        $(this).parent().addClass("submit--active");
                        $('.input--none-number').prop('disabled', true);
                        $('.total--price--item,.text--bottom-description').css("display","block");
                        $(document).on('click','.btn--reset-total,.btn--reset-all',function(e){
                            $(this).parents('.button--submit-price').removeClass('submit--active');
                            $('.input--none-number').prop('disabled', false);
                            $('.total--price--item,.text--bottom-description').css("display","none");
                        });
                        $(document).on('click','.btn--reset-all',function(e){
                            priceLeft2 = +$('#paddyRice2').val(0);
                            priceLeft3 = +$('#paddyRice3').val(0);
                            priceLeft4 = +$('#paddyRice4').val(0);
                            
                            pricePotatoes2 = +$('#potatoes2').val(0);
                            pricePotatoes3 = +$('#potatoes3').val(0);
                            pricePotatoes4 = +$('#potatoes4').val(0);
            
                            priceRight2 = +$('#priceRight2').val(0);
                            priceRight3 = +$('#priceRight3').val(0);
                            if($('.form--block-price').hasClass("col--active")){
                                $('.form--block-price').removeClass('col--active');
                            }
                            if($('.list--filter-li li').hasClass("active")){
                                $('.list--filter-li li').removeClass('active');
                            }
                            if($('.item--pr').hasClass("error-msg")){
                                $('.item--pr').removeClass('error-msg');
                            }
                            $('.text--des-price,.text--note,.button--submit-price').css("display","none");
                        });
                        if (textSum.text() == '') {
                            textSum.append(sumTotalAll,'<span class="fonts-md-26 fonts-20">円</span>');
                        }else{
                            textSum.empty();
                            textSum.append(sumTotalAll,'<span class="fonts-md-26 fonts-20">円</span>');
                        }
                    }
                }else if(($('.col--price-1').hasClass("col--active")) && ($('.col--price-2').hasClass("col--active")) && ($('.col--price-3').hasClass("col--active"))){
                    if((($('#paddyRice3').val().length) && 
                        ($('#paddyRice4').val().length) && 
                        ($('#potatoes3').val().length) && 
                        ($('#potatoes4').val().length) && 
                        ($('#priceRight3').val().length))> 0
                        ){
                    
                        $(this).parent().addClass("submit--active");
                        $('.input--none-number').prop('disabled', true);
                        $('.total--price--item,.text--bottom-description').css("display","block");
                        $(document).on('click','.btn--reset-total,.btn--reset-all',function(e){
                            $(this).parents('.button--submit-price').removeClass('submit--active');
                            $('.input--none-number').prop('disabled', false);
                            $('.total--price--item,.text--bottom-description').css("display","none");
                        });
                        $(document).on('click','.btn--reset-all',function(e){
                            priceLeft2 = +$('#paddyRice2').val(0);
                            priceLeft3 = +$('#paddyRice3').val(0);
                            priceLeft4 = +$('#paddyRice4').val(0);
                            
                            pricePotatoes2 = +$('#potatoes2').val(0);
                            pricePotatoes3 = +$('#potatoes3').val(0);
                            pricePotatoes4 = +$('#potatoes4').val(0);

                            priceRight2 = +$('#priceRight2').val(0);
                            priceRight3 = +$('#priceRight3').val(0);
                            if($('.form--block-price').hasClass("col--active")){
                                $('.form--block-price').removeClass('col--active');
                            }
                            if($('.list--filter-li li').hasClass("active")){
                                $('.list--filter-li li').removeClass('active');
                            }
                            if($('.item--pr').hasClass("error-msg")){
                                $('.item--pr').removeClass('error-msg');
                            }
                            $('.text--des-price,.text--note,.button--submit-price').css("display","none");
                        });
                        if (textSum.text() == '') {
                            textSum.append(sumTotalAll,'<span class="fonts-md-26 fonts-20">円</span>');
                        }else{
                            textSum.empty();
                            textSum.append(sumTotalAll,'<span class="fonts-md-26 fonts-20">円</span>');
                        }
                    }
                }else{
                    console.log('None')
                }
            }
            
        }
        
        if(($('.form--block-price').hasClass("col--active")) && ($('.top--filter-head li').hasClass("active"))){
            if (!$('#paddyRice2').val()) {
                $("#paddyRice2").parents('.item--pr').addClass("error-msg");
            } else {
                $("#paddyRice2").parents('.item--pr').removeClass("error-msg");
            }
    
            if (!$('#paddyRice3').val()) {
                $("#paddyRice3").parents('.item--pr').addClass("error-msg");
            } else {
                $("#paddyRice3").parents('.item--pr').removeClass("error-msg");
            }
    
            if (!$('#paddyRice4').val()) {
                $("#paddyRice4").parents('.item--pr').addClass("error-msg");
            } else {
                $("#paddyRice4").parents('.item--pr').removeClass("error-msg");
            }

            if((($('#paddyRice3').val().length) || ($('#paddyRice4').val().length) )> 0){
                if($('#paddyRice3,#paddyRice4').hasClass("error-msg")){
                    $("#paddyRice3,#paddyRice4").parents('.item--pr').removeClass("error-msg");
                    
                }
            }
        }
        if(($('.form--block-price').hasClass("col--active")) && ($('.top--filter-head2 li').hasClass("active"))){
            if (!$('#potatoes2').val()) {
                $("#potatoes2").parents('.item--pr').addClass("error-msg");
            } else {
                $("#potatoes2").parents('.item--pr').removeClass("error-msg");
            }
    
            if (!$('#potatoes3').val()) {
                $("#potatoes3").parents('.item--pr').addClass("error-msg");
            } else {
                $("#potatoes3").parents('.item--pr').removeClass("error-msg");
            }
    
            if (!$('#potatoes4').val()) {
                $("#potatoes4").parents('.item--pr').addClass("error-msg");
            } else {
                $("#potatoes4").parents('.item--pr').removeClass("error-msg");
            }

            if((($('#potatoes3').val().length) || ($('#potatoes4').val().length)  )> 0){
                if($('#potatoes3,#potatoes4').hasClass("error-msg")){
                    $("#potatoes3,#potatoes4").parents('.item--pr').removeClass("error-msg");
                    
                }
            }
        }
        if(($('.form--block-price').hasClass("col--active")) && ($('.top--filter-main li').hasClass("active"))){
            if (!$('#priceRight2').val()) {
                $("#priceRight2").parents('.item--pr').addClass("error-msg");
            } else {
                $("#priceRight2").parents('.item--pr').removeClass("error-msg");
            }
    
            if (!$('#priceRight3').val()) {
                $("#priceRight3").parents('.item--pr').addClass("error-msg");
            } else {
                $("#priceRight3").parents('.item--pr').removeClass("error-msg");
            }
            if(($('#priceRight3').val().length) > 0){
                if($('#priceRight3').hasClass("error-msg")){
                    $("#priceRight3").parents('.item--pr').removeClass("error-msg");
                }
            }
        }

    });
    
    $(document).on('keyup', '.input--none-number', function(e) {
        let priceLeft2 = $('#paddyRice2').val();
        let priceLeft4 = $('#paddyRice4').val();

        let pricePotatoes2 = $('#potatoes2').val();
        let pricePotatoes4 = $('#potatoes4').val();

        let priceRight2 = $('#priceRight2').val();
        let priceRight3 = $('#priceRight3').val();

        if((/[０-９]/g.test(priceLeft2))){
            priceLeft2 = priceLeft2.replace(/[\uff01\uff03-\uff06\uff08-\uff3b\uff3d-\uff5d]/g, function(ch) {
                return String.fromCharCode(ch.charCodeAt(0) - 65248);
            });
        }
        if((/[０-９]/g.test(priceLeft4))){
            priceLeft4 = priceLeft4.replace(/[\uff01\uff03-\uff06\uff08-\uff3b\uff3d-\uff5d]/g, function(ch) {
                return String.fromCharCode(ch.charCodeAt(0) - 65248);
            });
        }
        if((/[０-９]/g.test(priceRight2))){
            priceRight2 = priceRight2.replace(/[\uff01\uff03-\uff06\uff08-\uff3b\uff3d-\uff5d]/g, function(ch) {
                return String.fromCharCode(ch.charCodeAt(0) - 65248);
            });
        }
        if((/[０-９]/g.test(priceRight3))){
            priceRight3 = priceRight3.replace(/[\uff01\uff03-\uff06\uff08-\uff3b\uff3d-\uff5d]/g, function(ch) {
                return String.fromCharCode(ch.charCodeAt(0) - 65248);
            });
        }

        if((/[０-９]/g.test(pricePotatoes2))){
            pricePotatoes2 = pricePotatoes2.replace(/[\uff01\uff03-\uff06\uff08-\uff3b\uff3d-\uff5d]/g, function(ch) {
                return String.fromCharCode(ch.charCodeAt(0) - 65248);
            });
        }
        if((/[０-９]/g.test(pricePotatoes4))){
            pricePotatoes4 = pricePotatoes4.replace(/[\uff01\uff03-\uff06\uff08-\uff3b\uff3d-\uff5d]/g, function(ch) {
                return String.fromCharCode(ch.charCodeAt(0) - 65248);
            });
        }

        let textError1 = $('.error1'); 
        let textError2 = $('.error2');
        let textError3 = $('.error3');

        if(parseInt(priceLeft4) > parseInt(priceLeft2)){
            textError1.css("display","block");
        }else{
            textError1.css("display","none");
        }

        if(parseInt(priceRight3) > parseInt(priceRight2)){
            textError2.css("display","block");
        }else{
            textError2.css("display","none");
        }

        if(parseInt(pricePotatoes4) > parseInt(pricePotatoes2)){
            textError3.css("display","block");
        }else{
            textError3.css("display","none");
        }
    });
        


    

    $('.input--none-number').each(function(){
        $(this).on('keyup',function(){
            if ($(this).val() > Number($(this).attr("max"))) {
                val=$(this).val().slice(0, $(this).attr("max").length);
                $(this).val(val);
            }
        });
    });
    
});
