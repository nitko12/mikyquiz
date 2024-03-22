const texts = 
    ["Ako smatrate da je barem 9 od 10 ljudi gluplje od vas, vjerojatno su djeca",
    "Ako uzmemo sve crvene aute na svijetu, i od njih oduzmemo aute koji nemaju osiguranje. zakljucak, trebamo zabraniti crvene aute",
    "Kada vas ljudi pitaju imate li tog psa u sebi, recite im istinu i ubijte se",
    "Postoje dva nacina kako prevariti semafor na vukovarskoj",
    "Ako se osjecate kao da ste u zatvoru, vjerojatno ste u zatvoru",
    "Jedini nacin sprjecavanja dominacije umjetne inteligencije nad ljudima je glasno prdenje u javnom prijevozu i u blizini uprave fakulteta",
    "Smatrate li da je zivot prekratak za sve sto zelite postici, vjerojatno ste debeli",
    "9 0d 10 zubara preporucuje ovu pastu za zube",
    "Ponekad se osjecam kao da sam u zatvoru, ali onda se sjetim da sam u zatvoru",
    "Mjere opreza su uvijek dobrodosle, osim ako se radi o vasem zivotu",
    "Nekad nije potrebno preci cestu, ali kad je kasandra u pitanju, uvijek je potrebno preci cestu",
    "Cesta je opasna, ali ne toliko opasna koliko je opasno biti na cesti",
    "Baziran bit, ali ne toliko bit koliko je biti baziran",
    "Za obavijesti o indikacijama, mjerama opreza i nuspojavama upitajte svog lijecnika ili ljekarnika.",
    "Majmunima je potrebno 20 minuta da se nasmiju, a ljudima 20 godina da shvate da su majmuni",
    "Bolje ispasti glup nego iz vlaka",
    "Bolje zivjeti 100 godina kao milijunas, nego 7 dana u bijedi",
    "Tko spava nije budan",
    "Ne vjeruj zeni koja laze",
    "Tko izgubi dobitak dobije gubitak!"
];

window.onload = function() {
    let random = Math.floor(Math.random() * texts.length);
    let text = texts[random];
    this.document.getElementById("changableText").innerHTML = text;
}
