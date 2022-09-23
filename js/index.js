document.addEventListener('DOMContentLoaded', () => {
const rToken = document.querySelector('.redtoken');
const bToken = document.querySelector('.bluetoken');
const goBackOne = document.querySelector('#gobacktothestart1');
const playerDisplay = document.querySelector('.display-player');
const allTiles = document.querySelectorAll('.tile');
const gameBoard = document.querySelector('.board');
const announcer = document.querySelector('.announcer');
const restartBtn = document.querySelector('#restart');

// Make the tokens clickable
allTiles.forEach((tile) => {
    tile.addEventListener('click')
})

// rToken.addEventListener('click', getToken )




});

 //  Create a random Number from 1-6
 const randomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
 }
 const randomValue = () => {
    document.getElementById('input').value = randomNumber();
 }





















