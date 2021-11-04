<<<<<<< HEAD
const ironMan = {
    regularName: 'Anthony Edward "Tony" Stark',
    abilities: ['genius-level intellect', 'proficient scientist and engineer', 'powered armor suit'],
    marvelMovieAppearances: {
        ironMan: true,
        theHulk: true,
        ironManTwo: true,
        thor: false,
        captainAmerica: false,
        theAvengers: true,
        ironManThree: true,
        thorTwo: false,
        captainAmericaTwo: false,
        guardiansOfTheGalaxy: false,
        avengersTwo: true,
        antMan: false,
        captainAmericaThree: true,
        doctorStrange: false,
        guardiansOfTheGalaxyTwo: false,
        spiderManHomecoming: false,
        thorThree: false,
        blackPanther: false,
        avengersThree: true
    },
    jarvisAreYouThere: () => {
       console.log('At your service, sir')
    }
}

// Log Iron Man's third ability
console.log(ironMan.abilities[2]);
// Log all of Iron Man's abilities by looping through the array
for (let i = 0; i < ironMan.abilities.length; i++) {
    console.log(ironMan.abilities[i]);
}
// Log whether or not Iron Man appeared in spiderManHomecoming
console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);
// Wait, that's not right -- he did appear in that movie! Change the value to true without editing the object itself and log it again to verify it changed
ironMan.marvelMovieAppearances.spiderManHomecoming = true;
console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);
// Check if jarvis is there by calling on the jarvisAreYouThere function
ironMan.jarvisAreYouThere();

=======
////////////////
//Iron Man
///////////////

// const ironMan = {
//     regularName: 'Anthony Edward "Tony" Stark',
//     abilities: ['genius-level intellect', 'proficient scientist and engineer', 'powered armor suit'],
//     marvelMovieAppearances: {
//         ironMan: true,
//         theHulk: true,
//         ironManTwo: true,
//         thor: false,
//         captainAmerica: false,
//         theAvengers: true,
//         ironManThree: true,
//         thorTwo: false,
//         captainAmericaTwo: false,
//         guardiansOfTheGalaxy: false,
//         avengersTwo: true,
//         antMan: false,
//         captainAmericaThree: true,
//         doctorStrange: false,
//         guardiansOfTheGalaxyTwo: false,
//         spiderManHomecoming: false,
//         thorThree: false,
//         blackPanther: false,
//         avengersThree: true
//     },
//     jarvisAreYouThere: () => {
//        console.log('At your service, sir')
//     }
// }

// console.log(ironMan.abilities[2]);
// for (let element of ironMan.abilities) {
//     console.log(element)
// };
// console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);
// ironMan.marvelMovieAppearances.spiderManHomecoming = true;
// console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);
// ironMan.jarvisAreYouThere();


//////////////////////
//Assembling other Avengers
//////////////////////

// const createCaptain = () => {
//     return {
//         aliases: {
//             superheroName: 'Captain America'
//         },
//         abilities: ['handsomeness', 'smart', 'peak human strength'],
//         sayPhrase: () => {
//             console.log('i can do this all day');
//         }
//     }
// };
// console.log(createCaptain().aliases.superheroName);
// console.log(createCaptain().abilities[2]);
// createCaptain().sayPhrase();

// const blackWidow = {
//     aliases: {
//         realName: 'Natalia Alianovna Romanova',
//         otherNotableAliases: ['Scarlett Johanson', 'Natalie Rushman']
//     }
// };
// console.log(blackWidow.aliases.realName);
// console.log(blackWidow.aliases.otherNotableAliases[1]);


//////////////
//Avengers Nested
//////////////

// const theAvengers = [
//     { name: 'Tony Stark', superheroName: 'Iron Man'},
//     { name: 'Steve Rogers', superheroName: 'Captain America' },
//     { name: 'Bruce Banner', superheroName: 'The Hulk'},
//     { name: 'Thor' },
//     { name: 'Natasha Romanoff', superheroName: 'Black Widow' },
//     { name: 'Clint Barton', superheroName: 'Hawkeye' }
//   ];

// for (let i = 0; i < theAvengers.length; i++) {
//     console.log(theAvengers[i].name)
// };

// for (let element of theAvengers) {
//     console.log(element.name)
// };


////////////////
//MCU Movies
///////////////

// const mcuMovies = [
//     ['ant-man', 'ant-man and the wasp'],
//     ['the avengers', 'avengers: age of ultron', 'avengers: infinity war', 'avengers: end game'],
//     ['black panther'],
//     ['captain america: the first avenger', 'captain america: the winter soldier', 'captain america: civil war'],
//     ['doctor strange'],
//     ['guardians of the galaxy', 'guardians of the galaxy vol.2'],
//     ['the hulk'],
//     ['iron man', 'iron man 2', 'iron man 3'],
//     ['spiderman: homecoming'],
//     ['thor', 'thor: the dark world', 'thor: ragnarok']
//   ];

//   for (let arr of mcuMovies) {
//       for(let element of arr) {
//           console.log(element)
//       }
//   }


////////////////
//Other Objects - Instruments
///////////////

// const instruments = {
//     banjo: ["1920 gibson", "deering", "washburn"],
//     guitar: {
//       acoustic: ["martin", "taylor", "santa cruz", "gibson"],
//       electric: ["fender Strat", "telecaster", "PRS", "languedoc"],
//       nylon: ["baldwin", "cordoba"]
//     },
//     mandolin: ["eastman", "weber", "collings"]
//   };

// console.log(instruments.guitar.electric[1]);
// console.log(instruments.guitar.acoustic[2]);
// console.log(instruments.banjo[2]);
// console.log(instruments.mandolin[1]);

// for (let element of instruments.guitar.electric) {
//     console.log(element)
// };

// instruments.vocals = ['BTS', 'Shawn Mendes', 'Lauv'];
// console.log(instruments.vocals);


//////////////
//Other Objects - Garmonbozia
//////////////

const garmonbozia = {
    meltedFace: true,
    wobblyArms: true,
    mysteryMeats: [
      'Schlimmbinooks',
      'blangs',
      { place: 'Akrotiri', treasures: ['Minoan temples', 'volcanoes'] },
      { type: 'Yuck-tops', deliverables: [
        'Nevermind',
        { zone: 'safety-zone' },
        { zone: false, true: true },
        () => {
          return () => {
            return () => {
              return () => {
                return () => {
                  return { website: 'Gossipcop.com', what: {
                    offering: 'creamed corn', location: 'dark'
                  }
                  }
                }
              }
            }
          }
        }
       ]
      }
    ]
  }

console.log(garmonbozia.mysteryMeats[3].deliverables[3]()()()()().what.offering);
>>>>>>> cd111adb1579480cb09838f476953d49de41b385
