$(document).on("pagecreate","#favoritos", function(){
      //Muestra icono de carga
    var interval = setInterval(function(){
        $.mobile.loading('show');
        clearInterval(interval);
    },2);

    $.ajax({
            cache: true,
            url: 'json/favoritos2.json',
            type: "GET",
            encoding:"UTF-8",
            dataType: "JSON",
            success: function (data) {

     $("#favoritolistview").empty(); 

    for (var i=0; i<data.length; i++){

        /* Guardando los datos en el LocalStorage*/
  localStorage.setItem("favlocal", JSON.stringify(data[1]));
  /* FIN Guardando LocalStorage*/

     $("#favoritolistview").append("<li data-icon=\"plus\"><a data-transition=\"slide\" data-details4'" + JSON.stringify(data[i]) + "' href='#paginafavoritoslistview'><img src=img/"+data[i].RUTAFOTO+" width=100 height=100/><h3>"+data[i].NOMBRE+"</h3><p>"+data[i].E_DESCRIPCION+"</p></a></li>");
     };//Fin ciclo For
     $("#favoritolistview").listview("refresh");
     
      //OJO NO VOY A USAR DIV sino li CAMBIO on("click", "DIV a" por on("click", "li a"
      $("#favoritolistview").on("click", "li a", function(e){

        var obj = $(this).data("details4");

        $("#Favoritoslistview").empty();

        $("#Favoritoslistview").append("<img src=\"img/" + obj.RUTAFOTO +  "\">");

        $("#Favoritoslistview").append("<br /><H3>"+ obj.NOMBRE +"</H3>");

        $("#Favoritoslistview").append("<H4>EVENTO: </H4><H4>"+ obj.E_DESCRIPCION +"</H4>");

        $("#Favoritoslistview").append("<br /><strong>GUSTA: "+ obj.GUSTA +"</strong> - <strong>TIPO: "+ obj.TIPO +"</strong>");

        $("#Favoritoslistview").append("<br /><strong>HORA INICIO: "+ obj.HORAINI +"</strong><strong>HORA FIN: "+ obj.HORAFIN +"</strong>");

        $("#Favoritoslistview").append("<br /><strong>FECHA INICIO: "+ obj.FECHAINI +"</strong><strong>FECHA FIN: "+ obj.FECHAFIN +"</strong>");

     });

      // Mostrando los datos en Localstorage
// Imprimmo a través de la eqtiqueta label id=recordlocal
$(document).ready(function(){
  var favlocal = localStorage.getItem("favlocal");
    document.getElementById("favlocal").innerHTML = favlocal;
});
// FIN Mostrando Localstorage

$('#Favoritoslistview').trigger('create');


      //Oculta icono de carga
      var interval = setInterval(function(){
        $.mobile.loading('hide');
        clearInterval(interval);
      },2);

   },//Fin success data

  });

});