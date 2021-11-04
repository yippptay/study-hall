module.exports = {
    level0: ()=> 'Jerrica and Arthur Will Guide You To Save Ayla from Alex the Merciless but you must use your knowledge of arrays, objects and console.log to spell "Save Ayla" inside of a single string to solve his riddle',
    level1: () => (['x','s', 'x', 'S']),
    level2: () => ({
     val: ['a', 1, 2, 'g']
   }),
   level3: () => ({
    val: [['a'], ['ve']]
  }),
  level4: () => ([
    ' A',
    {val: 'yla'}
  ]),
  checkWin(character){
    if(character.solve === "Save Ayla"){
      console.log("You Win")
    } else {
      console.log("You must spell Save Ayla capitalization and space matter")
    }
  }
  }