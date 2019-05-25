const muney = process.argv[2]

function countBot(money) {
    let bottles = money / 2;
    let empty = 0;
    let bottleCaps = 0;
    let count = 0;
    let capsRec =0;
    let botRec =0;
    let capsLeft = 0;
    let botsLeft = 0;
    for (i=0; i < bottles; i++) {
        count ++
        empty++
        bottleCaps++
        if ((empty !== 0) && (empty % 2 === 0)) {
            i--
            botRec++
        }
        if ((bottleCaps !== 0) && (bottleCaps % 4 === 0)) {
            i--
            capsRec++
        }
    }
    capsLeft = bottleCaps % 4;
    botsLeft = empty % 2;
    console.log("number of bottles: ", count)
    console.log("bottles left over: ", botsLeft)
    console.log("caps left over: ", capsLeft)
    console.log("Total Earned:")
    console.log("bottles: ", botRec)
    console.log("caps: ", capsRec)
}
countBot(muney)