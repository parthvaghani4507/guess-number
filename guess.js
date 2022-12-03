function guessNumber() {
    let a = Math.floor((Math.random() * 101));

    let number;

    let chance = 0;
    // console.log(a)
    while (number != a) {
        console.log(a);
        number = parseInt(prompt("Enter a number"));
        if (number > a)
            alert("Enter a small number");
        else if (number < a)
            alert("Enter a larger number");
        chance++;
    }
    if (chance <= 5)
        document.write("Great!! You take only " + chance + " chance")
    else
        document.write("You take " + chance + " chance");
}