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

function splitTeamsIntoDiamonds (arrayOfTeams, numberOfGames) {
    const shuffledTeams = shuffle(arrayOfTeams)
    var diamond1 = []
    var diamond2 = []
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
    for(i = 0; i < numberOfGames; i++){
        i % 2
        ? diamond1.push(arrayOfTeams[i])
        : diamond2.push(arrayOfTeams[i])
    }
    return [ diamond1, diamond2 ]
}

function calculateDaysGames (arrayOfTeams, numberOfGames){ // calculates games for 1 day
    var allPossibleTeamCombos = []
    arrayOfTeams.getPairs(function(returnedPairs){ // add all the possible teams to memory
        allPossibleTeamCombos.push(returnedPairs)
    })
    const allPossibleTeamCombosToString = allPossibleTeamCombos.map(teamCombo => teamCombo.toString())
    const removeBadTeamCombos = allPossibleTeamCombosToString.filter(teamCombo => {
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
    return removeBadTeamCombos
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



/*
const gameDates = [
    new Date('2019-06-03'),  // date passes as iso 8601 string with the format YYY-MM-DD
    new Date(2019, 05, 10), // date passed as integer variables with the format YYYY, MM, DD Note: Javascript counts months from 0-11
    new Date('06/17/2019'), // date passed as javascript short date string with the format MM/DD/YYYY
    new Date('June 24 2019'), // date passed as javascript long date string with the format month day year
    new Date('1 July 2019') // month and day can be passed in any order
]



*/