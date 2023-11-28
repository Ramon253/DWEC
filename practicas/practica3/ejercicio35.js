function rollDice(num) {
    let wonDices = [];
    for (let i = 0; i < num; i++) {
        let dice1 = Math.floor(Math.random() * 6 + 1)
        let dice2 = Math.floor(Math.random() * 6 + 1)
        wonDices.push(Math.max(dice2, dice1))
    }
    console.table(wonDices);
}

rollDice(200)