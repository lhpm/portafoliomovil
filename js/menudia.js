$(document).on("pagecreate","#menu_dia", function(){
      //Muestra icono de carga
    var interval = setInterval(function(){
        $.mobile.loading('show');
        clearInterval(interval);
    },2);

    $.ajax({
            cache: false,
            url: 'http://127.0.0.1/degustappgenjson/json_degustapp/menudia.php',
            type: "GET",
            encoding:"UTF-8",
            dataType: "JSON",
            success: function (data) {

     $("#menudia").empty(); 

    for (var i=0; i<data.length; i++){

     $("#menudia").append("<a data-transition=\"slide\" data-details6='" + JSON.stringify(data[i]) + "' href='#detallesmenudia'><div class=\"nd2-card\"><div class=\"card-media\"><img src=\"img/"+data[i].logo+"\"><div class=\'card-media-overlay with-background\'><div class=\"card-title has-supporting-text\"><h3 class=\"card-primary-title\">"+data[i].menu+"</h3><h5 class=\"card-subtitle\">"+data[i].descripcion+"</h5></div><div class=\"card-action\"><div class=\"row between-xs\"><div class=\"col-xs-12\"><div class=\"box\"><a href=\"tel:"+data[i].telefono+"\" class=\"ui-btn ui-btn-inline\"><img src=\"css/images/icons-png/phone-white.png\"></a></div></div></div></div></div></div></div></a>");
     };//Fin ciclo For
     $("#menudia").listview("refresh");
     
      //OJO NO VOY A USAR li sino DIV CAMBIO on("click", "LI a" por on("click", "div a"
      $("#menudia").on("click", "li a", function(e){

        var obj = $(this).data("details6");

        $("#Menudia").empty();

        $("#Menudia").append("<img src=\"img/" + obj.RUTAFOTO + "\">");

        $("#Menudia").append("<br /><strong>TIPO DEL EVENTO: "+ obj.TIPO +"</strong> - <strong>GUSTA: "+ obj.GUSTA +"</strong>");

        $("#Menudia").append("<div data-role=\"collapsible-set\"><div data-role=\"collapsible\"><h3>FECHA DE INICIO</h3><p>" + obj.FECHAINI + "</p></div><div data-role=\"collapsible\"><h3>FECHA FINAL</h3><p>" + obj.FECHAFIN + "</p></div><div data-role=\"collapsible\"><h3>FECHAS</h3><p>" + obj.FECHAINI + " - " + obj.FECHAINI +  " - " + obj.FECHAINI +  "</p><br>" + obj.FECHAINI + "</div></div>");

        $("#Menudia").append("<div class=\"perfil\"><br>HORA DE INICIO: <b>" + obj.HORAINI + "</b><br>HORA FINAL:<b>" + obj.HORAFIN +"</b></div>");

        $('#Menudia').trigger('create');

     });

      //Oculta icono de carga
      var interval = setInterval(function(){
        $.mobile.loading('hide');
        clearInterval(interval);
      },2);

   },//Fin success data

  });

});