import {getNestedArrayWithRandomNumbers} from "./random-array.js";
import {inputValidation as userInput} from "./validation.js";
//Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів.
//Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.

const SHIPS_BATTLEFIELD = getNestedArrayWithRandomNumbers(6, 6, 0, 0, 6);
let shipsCount = 5;

const shipsPosOnBattlefield = (shipsBattlefield, shipsCount, maxRandNumber = 5) => {
    const randNumber = () => Math.floor(Math.random() * (maxRandNumber + 1));
    let shipsPlaced = 0;
    while (shipsPlaced < shipsCount) {
        let corX = randNumber();
        let corY = randNumber();
        if (shipsBattlefield[corX][corY] !== 1) {
            shipsBattlefield[corX][corY] = 1;
            shipsPlaced++;
        }
    }
    return shipsBattlefield;
}

const getUserShot = (battlefieldWithShips, shipsCount, maxShots = 10) => {
    let shotsCount = 0;
    while (shipsCount > 0 && shotsCount < maxShots) {
        const userCorX = userInput('Enter a X coordinate(1-6): ', 1, 6);
        const userCorY = userInput('Enter a Y coordinate(1-6): ', 1, 6);
        if (battlefieldWithShips[userCorX - 1][userCorY - 1] === 1) {
            alert(`You got the ship! ${--shipsCount} ships remaining.`)
            battlefieldWithShips[userCorX-1][userCorY-1] = 0;
        } else {
            alert(`You missed!`)
        }
        shotsCount++
    }
    if (shipsCount === 0){
        alert('Congratulations, you have sunk all the ships!');
    } else {
        alert(`You have no more shots left. ${shipsCount} ships remaining.`);
    }
    return battlefieldWithShips;
}

shipsPosOnBattlefield(SHIPS_BATTLEFIELD, shipsCount)
getUserShot(SHIPS_BATTLEFIELD, 5)