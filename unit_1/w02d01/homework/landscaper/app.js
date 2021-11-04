<<<<<<< HEAD
// Player stats
let scissorsAlert = 0, oldLawnmowerAlert = 0, newLawnmowerAlert = 0, studentsAlert = 0;
let result = "You win!";
let playerLastMoney = 0;
let playerMoney = 0;
let teamOwn = 0;
let day = 1;
let inventory = ["Teeth"];
const shop = ["Scissors", "Old_lawnmower", "New_lawnmower", "Team_of_students"];

while (true) {
    if (playerMoney >= 999 && teamOwn == 1) { // win condition (amt - 1)
        break;
    }
    for (let i = inventory.length; i >= 0; i--) { // check inv
        if (inventory[i] == "Teeth") {
            playerMoney = playerMoney + 1;
            playerLastMoney = playerLastMoney + 1;
        }
        if (inventory[i] == "Scissors") { // $5
            playerMoney = playerMoney + 5;
            playerLastMoney = playerLastMoney + 5;
        }
        if (inventory[i] == "Old_lawnmower") { // $25
            playerMoney = playerMoney + 50;
            playerLastMoney = playerLastMoney + 50;
        }
        if (inventory[i] == "New_lawnmower") { // $250
            playerMoney = playerMoney + 100;
            playerLastMoney = playerLastMoney + 100;
        } 
        if (inventory[i] == "Team_of_students") { // $500
            playerMoney = playerMoney + 250;
            playerLastMoney = playerLastMoney + 250;
        }
    }
    alert("Earned today: " + playerLastMoney + "$"); // alert for new item + total earnings daily
    playerLastMoney = 0;
    if (playerMoney >= 5 && scissorsAlert == 0) {
        alert("NEW: You can now buy Rusty Scissors $5!!");
        scissorsAlert = 1;
    }
    if (playerMoney >= 25 &&  oldLawnmowerAlert == 0) {
        alert("NEW: You can now buy Old-Timey Push Lawnmower for $25!!");
        oldLawnmowerAlert = 1;
    }
    if (playerMoney >= 250 && newLawnmowerAlert == 0) {
        alert("NEW: You can now buy Fancy Battery-Powered Lawnmower for $250!!");
        newLawnmowerAlert = 1;
    }
    if (playerMoney >= 500 && studentsAlert == 0) {
        alert("NEW: You can now buy A Team of Starving Students for $500!!");
        studentsAlert = 1;
    }

    var text;
    var playerResponse = prompt("Day: " + day + ", Money: " + playerMoney + "\nInventory: " + inventory + "\nWhat would you like to do? [Buy item], [Sell item], or press ENTER to start new day.");

    switch (playerResponse) { // buy items
        case "Buy item":
            var shopResponse = prompt("Money: " + playerMoney + "\nWould would you like to buy? \nScissors for 5$, Old_lawnmower for 25$, New_lawnmower for 250$, Team_of_students for 500$")
            switch (shopResponse) {
                case "Scissors":
                if (playerMoney >= 5) {
                    inventory.push("Scissors");
                    playerMoney = playerMoney - 5;
                    alert("You have bought Scissors.");
                    break;
                } else {
                    alert("You cannot afford that. Don't waste my time!");
                    break;
                }
                case "Old_lawnmower":
                if (playerMoney >= 25) {
                    inventory.push("Old_lawnmower");
                    playerMoney = playerMoney - 25;
                    alert("You have bought Old lawnmower.");
                    break;
                } else {
                    alert("You cannot afford that. Don't waste my time!");
                    break;
                }
                case "New_lawnmower":
                if (playerMoney >= 250) {
                    inventory.push("New_lawnmower");
                    playerMoney = playerMoney - 250;
                    alert("You have bought New lawnmower.");
                    break;
                } else {
                    alert("You cannot afford that. Don't waste my time!");
                    break;
                }
                case "Team_of_students":
                if (playerMoney >= 500) {
                    inventory.push("Team_of_students");
                    playerMoney = playerMoney - 500;
                    alert("You have bought A Team of Starving Students, cruel.");
                    teamOwn = 1;
                    break;
                } else {
                    alert("You cannot afford that. Don't waste my time!");
                }
                default:
                    alert("Don't waste my time!");
                    break;
            }
            break;
        case "Sell item": // sell items
            var SellResponse = prompt("What would you like to sell?\n" + inventory);
            switch(SellResponse) {
                case "Teeth":
                    for (let i = inventory.length; i >= 0; i--) { // check inv
                        if (inventory[i] == "Teeth") { // remove item
                            inventory.splice(i, 1);
                            playerMoney = playerMoney + 2.5;
                            alert("You have sold your Teeth!");
                            break;
                        }
                    }
                    break;
                case "Scissors":
                    for (let i = inventory.length; i >= 0; i--) { // check inv
                        if (inventory[i] == "Scissors") { // remove item
                            inventory.splice(i, 1);
                            playerMoney = playerMoney + 2.5;
                            alert("You have sold your Scissors!");
                            break;
                        }
                    }
                    break;
                case "Old_lawnmower":
                    for (let i = inventory.length; i >= 1; i--) { // check inv
                        if (inventory[i] == "Old_lawnmower") { // remove item
                            inventory.splice(i, 1);
                            playerMoney = playerMoney + 12.5;
                            alert("You have sold your Old_lawnmower!");
                            break;
                        }
                    }
                    break;
                case "New_lawnmower":
                    for (let i = inventory.length; i >= 1; i--) { // check inv
                        if (inventory[i] == "New_lawnmower") { // remove item
                            inventory.splice(i, 1);
                            playerMoney = playerMoney + 125;
                            alert("You have sold your New_lawnmower!");
                            break;
                        }
                    }
                    break;
                case "Team_of_students":
                    for (let i = inventory.length; i >= 1; i--) { // check inv
                        if (inventory[i] == "Team_of_students") { // remove item
                            inventory.splice(i, 1);
                            playerMoney = playerMoney + 250;
                            alert("You have sold your Team_of_students, human trafficking!");
                            break;
                        }
                    }
                    break;
            }
        case "Reset": // reset case
            playerResetResponse = prompt("Are you sure you want to reset?(Y/N)");
            switch(playerResetResponse) {
                case "Y":
                    scissorsAlert = 0, oldLawnmowerAlert = 0, newLawnmowerAlert = 0, studentsAlert = 0;
                    playerLastMoney = 0;
                    playerMoney = 0;
                    day = 1;
                    inventory = ["Teeth"];
                    break;
                case "N":
                    alert("Stop messing around and get to work!");
                    break;
            }
    }
}
alert(result);
=======
//console.log('test');

//each time user clicks, 1 day passes


//const input = prompt(put in your code here)

///////////
// Homework Resubmission
///////////

let totalMoney = 0;
let tools = ['teeth', 'scissors', 'lawnmower',
'fancy', 'team'];
let toolsCost = [{'teeth': 1}, {'scissors' : 5}, {'lawnmower': 25}, {'fancy':250}, {'team': 500}];
let toolsPayPerDay = [{'teeth': 1}, {'scissors' : 5}, {'lawnmower': 50}, {'fancy':100}, {'team': 250}];
let days = 0;

const teethMethod = () => {
    for (let i = 1; i < 6; i++) {
        const input = prompt(`\nMowing Lawn With Teeth\nDays worked: ${days += toolsCost[0].teeth}, Total Money in Bank Account: ${totalMoney += toolsPayPerDay[0].teeth}`)
    }
};
const scissorMethod = () => {
    totalMoney -= toolsCost[1].scissors;
    for (let i = 1; i < 6; i++) {
        const input = prompt(`\nMowing Lawn With Rusty Scissors\nDays worked: ${days += 1}, Total Money in Bank Account: ${totalMoney += toolsPayPerDay[1].scissors}`)
    }
};
const lawnMowerMethod = () => {
    totalMoney -= toolsCost[2].lawnmower;
    for (let i = 1; i < 6; i++) {
        const input = prompt(`\nMowing Lawn With Old-timey Push LawnMower\nDays worked: ${days += 1}, Total Money in Bank Account: ${totalMoney += toolsPayPerDay[2].lawnmower}`)
    }
};
const fancyMethod = () => {
    totalMoney -= toolsCost[3].fancy;
    for (let i = 1; i < 6; i++) {
        const input = prompt(`\nMowing Lawn With Fancy Battery-Powered Lawnmower\nDays worked: ${days += 1}, Total Money in Bank Account: ${totalMoney += toolsPayPerDay[3].fancy}`)
    }
};
const teamMethod = () => {
    totalMoney -= toolsCost[4].team;
    for (let i = 1; i < 6; i++) {
        const input = prompt(`\nMowing Lawn With Team of Starving Students\nDays worked: ${days += 1}, Total Money in Bank Account: ${totalMoney += toolsPayPerDay[4].team}`)
    if (totalMoney === 1000) {
        alert('You officially made $1000 and won the game!')
        }
    }
};


const play = () => {
    alert('Welcome new Landscaper! No time to wait, start cutting those lawns!');
    alert('You will now be using teeth to mow the lawn.');
    teethMethod();
    alert(`Congratulations! You now have $${totalMoney} in your bank account. You will now upgrade to Rusty Scissors`)
    alert(`Rusty Scissors cost $5 and will automatically be deducted from your bank account`)
    scissorMethod();
    alert(`Congratulations! You now have $${totalMoney} in your bank account. You will now upgrade to the Old-timey Push Lawnmower`)
    alert(`Old-timey Push Lawnmower costs $25 and will automatically be deducted from your bank account`)
    lawnMowerMethod();
    alert(`Congratulations! You now have $${totalMoney} in your bank account. You will now upgrade to the Fancy Battery-Powered Lawnmower`)
    alert(`Fancy Battery-Powered Lawnmower costs $250 and will automatically be deducted from your bank account`)
    fancyMethod();
    alert(`Congratulations! You now have $${totalMoney} in your bank account. You will now upgrade to the Team of Starving Students`)
    alert(`A Team of Starving Students costs $250 and will automatically be deducted from your bank account`)
    teamMethod();
}
play();
console.log(totalMoney)








// const mowLawnWithTeeth = (num) => {
//     for (let i = 1; i <= num; i ++) {
//         totalMoney += 1;
//     }
// }
// const playGame = () => {
//     mowLawnWithTeeth(5);
//     if (totalMoney === 5) {

//     }
// }

// const checkMoney = (money) => {
//     if (money >= 500) {
//         totalMoney - 500;
//         teamMethod();
//     } else if ( money >= 250) {
//         totalMoney - 250;
//         fancyMethod();
//     } else if (money >= 25) {
//          totalMoney - 25;
//          lawnmowerMethod();
//     } else (money >= 5) {
//          totalMoney - 5;
//          scissorMethod();
//     }
// };

// // Teeth, $1/day
// const teethMethod = (days) => {
//     for (let i = 1; i <= days; i++) {
//         totalMoney += 1;
//         console.log(totalMoney);
//         //console.log(checkMoney(totalMoney));
//     };
//     return totalMoney;
// };
// //console.log(teethMethod(5));

// //Rusty Scissors, $5/day
// const scissorMethod = (days) => {
//     for (let i = 1; i <= days; i++) {
//         totalMoney += 5;
//         console.log(totalMoney);
//         //console.log(checkMoney(totalMoney));
//     };
//     return totalMoney;
// };
// //console.log(scissorMethod(5));

// //Old-timey Push Lawnmower
// const lawnmowerMethod = (days) => {
//     for (let i = 0; i <= days; i++) {
//         totalMoney += 50;
//         console.log(totalMoney);
//         //console.log(checkMoney(totalMoney));
//     };
//     return totalMoney;
// };
// //console.log(lawnmowerMethod(5));

// //Fancy Battery-Powered Lawnmower
// const fancyMethod = (days) => {
//     for (let i = 0; i <= days; i++) {
//         totalMoney += 100;
//         console.log(totalMoney);
//         //console.log(checkMoney(totalMoney));
//     };
//     return totalMoney;
// };
// //console.log(fancyMethod(5));

// //Team of Starving Students
// const teamMethod = (days) => {
//     for (let i = 0; i <= days; i++) {
//         totalMoney += 250;
//         console.log(totalMoney);
//         //console.log(checkMoney(totalMoney));
//     };
//     return totalMoney;
// };
// //console.log(teamMethod(5));

// // OR

// const user = {
//     tool: ['teeth', 'scissors', 'lawnmower', 'fancy','team'],
//     daysWorked: 1,
// };

// if (user.tool === 'teeth') {
    
// }
// // function that iterates over tool and performs based on its value
// const cutGrass = (user, )
// // function that adds 1 day every time user clicks/ works 
// const
// const earnPerDay = {
//     teeth: 1,
//     scissors: 5,
//     lawnmower: 50,
//     fancy: 100,
//     team: 250
// 
>>>>>>> cd111adb1579480cb09838f476953d49de41b385
