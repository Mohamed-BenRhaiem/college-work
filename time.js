
setInterval(()=>{
    const now = new Date();
    let jour = now.getDate();
    let mois = now.getMonth() + 1;
    let annee = now.getFullYear();
    let heure = now.getHours();
    let minute = now.getMinutes();
    let seconde = now.getSeconds();
    
    if (jour < 10) { jour = "0" + jour; }
    if (mois < 10) { mois = "0" + mois; }
    if (heure < 10) { heure = "0" + heure; }
    if (minute < 10) { minute = "0" + minute; }
    if (seconde < 10) { seconde = "0" + seconde; }
    
   

    let date = jour + "/" + mois + "/" + annee;
    let heur = heure + ":" + minute + ":" + seconde;
    document.getElementById("date").innerHTML = date;
    document.getElementById("heure").innerHTML = heur;
    
},(1000))


// T1 = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"]
// T1 = ["Janvier","Fevriere","Mars","Avril","May","Juin","Juilier","Aout","September","Octobre","Novembre","Decembre"]
// jour = T1[annee]
// mois = T2[mois]
// document.write(jour + " "+mois+ " "+annee+"</br>")