/*Al cargar la pagina*/
$(document).ready(function(){

    $("h1").fadeIn(1500);
  
    $(".not").mouseenter(function(){
        $("img", this).fadeTo(0.5,0.2);
        $(".desc", this).fadeIn(200);
    });

    $(".not").mouseleave(function(){
        $("img", this).fadeTo(0.5,1);
        $(".desc", this).fadeOut(200)
    });

    //BOTON DE CARGAR NOTICIAS
    $("#btnLoad").click(function() {
        cargarNoticias();
    });
});


function cargarNoticias(){
    alert("CARGADAS");
}