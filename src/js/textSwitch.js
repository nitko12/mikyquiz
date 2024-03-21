const texts = 
    ["Bazant me je zakljucao u podrum aaaaaaaaaaaaaa",
    "Ako smatrate da je barem 9 od 10 ljudi gluplje od vas, vjerojatno su djeca",
    "Ako uzmemo sve crvene aute na svijetu, i od njih oduzmemo aute koji nemaju osiguranje. zakljucak, trebamo zabraniti crvene aute",
    "Traumaticno jucerasnje iskustvo u Paletovom sex dungeonu",
    "Kada vas ljudi pitaju imate li tog psa u sebi, recite im istinu i ubijte se",
    "Postoje dva nacina kako prevariti semafor na vukovarskoj",
    "Jedini nacin sprjecavanja dominacije umjetne inteligencije nad ljudima je glasno prdenje u javnom prijevozu i u blizini uprave fakulteta"];

window.onload = function() {
    let random = Math.floor(Math.random() * texts.length);
    let text = texts[random];
    this.document.getElementById("changableText").innerHTML = text;
}
