// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emette
// un messaggio in console con il numero della cella cliccata.

// prendere il btn play
const playButton = document.getElementById('play-btn');

// l'utente clicca sul btn play
playButton.addEventListener('click', function(){
    // si genera la griglia 10x10
    const myGrid = document.querySelector('#grid');
    for(let i = 1; i <= 100; i++){
        const numberSquare = document.createElement('div');
        numberSquare.classList.add('square');
        numberSquare.innerHTML = `<span>${i}</span>`;
        // mettere la cella in ascolto
        numberSquare.addEventListener('click', function() {
            // Cambia lo stile della cella cliccata
            this.classList.add('azure');
            // ottieni il numero della cella
            const cellNumber = i;
            // stampa il numero della cella nella console
            console.log('Numero della cella cliccata:', cellNumber);
        });
        myGrid.append(numberSquare);
    };


});




