const birthDate = parseInt(prompt('donner votre date de naissance'));

const MonthBirth = parseInt(prompt('donner votre mois de naissance'));

let monthAge = 0;

const date = new Date();

const year = date.getFullYear();

const month = date.getMonth()+1;
if (MonthBirth<month) {
     monthAge = month - MonthBirth;
     document.write(monthAge);
}
// document.write(year - birthDate -1 +" et " + month + " mois ");