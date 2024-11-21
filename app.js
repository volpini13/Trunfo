const cards = [
    {
        title: 'Venturi Fetish Grand Prix',
        image: 'img/Venturi.jpg',
        attributes: { Cilindradas: 2945, Potência: "310CV", Peso: "850KG" }
    },
    {
        title: 'Renault Fluence',
        image: 'img/renault.jpg',
        attributes: { Cilindradas: 3498, Potência: "280CV", Peso: "1380KG" }
    },
    {
        title: 'Toyota RSC',
        image: 'img/toyota.jpg',
        attributes: { Cilindradas: 4664, Potência: "238CV", Peso: "2360KG" }
    },
    {
        title: 'Mercedes F400 Carving',
        image: 'img/mercedes.jpg',
        attributes: { Cilindradas: 3199, Potência: "224CV", Peso: "1050KG" }
    },
    {
        title: 'Peugeot Hoggar',
        image: 'img/peugeot.jpg',
        attributes: { Cilindradas: 4336, Potência: "362CV", Peso: "1300KG" }
    },
    {
        title: 'BMW CS1',
        image: 'img/bmw.jpg',
        attributes: { Cilindradas: 1796, Potência: "115CV", Peso: "1280KG" }
    },
    {
        title: 'Ford Mustang',
        image: 'img/mustang.jpg',
        attributes: { Cilindradas: "4995", Potência: "440CV", Peso: "1480KG" }
    },
    {
        title: 'ItalDesign Alessandro Volta',
        image: 'img/volta.jpg',
        attributes: { Cilindradas: "3300", Potência: "408CV", Peso: "1250KG" }
    },
    {
        title: 'Rolls-Royce 100EX',
        image: 'img/royce.jpg',
        attributes: { Cilindradas: 9000, Potência: "650CV", Peso: "2380KG" }
    },
    {
        title: 'Fiat Uno  !!TRUNFO!!',
        image: 'img/uno.jpg',
        attributes: { Cilindradas: 9999, Potência: "9999CV", Peso: "9999KG" }
    },
    
    
];
 
const drawButton = document.getElementById('draw-button');
const cardTitle = document.getElementById('card-title');
const cardAttributes = document.getElementById('card-attributes');
const cardImage = document.getElementById('card-image');
const resultDiv = document.getElementById('result');
 
drawButton.addEventListener('click', () => {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    cardTitle.textContent = randomCard.title;
    cardImage.src = randomCard.image;
    cardAttributes.innerHTML = '';
    for (const [key, value] of Object.entries(randomCard.attributes)) {
        const li = document.createElement('li');
        li.textContent = `${key}: ${value}`;
        cardAttributes.appendChild(li);
    }
    resultDiv.textContent = ''; // Limpa resultado anterior
});
