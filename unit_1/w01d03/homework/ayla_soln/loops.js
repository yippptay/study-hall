/* =============== FOOD FOR THOUGHT ===============
- How many different ways can you tackle each of these problems?
- In the review, we only used 'for' loops. Can these problems be solved with other types of loops? How, or why not?
=================================================== */

//  1. Create a loop that logs the numbers from 0-99 (ascending)
for(let i = 0; i <= 99; i++){
    console.log(i)
}


// 2. Create a loop that logs the numbers from 99-0 (descending)
for(let i = 99; i >= 0; i--){
    console.log(i);
}


// 3. Create a loop that logs the EVEN numbers from 0-98 (ascending)
for(let i = 0; i <= 98; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
// OR
for(let i = 0; i <= 98; i += 2){
    console.log(i);
}


// 4. Create a loop that logs the EVEN numbers from 98-0 (descending)
for(let i = 98; i >= 0; i--){
    if(i % 2 == 0){
        console.log(i);
    }
}
// OR
for(let i = 98; i >= 0; i -= 2){
    console.log(i);
}


// 5. Create a loop that logs the ODD numbers from 0-99 (ascending)
for(let i = 0; i <= 99; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}
// OR
for(let i = 1; i <= 99; i+= 2){
    console.log(i);
}


// 6. Create a loop that logs the ODD numbers from 99-0 (descending)
for(let i = 99; i >= 0; i--){
    if(i % 2 != 0){
        console.log(i);
    }
}
// OR
for(let i = 99; i >= 0; i-= 2){
    console.log(i);
}


// 7. Create a loop that logs the numbers from 49-72 (ascending)
for(let i = 49; i <= 72; i++){
    console.log(i);
}


// 8. Create a loop that logs the numbers from 81-26 (descending)
for(let i = 81; i >= 26; i--){
    console.log(i);
}


// 9. Create a loop that logs the numbers from 3-90 that are multiples of 3 (ascending)
for(let i = 3; i <= 90; i++){
    if(i % 3 == 0){
        console.log(i);
    }
}
// OR
for(let i = 3; i <= 90; i += 3){
    console.log(i);
}