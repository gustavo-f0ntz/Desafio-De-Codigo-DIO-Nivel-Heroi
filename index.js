// Declara o nome e a XP do herói
let nomeHeroi = "Link";  // substitua pelo nome real
let xpHeroi = 7400;  // substitua pela XP real

// Determina o nível do herói com base na XP
let nivelHeroi;
if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

// Imprime o nome e o nível do herói
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);

