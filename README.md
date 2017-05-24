# WebNoticias

Andreu Juan Ferrá
DAM1

VISUALIZACIÓ DESDE RAWGIT
==========================

https://rawgit.com/SOSandreu1095/WebNoticias/master/index.html


OBJETIU FINAL
--------------
Realitzar una aplicació web de notícies que, en fer scroll fins abaix, recarregui més notícies amb html, jQuery i Bootstrap.


STORYBOARD A PAPER
------------------
És una simple idea de lo que és la aplicación en si, solo una base que me servió de idea



Especificacions del client:
-------------------------

* La maquetació (layer design) ha de deixar 300 px d'espai a la dreta de la pantalla per publicitat si la pantalla és suficientment ample. Tot altre diseny és lliure. **REALITZAT**
* Per dispositius mòbils, la publicitat anirá fixada a la part inferior o bé només es mostrará a la part superior (i desapareixerà en fer scroll) amb un alt de 90px. Pots triar l'opció. Tot altre diseny és lliure. **REALITZAT**
* Les dades són: títol (entorn a 8 paraules), imgbig (url al json, imatge a la carpeta), imgmid (url al json, imatge a la carpeta), descripció (mínim de 300 caràcters), data i hora (datetime). **REALITZAT**
* Totes les notícies han de tenir el mateix format i mostrar les dades especificades de forma elegant a tot dispositiu. **REALITZAT**



TASQUES
-------

* MOFIFICAT: Presenta news.html amb 3 notícies (ja escrites al html, no carregar amb js) i emmagatzema 6 noticies més en dos fitxers, data/1.json data/2.json per ser carregades amb js.

  * _Hi ha 3 fitxers JSON i les noticies es carregen de 2 en 2 per facilitar la visualització a la página web_
  * _Per defecte hi ha 4 noticies percarregades_

* MODIFICAT: Codifica news.js en jQuery per fer: "botó carregar més notícies" i "scroll bottom" que, en ser activat qualsevol d'ells, faci una càrrega i presentació de més dades (fins a dues vegades 1.json, 2.json)
   * _Hi ha 3 fitxers JSON i les noticies es carregen de 2 en 2 per facilitar la visualització a la página web_

* REALITZAT: Inclou rss.xml (especificat al tema 6)

* REALITZAT: Codifica news1.html i news2.html, pàgines que corresponen a les dues primeres noticies (darreres publicades). Quan feim clic a la notícia 1 de news.html ens va a news1.html, quan feim clic a la notícia 2 de news.html ens va a news2.html (seguir no té sentit, aquesta tasca s'automatitza amb codi de servidor).

* REALITZAT: La plantilla o pàgina de veure una sola notícia news1.html (news2.html és idèntica) ha de contenir una imatge i un vídeo de youtube responsive.

* REALITZAT: Cada pàgina ha de contenir les etiquetes meta (amb open graph) per compartir títol, descripció, imatge (gran), nom de l'aplicació i url de la pàgina.

MODIFICACIONS
-------------
