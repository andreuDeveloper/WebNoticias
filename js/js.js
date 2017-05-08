var fichLoaded = 0;
var fichName = ["1.json", "2.json", "3.json"];

/*Al cargar la pagina*/
$(document).ready(function () {

    //Para evitar problemas con cargas automaticas del Json, al cargar la
    //web se hará un scroll hacia arriba directamente
    window.scrollTo(0, 0);

    $("h1").fadeIn(1500);

    $(".not").mouseenter(function () {
        $("img", this).fadeTo(0.5, 0.2);
        $(".desc", this).fadeIn(200);
    });

    $(".not").mouseleave(function () {
        $("img", this).fadeTo(0.5, 1);
        $(".desc", this).fadeOut(200)
    });

    //BOTON DE CARGAR NOTICIAS
    $("#btnLoad").click(function () {
        cargarNoticias();
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            cargarNoticias();
        }
    });

});



function cargarNoticias() {
    if ((fichLoaded < fichName.length) && (cargarFichero(fichName[fichLoaded]))) {
        fichLoaded++;
    } else {
        alert("No hay más noticias");
    }
}

function cargarFichero(nombreFichero) {
    alert(nombreFichero + " cargado");
    var path = "https://raw.githubusercontent.com/SOSandreu1095/WebNoticias/master/data/" + nombreFichero;

    //cargar Noticias
    $.getJSON(path, function (jsonObject) {
        crearNoticia(jsonObject, nombreFichero);
    });
    return true;
}

function crearNoticia(json, nombreFichero) {

    var idRow = "row" + nombreFichero;

    var row = $("<div></div>", { "id": idRow, "class": "row" });
    var col = $("<div></div>", { "id": "col" + nombreFichero, "class": "col col-sm-6" });
    var a = $("<a></a>", { "href": "#" });


    $(col).append(a);
    $(row).append(col);
    $('#row').append(row);
    /*
    //Como hay 2 noticias por fichero:
    for (i = 0; i < 1; i++) {

        //Creamos la fila y la columna
        var col = $("<div></div>", { "id": "col" + nombreFichero + i, "class": "col col-sm-6" });
        var a = $("<a></a>", { "href": "#" });
        var h3 = $("<h3></h3>", { "class": "notTitle", "text": "Titulo noticia" });
        var h5 = $("<h5></h5>", { "class": "date", "text": "12/12/12" });
        var n = $("<div></div>", { "class": "not img-rounded" });
        var img = $("<img>", { "src": "img/dropshot.jpg", "alt": "imageNew" });
        var p = $("<p></p>", { "class": "desc", "text": "AOFHEAKFHDKAFHJ HFAD FAJDHFKDF AGD AB " });

        //$("#notCargar").append(row).children().append(col).children().append(a).children().append(h3).append(h5).append(n);

        col.appendChild(a);
        row.appendChild(col);
        $('#row').append(row);
        //append(n).children().append(img).append(p);
    }

    /*
        <div class="row">
            <div class="col col-sm-6">
                <a href="news1.html">
                    <h3 id="t1" class="notTitle">NUEVO CAMPEONATO</h3>
                    <h5 class="date">30-07-2017</h5>
                    <div id="not2" class="not img-rounded">
                        <img src="img/dropshot.jpg" alt="dropshotIMG">
                        <p id="d1" class="desc">Apúntate al nuevo torneo antes de que se acaben las plazas, premios para los 5 primeros equipos</p>
                    </div>
                </a>
            </div>
            */
}