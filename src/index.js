const softballTeams = [ // Array of teams
    'Ottumwa', 'Benton', 'Bettendorf', 'IC Regina', 'CR Kennedy',
    'Cedar Falls', 'Dub. Senior', 'Dub. Hempstead', 'North Scott',
    'CR Prairie', 'IC West', 'Pleasant Valley', 'Linn-Mar', 'CCA',
    'Lisbon', 'CR Jeff Blue', 'CR Jeff White', 'CR Xavier', 'Waterloo West'
]


Array.prototype.getPairs = function (returnedPairs) { // We can define ourselves a new Array function here with the Array.protptype method
    var pairs = [] // new pairs array
    for (var teamOneIndexPosition = 0; teamOneIndexPosition < this.length - 1; teamOneIndexPosition++) {
        for (var teamTwoIndexPosition = teamOneIndexPosition; teamTwoIndexPosition < this.length - 1; teamTwoIndexPosition++) {
            returnedPairs([this[teamOneIndexPosition], this[teamTwoIndexPosition+1]])
        }
    }
}

var allPossibleTeamCombos = []

softballTeams.getPairs(function(returnedPairs){ // add all the possible teams to memory
    allPossibleTeamCombos.push(returnedPairs)
})

const allPossibleTeamCombosToString = allPossibleTeamCombos.map(teamCombo => teamCombo.toString())

const sortTeamsOne = allPossibleTeamCombosToString.filter(teamCombo => {
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

console.log(sortTeamsOne.slice(0, 99))
console.log(sortTeamsOne.slice(100,199))

/*
const gameDates = [
    new Date('2019-06-03'),  // date passes as iso 8601 string with the format YYY-MM-DD
    new Date(2019, 05, 10), // date passed as integer variables with the format YYYY, MM, DD Note: Javascript counts months from 0-11
    new Date('06/17/2019'), // date passed as javascript short date string with the format MM/DD/YYYY
    new Date('June 24 2019'), // date passed as javascript long date string with the format month day year
    new Date('1 July 2019') // month and day can be passed in any order
]

const june3Teams = [
    'Benton', 'CR Kennedy', 'Cedar Falls', 'Dub. Senior',
    'Dub. Hempstead', 'CR Prairie', 'IC West', 'CCA',
    'CR Jeff Blue', 'CR Jeff White', 'CR Xavier',
    'IC Regina', 'Bettendorf', 'Waterloo West'
]

const june3Games = [
    new Date('June 03, 2019 08:00:00'), new Date('June 03, 2019 08:30:00'), new Date('June 03, 2019 09:30:00'),
    new Date('June 03, 2019 10:30:00'), new Date('June 03, 2019 11:00:00'), new Date('June 03, 2019 08:00:00'),
    new Date('June 03, 2019 12:30:00'), new Date('June 03, 2019 08:00:00'), new Date('June 03, 2019 08:00:00')
]

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

*/