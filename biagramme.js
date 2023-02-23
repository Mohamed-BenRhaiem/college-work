const mot = prompt("donner un mot");

const map1 = new Map();

for (let i = 0; i < mot.length; i++) {
    map1.set(mot.slice(i,i+2), map1.get(mot.slice(i,i+2)) == undefined ? 1 : map1.get(mot.slice(i,i+2)) + 1);
  
}

for (const [key, value] of map1.entries(map1)) {
    document.getElementById('res').innerHTML += `${key} existe : ${value} fois </br> `;
  }