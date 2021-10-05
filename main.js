const restart = document.getElementById('restart');
const playerScore = document.getElementById('player');
const computerScore = document.getElementById('computer');
const items = document.querySelectorAll('.item');


let playerIntialScore = 0;
let computerIntialScore = 0;

function play(e){
    let playerChoose = e.target.id;
    let computerChoose = getComputerChoice();
    let chooseWinner = getWinner(playerChoose, computerChoose);
    let winner = showWinner(computerChoose, chooseWinner);
    
    
    console.log(playerChoose, computerChoose, chooseWinner)
}

function getComputerChoice(){
    let choice = Math.random();
    
    if(choice < 0.45){
        return 'paper'
    }else if(choice <= 0.65){
        return 'rock';
    }else{
        return 'scissors';
    }
}

function getWinner(player, computer){
    if(player === computer){
        return 'draw';
    }else{
        if(player=== 'rock'){
            if(computer === 'scissors'){
                return 'player';
            }else{
                return 'computer';
            }
        }else if(player === 'scissors'){
            if (computer === 'paper'){
                return 'player';
            }else{
                return 'computer';
            }
        }else{
            if(computer === 'rock'){
                return 'player';
            }else{
                return 'computer';
            }
        }
    }
}

function showWinner(c, w){
    const modal = document.querySelector('.modal');
    const img = document.querySelector('#modal-image');
    const txt = document.querySelector('#modal-text');
    const alm = document.querySelector('#alarm')
    
    if(w === 'draw'){
         modal.style.display = 'inline-block';
        img.src = `images/${c}.svg`;
        txt.innerHTML = `computer choose ${c}`;
        alm.innerHTML = w;
        alm.style.color = '#fff';
    }else if(w === 'player'){
        playerIntialScore +=1;
        playerScore.innerHTML = playerIntialScore;
        modal.style.display = 'inline-block';
        img.src = `images/${c}.svg`;
        txt.innerHTML = `computer choose ${c}`;
        alm.innerHTML = 'Win';
        alm.style.color = 'green';
    }else{
        computerIntialScore +=1;
        computerScore.innerHTML = computerIntialScore;
        modal.style.display = 'inline-block';
        img.src = `images/${c}.svg`;
        txt.innerHTML = `computer choose ${c}`;
        alm.innerHTML = 'Loose';
        alm.style.color = 'red';
        restart.style.display = "block";
    }
    
    setTimeout(() => modal.style.display = 'none', 2500);
}


items.forEach(item => {
    item.addEventListener('click', play)
})

restart.addEventListener('click', () => {
    playerIntialScore = 0;
    computerIntialScore = 0;
    playerScore.innerHTML = playerIntialScore;
    computerScore.innerHTML = computerIntialScore;
    
    setTimeout(() => restart.style.display = 'none', 3000);
})