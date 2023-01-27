
//DO AN ACTION WHEN THE "A" KEY IS PRESSED


//test to see if click works
const test = document.querySelector(".clap");
test.addEventListener("click", function (){
    console.log("Clicked")
})

// test to see if pressing A key works and plays sound

let drumMapKeyPress = {
    'KeyA': 'sounds/clap.wav',
    'KeyS': 'sounds/hihat.wav',
    'KeyD': 'sounds/kick.wav',
    'KeyF': 'sounds/openhat.wav',
    'KeyG': 'sounds/boom.wav',
    'KeyH': 'sounds/ride.wav',
    'KeyJ': 'sounds/snare.wav',
    'KeyK': 'sounds/tom.wav',
    'KeyL': 'sounds/weird.wav'
};

document.addEventListener('keydown', function(e) {
    if (e.code in drumMapKeyPress) {
        console.log(e.code)
        let audio = new Audio(drumMapKeyPress[e.code]);
        audio.play();

    }
});

document.addEventListener('keydown', function(e) {
    let key = e.key.toUpperCase();
    let elements = document.querySelectorAll('.type');
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (element.querySelector('.key').textContent === key) {
            element.style.borderColor = 'red';
            setTimeout(function() {
                element.style.borderColor = '#c7d0d5';
            }, 200);
        }
    }
});

const drumMap = {
    'clap': 'sounds/clap.wav',
    'hihat': 'sounds/hihat.wav',
    'kick': 'sounds/kick.wav',
    'openhat': 'sounds/openhat.wav',
    'boom': 'sounds/boom.wav',
    'ride': 'sounds/ride.wav',
    'snare': 'sounds/snare.wav',
    'tom': 'sounds/tom.wav',
    'weird': 'sounds/weird.wav'
};

Object.keys(drumMap).forEach(key => {
    const drum = document.querySelector(`.${key}`);

    drum.addEventListener('click', function() {
        new Audio(drumMap[key]).play();
    });

});

