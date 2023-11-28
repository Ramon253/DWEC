function startBingo() {
    let cards = []
    for (let i = 0; i < 5; i++) {
        cards.push(createBingoCard())
        console.table(cards[i])
    }
    do {
        let randNum = Math.floor(Math.random() * 90 + 1)
        console.log("Numero : " + randNum)
        for (let cardsKey in cards) {
            cards[cardsKey] = checkNum(cards[cardsKey], randNum)
            console.log("Carton :" + cardsKey)
            console.table(cards[cardsKey])
        }

    } while (!checkBingo(cards))
    console.log("Ganador del bingo es el carton :" + checkBingo(cards))
}

const checkNum = (card, randNum) => {
    for (const cardRowKey in card) {
        while (card[cardRowKey].includes(randNum)) {
            let randNumIndex = card[cardRowKey].indexOf(randNum)
            card[cardRowKey][randNumIndex] = 0
        }
    }
    return card;
}

const checkBingo = (cards) => {
    for (const card of cards) {
        let isBingo = false
        for (const cardRow of card) {
            if (new Set(cardRow).size !== 1) {
                isBingo = false;
                break;
            }
            isBingo = true
        }
        if (isBingo)
            return cards.indexOf(card)
    }


    return false;
}

const initBingoCard = () => {
    let card = [];
    for (let i = 0; i < 4; i++) {
        card[i] = []
        for (let j = 0; j < 8; j++) {
            card[i][j] = 0;
        }
    }
    return card;
}

const createBingoCard = () => {
    let card = initBingoCard()
    for (let i = 0; i < card.length; i++) {
        let positions = getBingoRandPositions()
        for (const position of positions) {
            card[i][position] = Math.floor(Math.random() * 90 + 1)
        }
    }

    return card;
}

const getBingoRandPositions = () => {
    let positions = [];
    for (let i = 0; i < 5; i++) {
        let num = Math.floor(Math.random() * 8)

        if (positions.includes(num)) {
            i--;
            continue;
        }

        positions.push(num);
    }
    return positions;
}


startBingo()
