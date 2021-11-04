$.ajax({
    url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD",
    type: "GET",
    data: {
        "$limit" : 1000,
        // "$$app_token" : "YOURAPPTOKENHERE"
    }
}).done(function(data) {
    alert("Retrieved " + data.length + " records from the dataset!");

const brooklyn = (amt) => {
    for (let i = 0; i < amt; i++) {
        if (data[i].borough == "BROOKLYN"){
            const $div = $("<div>").addClass("desc").html(`
            <h4> ${data[i].descriptor}</h4>
            <button class="police-btn">WHAT DID THE POLICE DO?</button>
            <p class="text"> ${data[i].resolution_description} </p> <br>`)
            $(".police-btn").on("click", (event) =>{
                $(".text").css("visibility", "visible");
                $(".text").toggle();
            })
            $(".container-desc").append($div)
        } else {
            amt++
        }
    } 
}

const manhattan = (amt) => {
    for (let i = 0; i < amt; i++) {
        if (data[i].borough == "MANHATTAN"){
            const $div = $("<div>").addClass("desc").html(`
            <h4> ${data[i].descriptor}</h4>
            <button class="police-btn">WHAT DID THE POLICE DO?</button>
            <p class="text"> ${data[i].resolution_description} </p> <br>`)
            $(".police-btn").on("click", (event) =>{
                $(".text").css("visibility", "visible");
                $(".text").toggle();
            })
            $(".container-desc").append($div)
        } else {
            amt++
        }
    } 
}

const queens = (amt) => {
    for (let i = 0; i < amt; i++) {
        if (data[i].borough == "QUEENS"){
            const $div = $("<div>").addClass("desc").html(`
            <h4> ${data[i].descriptor}</h4>
            <button class="police-btn">WHAT DID THE POLICE DO?</button>
            <p class="text"> ${data[i].resolution_description} </p> <br>`)
            $(".police-btn").on("click", (event) =>{
                $(".text").toggle();
                $(".text").css("visibility", "visible");
            })
            $(".container-desc").append($div)
        } else {
            amt++
        }
    } 
}

const bronx = (amt) => {
    for (let i = 0; i < amt; i++) {
        if (data[i].borough == "BRONX"){
            const $div = $("<div>").addClass("desc").html(`
            <h4> ${data[i].descriptor}</h4>
            <button class="police-btn">WHAT DID THE POLICE DO?</button>
            <p class="text"> ${data[i].resolution_description} </p> <br>`)
            $(".police-btn").on("click", (event) =>{
                $(".text").css("visibility", "visible");
                $(".text").toggle();
            })
            $(".container-desc").append($div)
        } else {
            amt++
        }
    } 
}

const statenIsland = (amt) => {
    for (let i = 0; i < amt; i++) {
        if (data[i].borough == "STATEN ISLAND"){
            const $div = $("<div>").addClass("desc").html(`
            <h4> ${data[i].descriptor}</h4>
            <button class="police-btn">WHAT DID THE POLICE DO?</button>
            <p class="text"> ${data[i].resolution_description} </p> <br>`)
            $(".police-btn").on("click", (event) =>{
                $(".text").css("visibility", "visible");
                $(".text").toggle();
            })
            $(".container-desc").append($div)
        } else {
            amt++
        }
    } 
}

const $brooklyn = $(".btn-container > button:nth-child(1)")
const $manhattan = $(".btn-container > button:nth-child(2)")
const $queens = $(".btn-container > button:nth-child(3)")
const $bronx = $(".btn-container > button:nth-child(4)")
const $statenIsland = $(".btn-container > button:nth-child(5)")

$brooklyn.on("click", () => {
    remove();
    brooklyn(checkInput());
}); 
$manhattan.on("click", () => {
    remove();
    manhattan(checkInput());
});
$queens.on("click", () => {
    remove();
    queens(checkInput());
}); 
$bronx.on("click", () => {
    remove();
    bronx(checkInput());
});
$statenIsland.on("click", () => {
    remove();
    statenIsland(checkInput());
});

const checkInput = () => {
    //
    let $input = parseInt($(".search").val())
        return $input ? $input : 10;
    }
})

const remove = () => {
    if($(".container-desc").children().length > 1){
        $(".container-desc").children().remove()
    } else {
        console.log("Nothing to move");
    }
}