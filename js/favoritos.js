$(document).on("pagecreate","#favoritos", function(){
      //Muestra icono de carga
    var interval = setInterval(function(){
        $.mobile.loading('show');
        clearInterval(interval);
    },2);

    $.ajax({
            async:false,
            cache: false,
            url: 'http://127.0.0.1/degustappgenjson/json_degustapp/favoritos.php',
            type: "GET",
            encoding:"UTF-8",
            dataType: "JSON",
            success: function (data) {

     $("#favoritolistview").empty(); 

    for (var i=0; i<data.length; i++){

     $("#favoritolistview").append("<li data-icon=\"plus\"><a data-transition=\"slide\" data-details4'" + JSON.stringify(data[i]) + "' href='#paginafavoritoslistview'><img src=img/"+data[i].ruta_logo+" width=100 height=100/><h3>"+data[i].nom_empresa+"</h3><p>"+data[i].id_usuario+"</p></a></li>");
     };//Fin ciclo For
     $("#favoritolistview").listview("refresh");
     
      //OJO NO VOY A USAR DIV sino li CAMBIO on("click", "DIV a" por on("click", "li a"
      $("#favoritolistview").on("click", "li a", function(e){

        var obj = $(this).data("details4");

        $("#Favoritoslistview").empty();

        $("#Favoritoslistview").append("<img src=\"img/" + obj.ruta_logo +  "\">");

        $("#Favoritoslistview").append("<br /><H3>"+ obj.nom_empresa +"</H3>");

        $("#Favoritoslistview").append("<br /><p>"+ obj.id_usuario +"</p>");

        $("#Favoritoslistview").append("<H4>EVENTO: </H4><H4>"+ obj.favorito +"</H4>");

     });

      //Oculta icono de carga
      var interval = setInterval(function(){
        $.mobile.loading('hide');
        clearInterval(interval);
      },2);

   },//Fin success data

  });

});