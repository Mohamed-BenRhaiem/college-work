const word = document.querySelector('.wordInput')
const btn = document.querySelector('button')

let wordNumber = 0;

word.addEventListener('keydown',(eo) => {
    btn.classList.remove('clicked');
})

btn.addEventListener('click',(eo) => {
    const wordArray = word.value.split("");
    
    wordArray.forEach(currentItem => {
    if(currentItem!==" ") wordNumber++;
    document.getElementById('number').textContent = ` ${wordArray.join('')} a ${wordNumber} lettre`;
    eo.target.classList.add('clicked');
    word.value = '';
});
wordNumber = 0;
})

 


