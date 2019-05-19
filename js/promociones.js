$(document).on("pagecreate","#promociones", function(){
      //Muestra icono de carga
    var interval = setInterval(function(){
        $.mobile.loading('show');
        clearInterval(interval);
    },2);

    $.ajax({
            cache: false,
            url: 'http://127.0.0.1/degustappgenjson/json_degustapp/promociones.php',
            type: "GET",
            encoding:"UTF-8",
            dataType: "JSON",
            success: function (data) {

     $("#promocion").empty(); 

    for (var i=0; i<data.length; i++){

     $("#promocion").append("<a data-transition=\"slide\" data-details7='" + JSON.stringify(data[i]) + "' href='#detallespromo'><div class=\"nd2-card\"><div class=\"card-media\"><img src=\"img/"+data[i].RUTAFOTO+"\"><div class=\'card-media-overlay with-background\'><div class=\"card-title has-supporting-text\"><h3 class=\"card-primary-title\">"+data[i].EMPRESA+"</h3><h5 class=\"card-subtitle\">"+data[i].E_DESCRIPCION+"</h5></div><div class=\"card-action\"><div class=\"row between-xs\"><div class=\"col-xs-12\"><div class=\"box\"></div></div></div></div></div></div></div></a>");
     };//Fin ciclo For
     $("#promocion").listview("refresh");
     
      //OJO NO VOY A USAR li sino DIV CAMBIO on("click", "LI a" por on("click", "div a"
      $("#promocion").on("click", "li a", function(e){

        var obj = $(this).data("details7");

        $("#Promocion").empty();

        $("#Promocion").append("<img src=\"img/" + obj.RUTAFOTO + "\">");

        $("#Promocion").append("<br /><strong>TIPO DEL EVENTO: "+ obj.TIPO +"</strong> - <strong>GUSTA: "+ obj.GUSTA +"</strong>");

        $("#Promocion").append("<div data-role=\"collapsible-set\"><div data-role=\"collapsible\"><h3>FECHA DE INICIO</h3><p>" + obj.FECHAINI + "</p></div><div data-role=\"collapsible\"><h3>FECHA FINAL</h3><p>" + obj.FECHAFIN + "</p></div><div data-role=\"collapsible\"><h3>FECHAS</h3><p>" + obj.FECHAINI + " - " + obj.FECHAFIN +  " - " + obj.FECHATIPO + " - " + obj.FECHAGUSTA + "</p></div></div>");

        $("#Promocion").append("<div class=\"perfil\"><br>HORA DE INICIO: <b>" + obj.HORAINI + "</b><br>HORA FINAL:<b>" + obj.HORAFIN +"</b></div>");

        $('#Promocion').trigger('create');

     });

      //Oculta icono de carga
      var interval = setInterval(function(){
        $.mobile.loading('hide');
        clearInterval(interval);
      },2);

   },//Fin success data

  });

});