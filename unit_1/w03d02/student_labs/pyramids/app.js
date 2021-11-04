pyramind = (num) => {
    for(let i = 1; i <= num; i++) {

        $row = $("<div>").addClass("row");
        $(".container").append($row);

        for(let j = 1; j <= i; j++) {
            $triangle = $("<div>").addClass("triangle");
            $row.append($triangle);
        }
    }
}
pyramind(16);