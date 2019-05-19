$(document).on("pagecreate","#directoriolistview", function(){
      //Muestra icono de carga
    var interval = setInterval(function(){
        $.mobile.loading('show');
        clearInterval(interval);
    },2);

    $.ajax({
            cache: true,
            url: 'json/clientes.json',
            type: "GET",
            encoding:"UTF-8",
            dataType: "JSON",
            success: function (data) {

     $("#listalistview").empty(); 

    for (var i=0; i<data.length; i++){

     $("#listalistview").append("<li data-icon=\"plus\"><a data-transition=\"slide\" data-details5='" + JSON.stringify(data[i]) + "' href='#paginadetalles'><img src=\"img/"+data[i].RUTALOGO+"\"><h3>"+data[i].NOMBRE+"</h3><p>"+data[i].DESCRIPCION+"</p></a></li>");
     };//Fin ciclo For
     $("#listalistview").listview("refresh");
     
      //OJO NO VOY A USAR DIV sino li CAMBIO on("click", "DIV a" por on("click", "li a"
      $("#listalistview").on("click", "li a", function(e){

        var obj = $(this).data("details5");

        $("#Detalles").empty();

        $("#Detalles").append("<img src=\"img/" + obj.RUTALOGO +  "\">");

        $("#Detalles").append("<br /><strong>"+ obj.NOMCORTO +"</strong>");

        $("#Detalles").append("<div data-role=\"collapsible-set\"><div data-role=\"collapsible\"><h3>TIPO DE COMIDA</h3><p>" + obj.DESCCOMIDA + "</p></div><div data-role=\"collapsible\"><h3>DESCRIPCION</h3><p>" + obj.DESCRIPCION + "</p></div><div data-role=\"collapsible\"><h3>CONTACTO</h3><p>" + obj.TELEEFONO + " - " + obj.CELULAR1 +  " - " + obj.CELULAR2 +  "</p><br>" + obj.DIRECCION + "</div></div>");

        $("#Detalles").append("<div class=\"perfil\"><br>COORDENADAX: <b>" + obj.COORDENADAX + "</b><br>COORDENADAY:<b>" + obj.COORDENADAY +"</b><br>PUNTAJE:<b>" + obj.PUNTAJE +"</b><br>IDGRUPO:<b>" + obj.IDGRUPO +"</b></div>");

        $('#Detalles').trigger('create');

     });

      //Oculta icono de carga
      var interval = setInterval(function(){
        $.mobile.loading('hide');
        clearInterval(interval);
      },2);

   },//Fin success data

  });

});