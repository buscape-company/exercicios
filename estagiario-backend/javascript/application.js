// required import class.js first

var armaP1;



/**
 * start the weapons
 * returns a function to get an weapons array
 */
var getWeapons = (function () {
    var rock = new Arma("images/rock.png");
    var paper = new Arma("images/paper.png");
    var scissors = new Arma("images/scissors.png");
    rock.winTo = scissors;
    paper.winTo = rock;
    scissors.winTo = paper;
    return function () {
        return [rock, paper, scissors];
    };
})();

/**
 * get or change the player turns
 */
var player1Turn = (function () {
    var p1 = true;
    return function (change) {
        if (change) {
            p1 = !p1;
        }
        return p1;
    };
})();

/**
 * Check who is the winner and return a string
 * @param {Arma} arma1 Player 1 weapon
 * @param {Arma} arma2 Player 2 weapon
 */
function checkWin(arma1, arma2) {
    if (arma1.img == arma2.img) {
        return "game is tied";
    } else if (arma1.winTo.img == arma2.img) {
        return "Player 1 won!";
    } else {
        return "Player 2 won!";
    }
}

/**
 * set the initials configurations
 */
function initConfigs() {
    loadImages();
    document.getElementById("btStart").addEventListener("click",start);
}

/**
 * load all images in its respectve img element
 */
function loadImages() {
    var armas = getWeapons();
    var imgs = document.getElementsByClassName("weapons");
    var imgSrc = "";
    for (i = 0; i < 3; i++) {
        imgSrc = armas[i].img;
        imgs[i].src = imgSrc;
        imgs[i].alt = /\w+\.\w{3}/.exec(imgSrc);
        imgs[i].addEventListener("click",function(){
            mark(this);
        });
    }
}

/**
 * set the color of the border acording with the player
 * finish the game in case player 2 make his move
 * @param {HTMLElement <img>} el the html element img
 */
function mark(el) {
    armas = getWeapons();
    btStart = document.getElementById("btStart");
    if(btStart.style.visibility == "hidden"){
        if (player1Turn()) {
            el.classList.remove("borderP2");
            el.classList.add("borderP1");
            armaP1 = armas[Number(el.name)];
            changeLabelPlayer(2);
        } else {
            if(armaP1==armas[Number(el.name)]){
                el.classList.remove("borderP1");
                el.classList.add("border-both");
            } else {
                el.classList.add("borderP2");
            }
            document.getElementById("winner").innerHTML = 
            checkWin(armaP1,armas[Number(el.name)]);
            end();
        }
        player1Turn(true);
    }    
}

/**
 * change the label that tell us wich player is about to make a move
 * @param {Integer} playerNumber player number (1 or 2)
 */
function changeLabelPlayer(playerNumber){
    labelPlayer = document.getElementById("lblPlayer");
    if (playerNumber==1){
        labelPlayer.classList.remove("player2");
        labelPlayer.classList.add("player1");
        labelPlayer.innerHTML = "Player 1: choose your weapon!";
    } else {
        labelPlayer.classList.remove("player1");
        labelPlayer.classList.add("player2");
        labelPlayer.innerHTML = "Player 2: choose your weapon!";
    }
}

/**
 * start the game
 */
function start() {
    var imgs = document.getElementsByClassName("weapons");
    for(var i = 0; i < imgs.length; i++){
        imgs[i].classList.remove("borderP1");
        imgs[i].classList.remove("borderP2");
        imgs[i].classList.remove("border-both");
    }
    document.getElementById("winner").style.visibility = "hidden";
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("btStart").style.visibility = "hidden";
    changeLabelPlayer(1);
}

/**
 * end the game
 */
function end(){
    var imgs = document.getElementsByClassName("weapons");
    for (var i=0; i<imgs.length; i++){
        imgs[i].removeEventListener("click",function(){
            mark(this);
        });
    }

    document.getElementById("winner").style.visibility = "visible";
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("btStart").style.visibility = "visible";
}


    