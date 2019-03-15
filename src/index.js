const _ = require('lodash')

const softballTeams = [ // Array of teams
    'Ottumwa', 'Benton', 'Bettendorf', 'IC Regina', 'CR Kennedy',
    'Cedar Falls', 'Dub. Senior', 'Dub. Hempstead', 'North Scott',
    'CR Prairie', 'IC West', 'Pleasant Valley', 'Linn-Mar', 'CCA',
    'Lisbon', 'CR Jeff Blue', 'CR Jeff White', 'CR Xavier', 'Waterloo West'
]

const june3Teams = [
    'Benton', 'CR Kennedy', 'Cedar Falls', 'Dub. Senior',
    'Dub. Hempstead', 'CR Prairie', 'IC West', 'CCA',
    'CR Jeff Blue', 'CR Jeff White', 'CR Xavier',
    'IC Regina', 'Bettendorf', 'Waterloo West'
]

Array.prototype.getPairs = function (returnedPairs) { // We can define ourselves a new Array function here with the Array.protptype method
    var pairs = [] // new pairs array
    for (var teamOneIndexPosition = 0; teamOneIndexPosition < this.length - 1; teamOneIndexPosition++) {
        for (var teamTwoIndexPosition = teamOneIndexPosition; teamTwoIndexPosition < this.length - 1; teamTwoIndexPosition++) {
            returnedPairs([this[teamOneIndexPosition], this[teamTwoIndexPosition+1]])
        }
    }
}
function shuffle(array) {
    var m = array.length, t, i
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--)
  
      // And swap it with the current element.
      t = array[m]
      array[m] = array[i]
      array[i] = t
    }
    return array
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function splitTeamsIntoDiamonds (arrayOfTeamCombos) {
    var diamond1 = []
    var diamond2 = []
    for(i = 0; i < arrayOfTeamCombos.length; i++){
        i % 2
        ? diamond1.push(arrayOfTeamCombos[i])
        : diamond2.push(arrayOfTeamCombos[i])
    }
    return { diamond1TeamCombos: shuffle(diamond1), diamond2TeamCombos: shuffle(diamond2) }
}

function teamsCantPlayTwoGamesAtOnce ({diamond1TeamCombos, diamond2TeamCombos}){
    var games = []
    for(i = 0; i < diamond1TeamCombos.length; i++){
        const diamond1 = diamond1TeamCombos[i].split(',')
        const diamond2 = diamond2TeamCombos[i].split(',')
        const diamond2Plus1 = diamond2TeamCombos[i++].split(',')
        const diamond1Plus1 = diamond2TeamCombos[i++].split(',')
        if (diamond1[0] === diamond2[0]) continue
        if (diamond1[1] === diamond2[0]) continue
        if (diamond1[0] === diamond2[1]) continue
        if (diamond1[1] === diamond2[1]) continue
        games.push({diamond1, diamond2})
    }
    return games
}

function teamsCantPlayMoreThanTwiceADay (diamondsSort1){
    var games = []
    for(i = 0; i < diamondsSort1.length; i++){
        games.push(diamondsSort1[i].diamond1)
        games.push(diamondsSort1[i].diamond2)
    }
}

function calculateDaysGames (arrayOfTeams, numberOfGames){ // calculates games for 1 day
    var allPossibleTeamCombos = []
    arrayOfTeams.getPairs(function(returnedPair){ // add all the possible teams to memory
        allPossibleTeamCombos.push(returnedPair)
    })
    console.log(`All Possible Combos: ${ allPossibleTeamCombos.length }`)
    const allPossibleTeamCombosToString = allPossibleTeamCombos.map(teamCombo => teamCombo.toString())
    const legalTeamCombos = allPossibleTeamCombosToString.filter(teamCombo => {
        switch(teamCombo){
            case 'Ottumwa,CR Jeff Blue':
            case 'Bettendorf,North Scott':
            case 'Bettendorf,Pleasant Valley':
            case 'Dub. Senior,Dub. Hempstead':
            case 'North Scott,Pleasant Valley':
            case 'Lisbon,CR Jeff Blue':
                return false
            default:
                return true
        }
    })
    console.log(`All Legal Combos: ${ legalTeamCombos.length }`)
    const teamsToDiamonds = splitTeamsIntoDiamonds(legalTeamCombos)
    const diamondsSort1 = teamsCantPlayTwoGamesAtOnce(teamsToDiamonds)
    console.log(`All games where teams play one game at a time: ${diamondsSort1.length}`)
    return diamondsSort1
}

function teamsCantPlayTwoGamesInOneDate (diamondsSort1){
    
}


console.log(calculateDaysGames(june3Teams, 14))

const june10Teams = [
    'Benton', 'CR Kennedy', 'Cedar Falls', 'Dub. Senior',
    'Dub. Hempstead', 'CR Prairie', 'IC West', 'CCA',
    'CR Jeff Blue', 'CR Jeff White', 'CR Xavier', 'Pleasant Valley',
    'IC Regina', 'Bettendorf', 'North Scott', 'Lisbon',
    'Linn-Mar'
]

const june17Teams = [
    'Benton', 'CR Kennedy', 'Cedar Falls', 'Dub. Senior',
    'Dub. Hempstead', 'CR Prairie', 'IC West',
    'CCA', 'CR Jeff Blue', 'CR Jeff White',
    'CR Xavier', 'Pleasant Valley', 'IC Regina',
    'Bettendorf', 'North Scott', 'Lisbon'
]

const june24Teams = [
    'Benton', 'CR Kennedy', 'Cedar Falls', 'Dub. Senior',
    'Dub. Hempstead', 'CR Prairie', 'IC West', 'CCA',
    'CR Jeff Blue', 'CR Jeff White', 'CR Xavier', 'Pleasant Valley'
]

const july1Teams = [
    'Benton', 'CR Kennedy', 'Cedar Falls', 'Dub. Senior',
    'Dub. Hempstead', 'CR Prairie', 'IC West', 'CCA',
    'CR Jeff Blue', 'CR Jeff White', 'CR Xavier', 'Pleasant Valley',
    'IC Regina', 'Bettendorf', 'North Scott'
]
const teams = [ june3Teams, june10Teams, june17Teams, june24Teams, july1Teams ]
