var fichLoaded = 0;
var fichName = ["1.json", "2.json", "3.json"];

/*Al cargar la pagina*/
$(document).ready(function () {

    //Para evitar problemas con cargas automaticas del Json, al cargar la
    //web se hará un scroll hacia arriba directamente
    window.scrollTo(0, 0);

    $("h1").fadeIn(1500);

    cargarEfectos();


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


function cargarEfectos(){
    $(".not").mouseenter(function () {
        $("img", this).fadeTo(0.5, 0.2);
        $(".desc", this).fadeIn(200);
    });

    $(".not").mouseleave(function () {
        $("img", this).fadeTo(0.5, 1);
        $(".desc", this).fadeOut(200)
    });
}


function cargarNoticias() {
    if ((fichLoaded < fichName.length) && (cargarFichero(fichName[fichLoaded]))) {
        fichLoaded++;
    } else {
        alert("No hay más noticias");
    }
}

function cargarFichero(nombreFichero) {
    var path = "https://raw.githubusercontent.com/SOSandreu1095/WebNoticias/master/data/" + nombreFichero;

    //cargar Noticias
    $.getJSON(path, function (jsonObject) {
        crearNoticia(jsonObject, nombreFichero);
    });
    return true;
}

function crearNoticia(json, nombreFichero) {

    var m = document.getElementById("notCargar");

    var row = document.createElement("div");
    row.id = "row" + nombreFichero;
    row.className = "row";
    m.appendChild(row);

    for (i = 0; i < 2; i++) {
        var col = document.createElement("div");
        col.className = "col col-sm-6";
        var a = document.createElement("a");
        a.setAttribute('href', "#");
        var h3 = document.createElement("h3");
        h3.className = "notTitle";
        h3.textContent = "TITLE NEW HERE";
        var h5 = document.createElement("h5");
        h5.className = "date";
        h5.textContent = "12/12/12";
        var n = document.createElement("div");
        n.className = "not img-rounded";
        var img = document.createElement("img");
        img.src = "img/dropshot.jpg";
        img.alt = "image New";
        var des = document.createElement("p");
        des.className = "desc";
        des.textContent = "This is the fucking and awesome description of the fucking new :D";

        n.appendChild(img);
        n.appendChild(des);
        a.appendChild(h3);
        a.appendChild(h5);
        a.appendChild(n);
        col.appendChild(a);
        row.appendChild(col);

        cargarEfectos();
    }
}