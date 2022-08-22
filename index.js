// const newEmployee = (nomeCompleto) => {
//     const emailName = nomeCompleto.toLowerCase().split(' ').join('_');
//     return {nomeCompleto, email:`${emailName}@trybe.com`}
// }
//
// const newEmployees = (cb) => {
//     const employees = {
//         id1: cb('Pedro Guerra'),
//         id2: cb('Luiza Drummond'),
//         id3: cb('Carla Paiva'),
//     }
//     return employees;
// };
//
//
// console.log(newEmployees(newEmployee))
//
// const sorteio = () => {
//
// }
//
// const generateNumber = () => {
//     return Math.round(Math.random() * 5)
// }
//
// const contest = (luckyNumber, cb) => {
//     if(luckyNumber === cb) {
//         return 'Parabéns, você ganhou!'
//     }
//     return 'Tente novamente'
// }
//
// console.log(contest(4, generateNumber()))
//
// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
//
// const verificaAcertos = (gabarito, resposta) => {
//  if(gabarito === resposta) {
//      return 1;
//  }if (resposta === 'N.A') {
//      return 0
//     }
//     return -0.5
// }
//
//
// const studentPerformance = (gabarito, resposta, callback) => {
//     let assertion = 0
//
//     for(let i = 0; i < gabarito.length; i++) {
//         console.log(`gabarito[i] = ${gabarito[i]} - resposta[i]' = ${resposta[i]}`)
//         const cbReturn = callback(gabarito[i], resposta[i]);
//         assertion += cbReturn
//     }0
//     return `Resultado final: ${assertion} pontos`
// }
//
// console.log(studentPerformance(RIGHT_ANSWERS, STUDENT_ANSWERS, verificaAcertos))

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const dragonDamage = () => {
    return  Math.round(Math.random() * 35) + 15
}

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const warriorDamage = (warrior) => {
    const minDamage = warrior.strength
    const warriorMaxDamage = warrior.strength * warrior.weaponDmg
    return  Math.round(Math.random() * (warriorMaxDamage - minDamage)) + minDamage
}

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const mageDamage = (mage) => {

    let mageMana = mage.mana
    const minDamage = mage.intelligence
    const maxDamage = mage.intelligence  * 2
    let mageDamage = Math.round(Math.random() * (maxDamage - minDamage)) + minDamage

    let roundStatus = {
        mageDamage,
        manaSpent : 15
    }
    if (mageMana < 15) {
        roundStatus.mageDamage = 'Not enough Mana...'
        roundStatus.manaSpent = 0
    }
    return roundStatus
}

const battleMembers = { mage, warrior, dragon };

const gameActions = {
    warriorAction :  (warriorDamage) => {
    const warriorDmgTurn = warriorDamage(warrior)
        dragon.healthPoints -= warriorDmgTurn
        warrior.damage = warriorDmgTurn
    },
    mageAction : (mageDamage) => {
        const mageDmgTurn = mageDamage(mage)
        dragon.healthPoints -= mageDmgTurn
        mage.mana -= mageDmgTurn.manaSpent
        mage.damage = mageDmgTurn.mageDamage
    },
    dragonAction: (dragonDamage) => {
        const dragonDmgTurn = dragonDamage(dragon)
        warrior.healthPoints -= dragonDmgTurn
        mage.healthPoints -= dragonDmgTurn
        dragon.damage = dragonDmgTurn
    },
    turnResult: () => battleMembers
};


gameActions.dragonAction(dragonDamage)
gameActions.warriorAction(warriorDamage)
gameActions.mageAction(mageDamage)
console.log(gameActions.turnResult())
