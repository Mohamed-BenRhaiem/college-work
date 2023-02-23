ch = prompt("donner une chaine de caractére ")

const ReverseString = ch => [...ch].reverse().join('');

ReverseString(ch) == ch? document.getElementById('result').textContent = "c'est une chaine palindrome. "  : document.getElementById('result').textContent = "c'est une pas une chaine palindrome." 