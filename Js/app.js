$(document).ready(function () {
    $('#next').hide();
    $('#finish').hide();



    $('#volver').click(function (e) {
        e.preventDefault();
        $('#next').hide();
        $('.billing').addClass('animacion');
        $('.billing').show();
        $('#next').addClass('animacion')
        $('#2').removeClass('activo');
        var a = $('#1').addClass('activo');
        $('#alerta').hide('slow');

    });
    $('#final').click(function (e) {
        e.preventDefault();
        $('#next').hide();
        $('#finish').addClass('animacion');
        $('#finish').show();
        $('#next').addClass('animacion')
        $('#2').removeClass('activo');
        var a = $('#3').addClass('activo');

    });

    // botones
    var boton1 = $('#11');
    var boton2 = $('#22');
    var boton3 = $('#33');
    // tarjetas
    var tarj1 = $('#com1');
    var tarj2 = $('#com2');
    var tarj3 = $('#com3');

    tarj2.hide();
    tarj3.hide();

    boton2.click(function (e) {
        e.preventDefault();
        tarj1.hide('fast');
        tarj2.addClass('slide');
        tarj2.show();
        tarj3.hide();
        boton1.removeClass('reactive');
        boton2.addClass('reactive');
        boton3.removeClass('reactive');
    });
    boton1.click(function (e) {
        e.preventDefault();
        tarj2.hide('fast');
        tarj1.addClass('slide');
        tarj1.show();
        boton2.removeClass('reactive');
        boton1.addClass('reactive');
        tarj3.hide();
        boton3.removeClass('reactive');

    });

    boton3.click(function (e) {
        e.preventDefault();
        tarj2.hide('fast');
        tarj3.addClass('slide');
        tarj3.show();
        boton1.removeClass('reactive');
        boton2.removeClass('reactive');
        boton3.addClass('reactive');
        tarj1.hide();
    });

    var nombre = $('#nombre');
    var mail = $('#mail');
    $('#alerta').hide();
    $('#alerta2').hide();
    $('#alerta3').hide();
    $('#send').click(function (e) {
        e.preventDefault();
        if (nombre.val() == "") {
            $('#alerta').show('slow');
            $('#alerta').addClass('alerta');
        }else if (nombre.val().length <= 10) {
            $('#alerta2').show('slow');
            $('#alerta2').addClass('alerta');
        } else {
           
            $('#next').show();
            $('#next').addClass('animacion');
            $('.billing').hide();
            $('.billing').addClass('animacion')
            $('#1').removeClass('activo');
            var a = $('#2').addClass('activo');
        }

    });


});