// Global variables
let turns = 1;
let dialogPos = 0;
let dialog;
let battleLog;
let startBtn = document.getElementById("startBtn");
let battlefield = [];
let enemyLineUp = [];
let playerName;
let playerStatus;
let enemyStatus;
let crewSupport = 0;

// Keywords
let enemyShips = "6 ENEMY SHIPS";

// Base class
class Baseship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    // status
    getStatus() {
        return "HP: " + this.hull + ", DMG: " + this.firepower + ", ACC: " + this.accuracy;
    }
    // getters
    getHull() {
        return this.hull;
    }
    getFirepower() {
        return this.firepower;
    }
    getAccuracy() {
        return this.accuracy;
    }

    // setters
    setHull(hull) {
        this.hull = hull;
    }

    // actions
    attack(ship) { // attack
        let damageAccuracy = [0.6, 0.7, 0.8, 0.9, 1.0];
        // values below accuracy are hit
        // values about accuracy are miss
        // lowest value is crit
        let randAccuracy = (damageAccuracy[(Math.floor(Math.random() * 5))]);
        if (randAccuracy == 0.6) {
            dialog += "CRITICAL HIT! ".fontcolor("#CC00FF") + this.firepower * 2 + " damage dealt!<br><br>";
            document.getElementById("textbox").innerHTML = dialog;
            let remainingHealth = ship.getHull() - this.firepower * 2;
            ship.setHull(remainingHealth);
        } else if (randAccuracy > 0.6 && randAccuracy <= this.accuracy) {
            dialog += "Hit! ".fontcolor("#66ff00") + this.firepower + " damage dealt!<br><br>";
            document.getElementById("textbox").innerHTML = dialog;
            let remainingHealth = ship.getHull() - this.firepower;
            ship.setHull(remainingHealth);
        } else {
            dialog += "Miss!<br><br>";
            document.getElementById("textbox").innerHTML = dialog;
        }
    }
}

// Player
const player = new Baseship(20, 5, .8);
battlefield.push(player);

// Enemy
const enemy1 = new Baseship(4, 2, .6) // Level 1
battlefield.push(enemy1);
const enemy2 = new Baseship(6, 2, .6) // Level 2
battlefield.push(enemy2);
const enemy3 = new Baseship(8, 2, .7) // Level 3
battlefield.push(enemy3);
const enemy4 = new Baseship(10, 3, .7) // Level 4
battlefield.push(enemy4);
const enemy5 = new Baseship(12, 3, .8) // Level 5
battlefield.push(enemy5);
const enemy6 = new Baseship(20, 4, .8) // Level 6
battlefield.push(enemy6);

// Backend
function removeRetreat() { // after choosing not to retreat
    document.getElementById("retreat").style.display = "none";
}

function attackFromHtml() {
    removeRetreat();
    dialog = "Turn: ".fontcolor("#ff6700") + turns + "<br>";
    if (turns >= 8) {
        if (crewSupport == 0) {
            dialog += "Your crew is working hard to support you! " + "+1 HP every round starting now!<br><br>".fontcolor("#66ff00");
            document.getElementById("textbox").innerHTML = dialog;
            crewSupport++;
        } else {
            dialog += "Your crew's got your back! " + "+1 HP<br><br>".fontcolor("#66ff00");
            document.getElementById("textbox").innerHTML = dialog;
            let remainingHealth = player.getHull() + 1;
            player.setHull(remainingHealth);
        }
    }
    turns++;
    dialog += "You attack the enemy!<br>";
    document.getElementById("textbox").innerHTML = dialog;
    player.attack(battlefield[1]);
    if (battlefield[1].getHull() <= 0) {
        battlefield.splice(1,1);
        if (battlefield.length == 1) {
            dialog = "YOU HAVE WON!<br>".fontcolor("#66ff00");
            document.getElementById("textbox").innerHTML = dialog;
            document.getElementById("retreat").style.display = "";
            document.getElementById("heal").style.display = "none";
            document.getElementById("attack").style.display = "none";
        } else {
            dialog += "Enemy elminiated!<br>".fontcolor("#66ff00");
            dialog += "A new challenger!<br>";
            dialog += "Retreat is now available until next round<br><br>".fontcolor("#CC00FF");
            document.getElementById("retreat").style.display = "";
            document.getElementById("textbox").innerHTML = dialog;
        }
    }
    playerStatus = player.getStatus();
    document.getElementById("charBoxText").innerHTML = playerStatus;
    enemyStatus = battlefield[1].getStatus();
    dialog += "Enemy: ".fontcolor("#FF0000") + enemyStatus + "<br>";
    document.getElementById("textbox").innerHTML = dialog;
}

function enemyAttackFromHtml() {
    dialog += "The enemy attacks you!<br>";
    document.getElementById("textbox").innerHTML = dialog;
    battlefield[1].attack(player);
    if (battlefield[0].getHull() <= 0) {
        dialog += "You have been elminiated!<br>".fontcolor("#FF0000");
        dialog += "PRESS HEART".fontcolor("#66ff00") + " to try again.<br>";
        document.getElementById("textbox").innerHTML = dialog;
        document.getElementById("playerActions").style.display = "none";
        document.getElementById("playerLoseActions").style.display = "";
    }
    playerStatus = player.getStatus();
    document.getElementById("charBoxText").innerHTML = playerStatus.fontcolor("#66ff00");
}

function useHeal() {
    dialog = "Turn: ".fontcolor("#ff6700") + turns + "<br>";
    if (turns >= 8) {
        if (crewSupport == 0) {
            dialog += "Your crew is working hard to support you! " + "+1 HP every round starting now!<br><br>".fontcolor("#66ff00");
            document.getElementById("textbox").innerHTML = dialog;
            crewSupport++;
        } else {
            dialog += "Your crew's got your back! " + "+1 HP<br><br>".fontcolor("#66ff00");
            document.getElementById("textbox").innerHTML = dialog;
            let remainingHealth = player.getHull() + 1;
            player.setHull(remainingHealth);
        }
    }
    turns++;
    dialog += "You used your Heal! +5 ship health.<br><br>".fontcolor("#66ff00");
    document.getElementById("textbox").innerHTML = dialog;
    let remainingHealth = player.getHull() + 5;
    player.setHull(remainingHealth);
    document.getElementById("textbox").innerHTML = dialog;
    playerStatus = player.getStatus();
    document.getElementById("charBoxText").innerHTML = playerStatus;
    enemyStatus = battlefield[1].getStatus();
    dialog += "Enemy: ".fontcolor("#FF0000") + enemyStatus + "<br>";
    document.getElementById("textbox").innerHTML = dialog;
}

function startGame() {
    getPlayerName();
    document.getElementById("charImg").src = "/charPortraits/zoid.png";
    document.getElementById("charBoxText").innerHTML = "Chief Zoid";
    document.getElementById("textbox").innerHTML = "Glad to have you, " + playerName.fontcolor("#66ff00") + ".  "
}

function getPlayerName() {
    pName = document.getElementById("playerName").value;
    pName.toString();
    playerName = "ADMIRAL " + pName.toUpperCase();
    if (playerName == "ADMIRAL ") {
        playerName = "ADMIRAL NAMELESS";
    }
}

function playMenuAudio() {
    let mainMenu = document.getElementById("mainMenu");
    mainMenu.play();
}

function pauseMenuAudio() {
    let mainMenu = document.getElementById("mainMenu");
    mainMenu.pause();
}

function playDialogAudio() {
    let mainMenu = document.getElementById("dialog");
    mainMenu.play();
}

function pauseDialogAudio() {
    let mainMenu = document.getElementById("dialog");
    mainMenu.pause();
}

function playBattleAudio() {
    let mainMenu = document.getElementById("battle");
    mainMenu.play();
}

function pauseBattleAudio() {
    let mainMenu = document.getElementById("battle");
    mainMenu.pause();
}

function buttonPressSound() {
    let btnPress = document.getElementById("buttonPressSound");
    btnPress.play();
}

function healSound() {
    let btnPress = document.getElementById("healSound");
    btnPress.play();
}

function dialogProgress() {
    dialogPos++;
}

// Story
function dia() {
    if (dialogPos == 0) {
        dialog = "Welcome to the USS Nova III. Don't ask about the last two.";
        document.getElementById("textbox").innerHTML = dialog;
    }
    if (dialogPos == 1) {
        dialog = "GOOD NEWS EVERYONE!!!";
        document.getElementById("charImg").src = "/charPortraits/prof.png";
        document.getElementById("charBoxText").innerHTML = "Lieutenant Farnsworth";
        document.getElementById("textbox").innerHTML = dialog;
    }
    if (dialogPos == 2) {
        dialog = "We are being invaded.";
        document.getElementById("textbox").innerHTML = dialog;
    }
    if (dialogPos == 3) {
        dialog = "*collective gasp*";
        document.getElementById("textbox").innerHTML = dialog;
    }
    if (dialogPos == 4) {
        dialog = "That's my least favorite kind of invasion.";
        document.getElementById("charImg").src = "/charPortraits/fry.png";
        document.getElementById("charBoxText").innerHTML = "Vice Admiral Fry";
        document.getElementById("textbox").innerHTML = dialog;
    }
    if (dialogPos == 5) {
        dialog = "What should we do?";
        document.getElementById("charImg").src = "/charPortraits/leela.png";
        document.getElementById("charBoxText").innerHTML = "Commander Leela";
        document.getElementById("textbox").innerHTML = dialog;
    }
    if (dialogPos == 6) {
        dialog = "Now don't worry, anything that happens will be the fault of the Admiral.";
        document.getElementById("charImg").src = "/charPortraits/prof.png";
        document.getElementById("charBoxText").innerHTML = "Lieutenant Farnsworth";
        document.getElementById("textbox").innerHTML = dialog;
    }
    if (dialogPos == 7) {
        dialog = "I mean-, our " + playerName.fontcolor("#66ff00") + " will surely come up with a plan!";
        document.getElementById("charImg").src = "/charPortraits/prof.png";
        document.getElementById("charBoxText").innerHTML = "Lieutenant Farnsworth";
        document.getElementById("textbox").innerHTML = dialog;
    }
    if (dialogPos == 8) {
        dialog = "I detected "+ enemyShips.fontcolor("#FF0000") + ", lucky for us they seem to be using the old TBC Logic Board instead of the new RTC Logic Board.";
        document.getElementById("charImg").src = "/charPortraits/hermes.png";
        document.getElementById("charBoxText").innerHTML = "Chief Hermes";
        document.getElementById("textbox").innerHTML = dialog;
    }
    if (dialogPos == 9) {
        dialog = "He means they're going to take turns fighting you.";
        document.getElementById("charImg").src = "/charPortraits/bender.png";
        document.getElementById("charBoxText").innerHTML = "Just Bender";
        document.getElementById("textbox").innerHTML = dialog;
    }
    if (dialogPos == 10) {
        dialog = "Well, what are we waiting for? Let's defend our ship!";
        document.getElementById("charImg").src = "/charPortraits/amy.png";
        document.getElementById("charBoxText").innerHTML = "Fleet Master Chief Amy";
        document.getElementById("textbox").innerHTML = dialog;
    }
    if (dialogPos == 11) {
        dialog = "It's time to defend your ship! <br><br>You'll take turns attacking each other until someone wins. <br><br>If you win, you have the option to retreat or continue defending your ship! <br><br>You win the game if you destroy all of the aliens and lose if you dont!<br><br>Chief Zoid has supplied you with one " + "HEAL POTION".fontcolor("#66ff00") + " so use it wisely!<br><br> If you can survive to " + "Round 8".fontcolor("#CC00FF") + ", your crew has a surprise for you!";
        document.getElementById("charImg").src = "";
        document.getElementById("charBoxText").innerHTML = playerName.fontcolor("#66ff00");
        document.getElementById("textbox").innerHTML = dialog;
        document.getElementById("lastDialog").style.display = "";
        document.getElementById("nextDialog").style.display = "none";
    }
    if (dialogPos == 12) {
        dialog = "The enemy looks fierce.<br>"
        enemyStatus = battlefield[1].getStatus();
        dialog += "Enemy: ".fontcolor("#FF0000") + enemyStatus + "<br>";
        playerStatus = player.getStatus();
        document.getElementById("charBoxText").innerHTML = playerStatus.fontcolor("#66ff00");
        document.getElementById("lastDialog").style.display = "none";
        document.getElementById("textbox").innerHTML = dialog;
        document.getElementById("playerActions").style.display = "";
    }
}