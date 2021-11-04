<<<<<<< HEAD
if (typeof jQuery == "undefined"){
    console.log("oops! I still have to link my jQuery properly!");
} else {console.log("I did it! I linked jQuery and this js file!")};

// // Year 1
const $container = $("#container");
console.log($container);

const $h1 = $("<h1>");
console.log($h1);

$h1.text("Magic School Bus");
$container.append($h1);

// Year 2
const $h2 = $("<h2>");
$h2.text("Taylor Yip");

const $h3 = $("<h3>");
$h3.text("Slytherin");

const $h4 = $("<h4>");
$h4.text("Hachiko");
$h4.addClass("dog");

const $wand = $("<h4>");
$wand.text("Kodai Wand");
$container.append($h2, $h3, $h4, $wand);

// Year 3
const $list = $("<ul>");
$list.attr("storage", "trunk");

const $listItem1 = $("<li>");
$listItem1.text("butter beer")

const $listItem2 = $("<li>").text("invisibility cloak").addClass("secret");
const $listItem3 = $("<li>").text("magic map").addClass("secret");
const $listItem4 = $("<li>").text("time turner").addClass("secret");
const $leash = $("<li>").text("leash").addClass("dog");
const $jellyBeans = $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans");
$list.append($listItem1, $listItem2, $listItem3, $listItem4, $leash, $jellyBeans);
$container.append($list);

// Year 4
const $table = $("<table>");
const $h5 = $("<h5>").text("Spring 2017");
const $tr = $("<tr>");
const $th1 = $("<th>").text("Day");
const $th2 = $("<th>").text("Classes");
$tr.append($th1, $th2);

const $trMon = $("<tr>");
const $td1 = $("<td>").text("Monday");
const $tdClasses1 = $("<td>").text("Divination, Charms, Potions, Transfiguration");
$trMon.append($td1, $tdClasses1);

const $trTues = $("<tr>");
const $td2 = $("<td>").text("Tuesday");
const $tdClasses2 = $("<td>").text("History of Magic, Defense Against Dark Arts, Quidditch practice");
$trTues.append($td2, $tdClasses2);

const $trWed = $("<tr>");
const $td3 = $("<td>").text("Wednesday");
const $tdClasses3 = $("<td>").text("Divination, Charms, Potions, Transfiguration");
$trWed.append($td3, $tdClasses3);

const $trThurs = $("<tr>");
const $td4 = $("<td>").text("Thursday");
const $tdClasses4 = $("<td>").text("History of Magic, Defense Against Dark Arts, Quidditch practice");
$trThurs.append($td4, $tdClasses4);

const $trFri = $("<tr>");
const $td5 = $("<td>").text("Friday");
const $tdClasses5 = $("<td>").text("Divination, Charms, Potions, Transfiguration");
$trFri.append($td5, $tdClasses5);

$table.append($tr, $trMon, $trTues, $trWed, $trThurs, $trFri);
$container.append($h5, $table);

// Year 5
$wand.remove();
$listItem1.remove();

$wand.text("3rd Age Wand")
$wand.insertAfter($h4)
$wand.css("color", "orange");

$h4.detach();
$h4.insertAfter($h3);

// Year 6
const $divClass = $(".secret");
$divClass.hide("slow").delay(3000);
$divClass.show("slow");

$leash.addClass("cabbage");
$leash.removeClass("cabbage");

// Year 7
$h5.text("Fall 2018");

const $addItem = $("<li>");
$addItem.text("Butter Beer");

$list.prepend($addItem);
$list.attr("storage", "chest");
=======
// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

//////////
// Year 1
//////////

// $(() => {}); -> add jQuery in here

const $container = $('#container');
console.log($container);

const $h1 = $('<h1>');
console.log($h1);
$h1.text('Hogwarts');
$container.append($h1);


////////////
// Year 2
////////////

const $h2 = $('<h2>');
$h2.text('Sharon Kim');
const $h3 = $('<h3>');
$h3.text('Gryffindor');
const $h4 = $('<h4>');
$h4.text('Hedwig');
$h4.addClass('owl');
const $wand = $('<h4>');
$wand.text('Birch Wand with Phoenix Feather Core');
$container.append($h2, $h3, $h4, $wand);


/////////////
// Year 3
////////////

const $list = $('<ul>');
$list.attr('storage', 'trunk');
const $listItem1 = $('<li>');
$listItem1.text('butter beer')
const $listItem2 = $('<li>').text('invisibility cloak');
$listItem2.addClass('secret');
const $listItem3 = $('<li>').text('magic map').addClass('secret');
const $listItem4 = $('<li>').text('time turner').addClass('secret');
const $leash = $('<li>').text('leash').addClass('owl');
const $jellyBeans = $('<li>').text("Bertie Bott's Every Flavor [Jelly] Beans");
$list.append($listItem1, $listItem2, $listItem3, $listItem4, $leash, $jellyBeans);
$container.append($list);


//////////////
// Year 4
//////////////

const $table = $('<table>');
const $h5 = $('<h5>').text('Spring 2017');
const $tr = $('<tr>');
const $th1 = $('<th>').text('Day');
const $th2 = $('<th>').text('Classes');
$tr.append($th1, $th2);
const $trMon = $('<tr>');
const $td1 = $('<td>').text('Monday');
const $tdClasses1 = $('<td>').text('Divination, Charms, Potions, Transfiguration');
$trMon.append($td1, $tdClasses1);
const $trTues = $('<tr>');
const $td2 = $('<td>').text('Tuesday');
const $tdClasses2 = $('<td>').text('History of Magic, Defense Against Dark Arts, Quidditch practice');
$trTues.append($td2, $tdClasses2);
const $trWed = $('<tr>');
const $td3 = $('<td>').text('Wednesday');
const $tdClasses3 = $('<td>').text('Divination, Charms, Potions, Transfiguration');
$trWed.append($td3, $tdClasses3);
const $trThurs = $('<tr>');
const $td4 = $('<td>').text('Thursday');
const $tdClasses4 = $('<td>').text('History of Magic, Defense Against Dark Arts, Quidditch practice');
$trThurs.append($td4, $tdClasses4);
const $trFri = $('<tr>');
const $td5 = $('<td>').text('Friday');
const $tdClasses5 = $('<td>').text('Divination, Charms, Potions, Transfiguration');
$trFri.append($td5, $tdClasses5);
$table.append($tr, $trMon, $trTues, $trWed, $trThurs, $trFri);
$container.append($h5, $table);


////////////
// Year 5
////////////

$wand.remove();
$listItem1.remove();
$wand.text('Repaired Birch Wand')
$wand.insertAfter($h4) // learned from stackoverflow
$wand.css('color', 'indigo');
$h4.detach();
$h4.insertAfter($h3);


////////////////
// Year 6
////////////////

const $divClass = $('.secret');
$divClass.hide('slow').delay(3000);
$divClass.show('slow');
$leash.addClass('cabbage');
$leash.removeClass('cabbage');


///////////////
// Year 7
///////////////

$h5.text('Fall 2018');
const $addItem = $('<li>');
$addItem.text('Butter Beer');
$list.prepend($addItem);
$list.attr('storage', 'chest');
>>>>>>> cd111adb1579480cb09838f476953d49de41b385
