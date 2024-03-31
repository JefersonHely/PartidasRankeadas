// Criando função de calculo
const saldo = rankHeroi()

function rankHeroi(vitoria = 0, derrota = 0) {
    return vitoria - derrota
}

// Criando classificação
const classe = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendario", "Imortal"]
switch (true) {
    case saldo < 10:
        console.log("O Herói tem de saldo de " + saldo + " está no nível de " + classe[0])
        break
    case saldo < 20:
        console.log("O Herói tem de saldo de " + saldo + " está no nível de " + classe[1])
        break
    case saldo < 40:
        console.log("O Herói tem de saldo de " + saldo + " está no nível de " + classe[2])
        break
    case saldo < 60:
        console.log("O Herói tem de saldo de " + saldo + " está no nível de " + classe[3])
        break
    case saldo < 80:
        console.log("O Herói tem de saldo de " + saldo + " está no nível de " + classe[4])
        break
    case saldo < 90:
        console.log("O Herói tem de saldo de " + saldo + " está no nível de " + classe[5])
        break
    case saldo > 99:
        console.log("O Herói tem de saldo de " + saldo + " está no nível de " + classe[6])
        break
}