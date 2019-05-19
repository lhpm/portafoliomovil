$(document).on("pagecreate","#ranking", function(){
      //Muestra icono de carga
    var interval = setInterval(function(){
        $.mobile.loading('show');
        clearInterval(interval);
    },2);

    $.ajax({
            async:false,
            cache: false,
            url: 'http://127.0.0.1/degustappgenjson/json_degustapp/ranking.php',
            type: "GET",
            encoding:"UTF-8",
            dataType: "JSON",
            success: function (data) {

     $("#rankinglistview").empty(); 

    for (var i=0; i<data.length; i++){

     $("#rankinglistview").append("<li data-icon=\"plus\"><a data-transition=\"slide\" data-details5'" + JSON.stringify(data[i]) + "' href='#detallesranking'><img src=img/"+data[i].RUTALOGO+" width=100 height=100/><h3>"+data[i].NOMBRE + " <i>- Puntaje: "+ data[i].PUNTAJE+"</i></h3><h6>"+data[i].DESCRIPCION+"</h6></a></li>");
     };//Fin ciclo For
     $("#rankinglistview").listview("refresh");
     
      //OJO NO VOY A USAR DIV sino li CAMBIO on("click", "DIV a" por on("click", "li a"
      $("#rankinglistview").on("click", "div a", function(e){

        var obj = $(this).data("details5");

        $("#Rankinglistview").empty();

        $("#Rankinglistview").append("<img src=\"img/" + obj.ruta_logo +  "\">");

        $("#Rankinglistview").append("<br /><H3>"+ obj.nom_empresa +"</H3>");

        $("#Rankinglistview").append("<br /><p>"+ obj.id_usuario +"</p>");

        $("#Rankinglistview").append("<H4>EVENTO: </H4><H4>"+ obj.favorito +"</H4>");

     });

      //Oculta icono de carga
      var interval = setInterval(function(){
        $.mobile.loading('hide');
        clearInterval(interval);
      },2);

   },//Fin success data

  });

});