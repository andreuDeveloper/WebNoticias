# WebNoticias

* Andreu Juan Ferrá
* Lenguaje de Marcas HTML
* DAM1

VISUALITZACIÓ DESDE RAWGIT
==========================

https://rawgit.com/SOSandreu1095/WebNoticias/master/index.html


OBJECTIU FINAL
--------------
Realitzar una aplicació web de notícies que, en fer scroll fins abaix, recarregui més notícies amb html, jQuery i Bootstrap.


Especificacions del client:
-------------------------

* La maquetació (layer design) ha de deixar 300 px d'espai a la dreta de la pantalla per publicitat si la pantalla és suficientment ample. Tot altre diseny és lliure. **REALITZAT** 
* Per dispositius mòbils, la publicitat anirá fixada a la part inferior o bé només es mostrará a la part superior (i desapareixerà en fer scroll) amb un alt de 90px. Pots triar l'opció. Tot altre diseny és lliure. **REALITZAT** (En el meu cas la publicitat es trobará a la part superior per dispositius mòbils)
* Les dades són: títol (entorn a 8 paraules), imgbig (url al json, imatge a la carpeta), imgmid (url al json, imatge a la carpeta), descripció (mínim de 300 caràcters), data i hora (datetime). **REALITZAT**

** _Important ** Les imatges de les notícies no tenen distints tamanys, les he reduït molt i a més a més estan optimitzats per tinypng. Les resolució són de 720 i no superán dit tamany evitant que es pixeli _
* Totes les notícies han de tenir el mateix format i mostrar les dades especificades de forma elegant a tot dispositiu. **REALITZAT**



TASQUES
-------

* **MOFIFICAT**: Presenta news.html amb 3 notícies (ja escrites al html, no carregar amb js) i emmagatzema 6 noticies més en dos fitxers, data/1.json data/2.json per ser carregades amb js.

  * _Hi ha 3 fitxers JSON i les noticies es carregen de 2 en 2 per facilitar la visualització a la página web_
  * _Per defecte hi ha 4 noticies percarregades_

* **MOFIFICAT**: Codifica news.js en jQuery per fer: "botó carregar més notícies" i "scroll bottom" que, en ser activat qualsevol d'ells, faci una càrrega i presentació de més dades (fins a dues vegades 1.json, 2.json)
   * _Hi ha 3 fitxers JSON i les noticies es carregen de 2 en 2 per facilitar la visualització a la página web_

* **REALITZAT**: Inclou rss.xml (especificat al tema 6)

* **REALITZAT**: Codifica news1.html i news2.html, pàgines que corresponen a les dues primeres noticies (darreres publicades). Quan feim clic a la notícia 1 de news.html ens va a news1.html, quan feim clic a la notícia 2 de news.html ens va a news2.html (seguir no té sentit, aquesta tasca s'automatitza amb codi de servidor).

* **REALITZAT**: La plantilla o pàgina de veure una sola notícia news1.html (news2.html és idèntica) ha de contenir una imatge i un vídeo de youtube responsive.

* **REALITZAT**: Cada pàgina ha de contenir les etiquetes meta (amb open graph) per compartir títol, descripció, imatge (gran), nom de l'aplicació i url de la pàgina.

MODIFICACIONS ADICIONALS
-------------------------
* Timelapse de facebook a la dreta de la web a la versió horitzontal.
* Footer abaix de la web
* Efectes de:
 * Hovers: Aparició de descripcions, borders, ampliacions, opacitats y més
 * Dinamisme: La part del menú es troba fixa damunt de la pantalla y torna al seu estat inicial depenguent de la posició del scroll
* La publicitat es va cambiant cada cert temps.
* Com no he realitzat la imgBig per carregar un o l'altre segons la amplada, la publicitat de la versió vertical va cambiant si no cap a l'amplada de la finestra, i així donc per aplicat aquell punt, lo que a un altre banda.
