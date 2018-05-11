console.log('-app.js-');


// using DOM API

// query DOM & bind event-listener(s) & process event

document.addEventListener('DOMContentLoaded', function () {

    let alertBox = document.querySelector('.alert');
    let showBtn = document.querySelector('.btn-primary');
    let hideBtn = document.querySelector('.btn-danger');
    let greetMeBtn = document.querySelector('.btn-success');

    hideBtn.addEventListener('click', function () {
        alertBox.style.display = 'none';
    });
    showBtn.addEventListener('click', function () {
        alertBox.style.display = 'block';
    });
    greetMeBtn.addEventListener('click', function () {
        let timeNow = new Date().toTimeString()
        alertBox.innerText = `good morning - ${timeNow}`
    });

    //-----------------------------------------------

    let images = [
        "images/1.jpeg",
        "images/2.jpeg",
        "images/3.jpeg",
        "images/4.jpeg",
        "images/5.jpeg"
    ];

    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');
    let imageElement = document.getElementById('slideShowEle');

    startBtn.addEventListener('click', () => {
        // timer API
        let idx = 0;
        let interval = setInterval(() => {
            let imagePath = images[idx];
            imageElement.src = imagePath;
            idx++;
            if (idx === images.length) idx = 0;
        }, 1000);
        stopBtn.addEventListener('click', () => {
            clearInterval(interval);
        })

    });

    //-------------------------------------------------

    let loadTodosBtn = document.getElementById('loadTodosBtn');
    let todosBox = document.getElementById('todos-box');
    loadTodosBtn.addEventListener('click', () => {
        let promise = fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        promise
            .then((response) => response.json())
            .then(todos => {
                todosBox.innerText = JSON.stringify(todos);
            })

    })



})
