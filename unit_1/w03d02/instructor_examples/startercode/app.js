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

////////////////////////////////////////
//Populating Data to the Dom with Functions and Loops
////////////////////////////////////////

//Function to add one song to the unpicked list
const addToUnpicked = (data) => {
    const $newDiv = $('<div>'); //create the div
    $newDiv.text(`${data.song} by ${data.artist}`); //add text to div
    $('.unpicked main').append($newDiv); //append div
};

const addAllSongsToUnpicked = (allSongs) => {
    for (song of songs) {
        addToUnpicked(song);
    } //loops over songs array and adds each one to DOM
};

// addToUnpicked(songs[0]); //Test
addAllSongsToUnpicked(songs);

////////////////////////////////////////
// Creating Events and Moving Data
/////////////////////////////////////

const moveUnpickedToPicked = (event) => {
    console.log(event);
    $theDiv = $(event.target); //turns what we clicked on to a jQuery object
    $('.picked main').append($theDiv);
    ///////////// adds the removePicked listener
    const removePicked = (event) => {
        $(event.target).remove();
    };

    $theDiv.on('click', removePicked);
    ///////////////
}; //function that movies one item to the other block

$('.unpicked main div').on('click', moveUnpickedToPicked); // add event listening

//////////////////////////
// Exercise
// Make an event listener that is triggered when you click on a div under picked that then removes that div from dom.
//////////////////////////
