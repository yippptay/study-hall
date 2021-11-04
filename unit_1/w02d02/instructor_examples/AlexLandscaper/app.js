////////////////
//Example of Landscaper Solve
//From Alex Merced
/////////////////

///Game Tracker Object to Keep Track of Game Player Progress

const gameTracker = {
    tool: 0,
    money: 0,
    exit: false,
};

// Tool Array With All Tools

const tools = [
    { name: 'teeth', cost: 0, reward: 1 },
    { name: 'rusty scissors', cost: 5, reward: 5 },
    { name: 'pushmower', cost: 25, reward: 50 },
    { name: 'powered mower', cost: 250, reward: 100 },
    { name: 'teeth', cost: 500, reward: 250 },
];

//Object of functions for different user actions to be used in lieu of switches or ifs

const actions = {
    b: () => {
        //b is the buy function
        if (gameTracker.tool === 4) {
            alert('No Tools to Upgrade to');
            return 0;
        }

        if (gameTracker.money > tools[gameTracker.tool + 1].cost) {
            gameTracker.money -= tools[gameTracker.tool + 1].cost;
            gameTracker.tool++;
            alert('You have upgraded your tools.');
            return 0;
        }

        alert('You cannot afford an upgrade yet');
    },
    m: () => {
        //m is the mow function
        gameTracker.money += tools[gameTracker.tool].reward;
        alert(`You earned $${tools[gameTracker.tool].reward}`);
    },
    e: () => {
        //e is the exit function
        gameTracker.exit = true;
    },
    i: () => {
        // i is the incorrect selection function
        alert('that is not one of the options');
    },
};

//Wincheck function, to check if player won or choose to exit game

const winCheck = () => {
    if (gameTracker.tool >= 4 && gameTracker.money >= 1000) {
        alert('you have won the game!!!');
        return false;
    }

    if (gameTracker.exit) {
        alert('you have quit the game');
        return false;
    }

    return true;
};

// The Game

alert(
    'Welcome to Landscaper, more the lawn and upgrade your tools till you win!!!'
);

//The game loop runs as long as the winCheck function returns true, and then takes user input which is passed as key to the actions object to invoke the right function.

while (winCheck()) {
    const input = prompt(`You currently are using ${
        tools[gameTracker.tool].name
    } and have $${gameTracker.money}.
    What would you like to do?
    'b' -> buy tool upgrade
    'm' -> mow with your current tools
    'e' -> exit the game`);

    //if they don't choose a valid option, i is passed

    actions[actions[input.toLowerCase()] ? input.toLowerCase() : 'i']();
}
