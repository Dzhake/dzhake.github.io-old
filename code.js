var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);


var randomText1 = [
    "<a class='randomText' href='https://en.wikipedia.org/wiki/Lemming#Misconceptions'>Truth about lemmings!!! (link)</a>",
    "Robot is chill (*^▽^*)",
    "Press WIN + \".\" to use emoji :D",
    "I remember names only of three game developers: Hempuli, Hamumu and Hevipelle",
    "You didn't restart this page 50 times to read all facts, right?",
    "//TODO: Write one more fact",
    "DM me on discord if you have any facts suggestions :D",
    "Apple is a vegetable, not a fruit",
    "One of these facts is a lie ༼ つ ◕_◕ ༽つ",
    "Celeste has over 2.2k mods",
    "One of the facts has mispell",
    "/tableflip (╯°□°)╯︵ ┻━┻",
    "/unflip ┬─┬ノ( º _ ºノ)",
    "WIN+R is pretty useful (✿◠‿◠)",
    "░▒▓ alt+176/7/8 ▓▒░",
    "Why are you reading this?",
    "In javascript you can use \', \" and \` for strings, but \` is different from \' and \"",
    "Hold alt and then type some numbers on numpad",
    "The cake is lie",
];




function onLoad() {
    const fadeInRows = document.querySelectorAll('.green-text .fade-in-row');
    fadeInRows.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.25}s`;
    element.classList.add('fade-in-row-animated');
    });
    var currentdate = new Date();
    if (document.getElementById('randomText1') != null) {
        document.getElementById('randomText1').innerHTML = randomText1[Math.floor(Math.random()*randomText1.length)];
    }
    if (currentdate.getHours() < 4) {
        document.getElementById('randomText1').innerHTML = "It's 4am ╰（‵□′）╯";
    }
    if (localStorage.getItem("isLightTheme") == "true") {
        document.querySelectorAll('*').forEach(function(element) {
            element.classList.toggle("light-mode");
        });
    }
    document.querySelector(".green-text").style.visibility = "initial";
}

function toggleTheme() {
    document.querySelectorAll('*').forEach(function(element) {
        element.classList.toggle("light-mode");
    });
    localStorage.setItem("isLightTheme",document.body.classList.contains("light-mode"));
}



  