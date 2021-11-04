const getData = (borough, number) => {
    return $.ajax({
        url: `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${borough}&agency=NYPD`,
        type: 'GET',
        data: { $limit: number },
    });
};

const addToggle = (id) => {
    const $h3 = $(`#${id}`);
    const $button = $(`#${id}button`);

    $button.on('click', () => {
        $h3.text() === 'Closed' ? $h3.text('Open') : $h3.text('Closed');
    });
};

const clickHandler = (event) => {
    const $button = $(event.target);
    const $input = $('input');
    const text = $button.text();
    const number = $input.val() || 10;
    // console.log(text, number);
    getData(text, number).then((response) => {
        console.log(response);
        $('main').empty();
        for (complaint of response) {
            const $container = $('<article>')
                .html(`<h1>${complaint.complaint_type}<h1>
            <h3>${complaint.descriptor}</h3>
            <h3>${complaint.incident_zip}</h3>
            <h3 id="${complaint.unique_key}">${complaint.status}</h3>
            <button id="${complaint.unique_key}button"> Toggle Response </button>`);

            $('main').append($container);
            addToggle(complaint.unique_key);
        }
    });
};

$('button').each(function () {
    $(this).on('click', clickHandler);
});
