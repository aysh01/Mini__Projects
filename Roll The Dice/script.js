let images = ["dice-01.svg",
    "dice-02.svg",
    "dice-03.svg",
    "dice-04.svg",
    "dice-05.svg",
    "dice-06.svg"];
let dice = document.querySelectorAll("img");
let out1 = document.getElementById("out");
let confetti=document.getElementById('confetti');

function roll() {
    dice.forEach(function (die) {
        die.classList.add("shake");
    });
    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6);
        console.log(dieOneValue, dieTwoValue);
        if (dieOneValue > 4) {
            //Out
            //dieOneValue == dieTwoValue;
            console.log("OuT");
            out1.style.display = 'block';
            // confetti.style.display = 'block';
            setTimeout(out, 8000);
        }
        else if (dieOneValue <= 6 && dieTwoValue <= 6) {
            //If, dieOneValue is Greater
            console.log("+1", dieOneValue && dieTwoValue);
            // console.log("--", a);
        }
        // else if (dieOneValue < dieTwoValue) {
        //     //If, dieTwoValue is Greater
        //     console.log("smaller");
        // }
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "Your roll is " + ((dieOneValue + 1) + (dieTwoValue + 1));
    },
        1000
    );
}
roll();

function out() {
    document.getElementById("out").style.display = 'none';
    // document.getElementById('confetti').style.display = 'none';
}
