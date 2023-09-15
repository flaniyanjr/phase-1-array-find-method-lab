// code your solution here
function superbowlWin(seasonResults) {
    let obj= seasonResults.find( (yearOutcome) => {
        if (yearOutcome.result === 'W') {
            return yearOutcome
        }
    })
    if (obj) {
        return obj.year
    }
}
