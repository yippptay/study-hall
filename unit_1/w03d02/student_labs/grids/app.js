function red() {
    $redDiv = $("<div>");
    $redDiv.addClass("redbox");
    console.log($redDiv);
    $(".container").append($redDiv);
}

function black() {
    $blackDiv = $("<div>");
    $blackDiv.addClass("blackbox");
    $(".container").append($blackDiv);
}

function grid(num) {
    for (let i = 0; i < num / 2; i++) {
        red();
        black();
    }
}

grid(64);