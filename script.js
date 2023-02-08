var image = document.getElementById("iduntai");
var btn = document.getElementById("button");
var a = 0;

image.addEventListener("mousedown", function() {
    var nilai = document.getElementById("nilai");
    var music = document.getElementById("myAudio");
    image.src = "ahir.png";
    music.play();
    a++;
    nilai.innerText = a;

    if (a%10 === 0) {
        var color = Math.random();
        if(color <0.2) {
            document.body.style.backgroundColor = 'skyblue';
        } else if (color > 0.2 && color < 0.4) {
            document.body.style.backgroundColor = 'yellow';
        } else if (color > 0.4 && color < 0.6) {
            document.body.style.backgroundColor = 'green';
        } else if (color > 0.6 && color < 0.8) {
            document.body.style.backgroundColor = 'blue';
        } else {
            document.body.style.backgroundColor = 'red';
        }
    }

    if (a%500 === 0) {
        alert("Maneh Te Kesel");
    }

});

image.addEventListener("mouseup", function() {
    image.src = "awal.png";
})

image.addEventListener("touchstart", function() {
    var nilai = document.getElementById("nilai");
    var music = document.getElementById("myAudio");
    image.src = "ahir.png";
    music.play();
    a++;
    nilai.innerText = a;

    if (a%10 === 0) {
        var color = Math.random();
        if(color <0.2) {
            document.body.style.backgroundColor = 'skyblue';
        } else if (color > 0.2 && color < 0.4) {
            document.body.style.backgroundColor = 'yellow';
        } else if (color > 0.4 && color < 0.6) {
            document.body.style.backgroundColor = 'green';
        } else if (color > 0.6 && color < 0.8) {
            document.body.style.backgroundColor = 'blue';
        } else {
            document.body.style.backgroundColor = 'red';
        }
    }

    if (a%500 === 0) {
        alert("Maneh Te Kesel");
    }

});

image.addEventListener("touchend", function() {
    image.src = "awal.png";
})