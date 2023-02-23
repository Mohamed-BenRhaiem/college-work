//declarer le tableau qui contient les jours de la semaine
const semaine = [ 'lun', 'mra', 'mer', 'jeu', 'ven', 'sam', 'ddi' ];

//superimer la derniére valeur du tableau
semaine.pop();

//ajouter la valeur <<dim>> a la fin du tableau
semaine.push('dim');

//remplacer mra par mar
semaine[1] = 'mar';

//montrer les jour du semaine a travers la methode map

const week = ()=>{

    return (semaine.map(jour=>{
        return `<th>${jour}</th>`;
    }));
}

document.getElementById('result').innerHTML = week();

//affichage des nombres des elements du tableau
document.write("<strong style='font-size:1.5rem;color:teal'>"+semaine.length+ '</strong> élements dans le tableau');  
//affichage la troisieme valeur du tableau
document.write('</br>');  
document.write("<strong style = 'font-size:1.5rem;color:red'>"+semaine[2]+ '</strong> est la troisieme valeur du tableau');  
