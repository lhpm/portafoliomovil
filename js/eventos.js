$(document).on("pagecreate","#eventos", function(){
      //Muestra icono de carga
    var interval = setInterval(function(){
        $.mobile.loading('show');
        clearInterval(interval);
    },2);

    $.ajax({
            cache: true,
            url: 'http://127.0.0.1/degustappgenjson/json_degustapp/eventos.php',
            type: "GET",
            encoding:"UTF-8",
            dataType: "JSON",
            success: function (data) {

     $("#evento").empty(); 

    for (var i=0; i<data.length; i++){

     $("#evento").append("<a data-transition=\"slide\" data-details2='" + JSON.stringify(data[i]) + "' href='#paginaeventos'><div class=\"nd2-card\"><div class=\"card-media\"><img src=\"img/"+data[i].logo+"\"><div class=\'card-media-overlay with-background\'><div class=\"card-title has-supporting-text\"><h3 class=\"card-primary-title\">"+data[i].evento+"</h3><h5 class=\"card-subtitle\">"+data[i].descripcion+"</h5></div><div class=\"card-action\"><div class=\"row between-xs\"><div class=\"col-xs-12\"><div class=\"box\"><a href=\"tel:"+data[i].contacto+"\" class=\"ui-btn ui-btn-inline\"><img src=\"css/images/icons-png/phone-white.png\"></a></div></div></div></div></div></div></div></a>");
     };//Fin ciclo For
     $("#evento").listview("refresh");
     
      //OJO NO VOY A USAR li sino DIV CAMBIO on("click", "LI a" por on("click", "div a"
      $("#evento").on("click", "div a", function(e){

        var obj = $(this).data("details2");

        $("#Eventos").empty();

        $("#Eventos").append("<img src=\"img/" + obj.logo + "\">");

        $("#Eventos").append("<p><br /><strong>NOMBRE DEL EVENTO: "+ obj.evento +"</strong></p>");

        $("#Eventos").append("<p><br /><strong>DESCRIPCION: "+ obj.descripcion +"</strong></p>");

        $("#Eventos").append("<div data-role=\"collapsible-set\"><div data-role=\"collapsible\"><h3>FECHA DE INICIO</h3><p>" + obj.fecha_inicio + "</p></div><div data-role=\"collapsible\"><h3>FECHA FINAL</h3><p>" + obj.fecha_final + "</p></div><div data-role=\"collapsible\"><h3>CONTACTO O CELULAR</h3><p>" + obj.contacto + "</div></div>");

        $('#Eventos').trigger('create');

     });

      //Oculta icono de carga
      var interval = setInterval(function(){
        $.mobile.loading('hide');
        clearInterval(interval);
      },2);

   },//Fin success data

  });

});