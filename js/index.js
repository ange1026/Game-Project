const allTiles = document.querySelectorAll('.tile');
const start = document.getElementById('start');
const players = document.querySelectorAll('.player');
const restartBtn = document.querySelector('#restart');
const generate = document.querySelector('#generate');

// Make the tiles clickable
allTiles.forEach(tile => {
    tile.addEventListener('click', play);
})

let currentToken =  null;

function play(e) {
    const clickedTile = e.target;
    console.log('The tile has been clicked!! ', clickedTile);
    console.log('You should move ', 
        currentToken && currentToken.className, 
        ' to this current tile which is ', clickedTile.textContent)
    //   Check if the tile clicked is a color token
        const isToken = ['redtoken', 'bluetoken'].includes(clickedTile.className);
        if (isToken) {
            currentToken = clickedTile;
            // Change current player
            const color = currentToken.getAttribute('data-color');
            players.forEach(player => {
                // remove the class playing from all players
                player.classList.remove('playing');
                // Check if the current token color corresponds to the player, if it is add back the playing class.
                if (player.classList.contains(color)) {
                    player.classList.add('playing');
                }
            });

            return;
        }
        
        // Check if a color token has been clicked before, otherwise exits
        if (!currentToken) return;

        // Check if the tile clicked has an action.
        const hasToJump = clickedTile.hasAttribute('data-target');
        if (hasToJump) {
            const whereToJump = clickedTile.getAttribute('data-target');
            console.log(whereToJump);
            document.getElementById(`tile${whereToJump}`).appendChild(currentToken);
            return;
        }

        // Go back to the start tile.
     const isGoBacktoStart = clickedTile.classList.contains("backtothestart");
      if (isGoBacktoStart) {
        start.appendChild(currentToken);
        return;
      }
      
        // It's a number tile.
      clickedTile.appendChild(currentToken)
}

   restartBtn.addEventListener('click', () => {
    document.getElementById('input').value = '';
    start.appendChild(document.querySelector('.redtoken'));
    start.appendChild(document.querySelector('.bluetoken'));
    players.forEach(player => {
        player.classList.remove('playing')
    })
   currentToken = null;
   })
   

 //  Create a random Number from 1-6
 const randomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
 }
 const randomValue = () => {
    document.getElementById('input').value = randomNumber();
 }

 generate.addEventListener('click', randomValue);





















