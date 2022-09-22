$(document).ready (function (){

    $("form").each(function () {
      $(this).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          email: {
            required: true,
            minlength: 13
          }
        },
        messages: {
          name: {
            required: "Вы не ввели Имя!",
            minlength: jQuery.validator.format("Введите больше {0} символов!")
          },
          phone: {
            required: "Вы не ввели номер телефона!",
            minlength: jQuery.validator.format("Не меньше {0} символов!")
          },
          email: {
            required: "Вы не ввели E-mail!",
            email: "Недопустимый E-mail",
            minlength: jQuery.validator.format("Не меньше {0} символов!")
          }
        },
        submitHandler: function (form) {
          $.ajax({
            type: "POST",
            url: $(form).attr('action'),
            data: $(form).serialize()
          }).done(function () {
            $(form).find("input").val("");
            $('#modal').fadeOut('slow');
            $('#thanks').fadeIn('slow');
            $('form').trigger('reset');
          });
          return false;
        }
      });
    });


	/* МАСКА ФОРМЫ */
    $("input[name=phone]").mask("+7 (999) 999-99-99",{autoclear: false});

    $('#callme, #callme2, .butn__delivery').on('click', function() {
      $('#modal').fadeIn('slow');
  });

  $('.modal-thanks__overlay').on('click', function() {
      $('.modal-thanks').fadeOut('slow');
  });

    /* Закрытие модального окна Thanks */

    $('.modal-thanks__close').on('click', function() {
        $('.modal-thanks').fadeOut('slow');
    });

    $('.modal-thanks__overlay').on('click', function() {
        $('.modal-thanks').fadeOut('slow');
    });

    $('.modal-o__close').on('click', function() {
      $('.modal-o').fadeOut('slow');
  });

  $('.modal-o__overlay').on('click', function() {
      $('.modal-o').fadeOut('slow');
  });

});


