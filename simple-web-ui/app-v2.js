

// using DOM API  thru jQuery-lib

$(document).ready(function () {

    let alertBox = $('.alert');
    $('#hideBtn').click(() => {
        //alertBox.hide(5000);
        alertBox.slideUp(1000);
    });
    $('#showBtn').click(() => {
        //alertBox.show(5000);
        alertBox.slideDown(1000);
    });
    $('#greetBtn').click(() => {
        alertBox.text('Hello ! from jQuery-lib')
    });

})

