

const fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi'];

document.getElementById("searchBtn").addEventListener('click',(eo) => {
    const choice = document.querySelector('.choiceInput').value;
    
    if(fruits.includes(choice)){
        const index = fruits.indexOf(choice);
        if (index !== -1) {
        fruits.splice(index, 1);
        alert(`vous avez ajouté ${choice} a votre panier`)
        }
        document.getElementById('result').innerHTML = fruitProducts();
    }
    else document.getElementById('result').innerHTML = "Ce produit est indisponible";

})




    

const fruitProductsFilter = (choice)=>{

    return (fruits.filter(fruit=>{
       return(fruit==choice)
    }));
}
const fruitProducts = ()=>{

    return (fruits.map(fruit=>{
        return `<div class='productCard'>${fruit}</div>`;
    }));
}

document.getElementById('result').innerHTML = fruitProducts();

