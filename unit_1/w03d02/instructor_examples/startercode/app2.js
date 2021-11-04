/////////////////////////
// Our Data
/////////////////////////

const songs = [
    { song: 'Backend of Forever', artist: 'Coheed and Cambria' },
    { song: 'Changes', artist: 'David Bowie' },
    { song: 'Bohemian Rhapsody', artist: 'Billy Joel' },
    { song: 'The Future Freaks me Out', artist: 'Motion City Soundtrack' },
    { song: 'Chemo Limo', artist: 'Regina Spektor' },
    { song: 'Arctic Swing', artist: 'Anni Rossi' },
    { song: 'Defcon', artist: 'Supersystem' },
    { song: 'Noahs Ark', artist: 'CocoRosie' },
    { song: 'The Longest Time', artist: 'Billy Joel' },
    { song: 'Unstoppable', artist: 'Foxy Shazam' },
];

const picked = [];

////////////////////////////////////////
//Populating Data to the Dom with Functions and Loops
////////////////////////////////////////

const addToUnpicked = (value, index) => {
    //CREATES THE DIV
    const div = document.createElement('div'); //Creates the div
    div.innerText = `${value.song} by ${value.artist}`; //Add text to div
    document.querySelector('.unpicked main').appendChild(div); //append div

    //ADD EVENT LISTENER
    div.addEventListener('click', (event) => {
        picked.push(...songs.splice(index, 1)); //splices from songs and pushed to picked
        buildLists();
    });
};

const addToPicked = (value, index) => {
    const div = document.createElement('div'); //Creates the div
    div.innerText = `${value.song} by ${value.artist}`; //Add text to div
    document.querySelector('.picked main').appendChild(div); //append div

    //ADD EVENT LISTENER
    div.addEventListener('click', (event) => {
        songs.push(...picked.splice(index, 1)); //splice from picked and push to songs
        buildLists();
    });
};

const buildLists = () => {
    const pickDiv = document.querySelector('.picked main'); //storing picked main block
    const unpickDiv = document.querySelector('.unpicked main'); //storing the unpicked main block

    pickDiv.innerHTML = ''; //clearing the pickDiv
    unpickDiv.innerHTML = ''; //clearing the unpickDiv

    songs.forEach(addToUnpicked); //builds the unpicked list
    picked.forEach(addToPicked); // builds the picked list
};

// addToPicked(songs[0], 0); //test

buildLists();

// setTimeout(() => {
//     picked.push(songs.pop()); //removes item from songs adds to picked array
//     buildLists(); //rebuilds the dom
// }, 3000);

////////////////////
//Bonus: Web Components
////////////////////
//Creating Our Own Custom HTML Tags

//This class defines the behavior of the html tag
class HelloWorld extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = '<h1>Hello World</h1>';
    }
}

//this links a custom tag with the class
window.customElements.define('hello-world', HelloWorld);
