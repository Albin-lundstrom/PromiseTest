const enterNumber = () => {
    return new Promise((resolve, reject) => {
        const userNumber = Number(window.prompt("Enter a number (1 - 6):"));
        const randomNumber = Math.ceil(Math.random() * 6);
    
    if (isNaN(userNumber)) {
        reject(new Error("Wrong Input Type"));
    }
    if (userNumber === randomNumber) {
        resolve({
            points: 2,
            randomNumber,
        });
    } else if (userNumber === randomNumber -1 || userNumber === randomNumber +1){
        resolve({
            points: 1,
            randomNumber,
        });
    } else {
        resolve({
            points: 1,
            randomNumber,
        });
    }
});
};


const continueGame = () => {
    return new Promise((resolve) => {
        if (window.confirm("Do you want to contince?")){
            resolve(true);
        }else {
            resolve(false)
        }
    });
}

// const handelGuess = () => {
//     enterNumber()
//     .then((result) => {
//         alert(`Dice: ${result.randomNumber}: You got: ${result.points} point`)
//         continueGame().then((result) => {
//             if (result) {
//                 handelGuess()
//             } else {
//                 alert("Game Over!!!!!!!!!?43947234729346245167!")
//             }
//         });
//     })
//     .catch(error => alert(error));
// }

const handelGuess = async () => {
    try {
        const result = await enterNumber();

        alert(`Dice: ${result.randomNumber}: You got: ${result.points} point`)

        const isContinuing = await continueGame();

        if (isContinuing) {
            handelGuess()
        } else {
            alert("GaMe OVer?")
        }
    } catch (error) {
        alert(error)
    }
}


const start = () => {
    handelGuess()
};

start();