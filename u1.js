const number = Math.floor(Math.random() * 11);
let tries = 5;
let victory = false;

console.log("%c Vítej ve hře Hádej číslo! ", "background: #222; color: #bada55; font-size: 14px;");

while (tries > 0) {
    let guess = prompt(`Uhodni číslo od 0 do 10 včetně (zbývá ${tries} pokusů):`);

    if (guess === null) {
        break;
    }

    guess = Number(guess);

    if (guess === number) {
        alert("Gratuluji! Uhodl jsi správné číslo: " + number);
        victory = true;
        break;
    } else if (guess < number) {
        alert("Moje číslo je VĚTŠÍ.");
    } else {
        alert("Moje číslo je MENŠÍ.");
    }

    tries--;
}

if (!victory) {
    alert("LOSE. Moje číslo bylo: " + number);
}