// data for seeding database.

// users
const users = [
    {
        "firstName":"Bugs",
        "lastName": "Bunny",
        "userName": "bugsy",
        "email": "bugsyb@gmail.com",
        "password": "carrots",
        "birthDate": "1990-01-01",
        "organizationName": "Kansas City Recreation League",
        "teams":[""],
        "isCommissioner": false,
        "isPlayer": true,
        "isCaptain": true,
        "isLeagueWorker": false
    },
    {
        "firstName":"Donald",
        "lastName": "Duck",
        "userName": "rubberducky",
        "email": "goOregon@gmail.com",
        "password": "pondlife",
        "birthDate": "1990-01-01",
        "organizationName": "Kansas City Recreation League",
        "teams":[""],
        "isCommissioner": false,
        "isPlayer": true,
        "isCaptain": false,
        "isLeagueWorker": false
    },
    {
        "firstName":"Elmer",
        "lastName": "Fudd",
        "userName": "sillywabbit",
        "email": "efudd@nasa.gov",
        "password": "shotty",
        "birthDate": "1990-01-01",
        "organizationName": "Kansas City Recreation League",
        "teams":[""],
        "isCommissioner": true,
        "isPlayer": false,
        "isCaptain": false,
        "isLeagueWorker": true
    }
]
// orgs
const organizations = [ //name, sports list, locations list
    {
        "organizationName":"Kansas City Recreation League",
        "sports":["Basketball","Soccer"],
        "location":["Blackhoof Park", "Gezer Park", "Leawood City Park"]
    }
]
// sports
const sports = [
    {
        "sportName":"",
        "sportDescription":"",
        "startDate":"2023-05-30",
        "registeredTeams":["teamA._id, teamB._id"],
        "matchesPlayed":[""]
    }
]

// teams
const teams = [ //teamName, sportAssociation, stats, schedule of games, teamColors, roster
    {
        "teamName":"Space Jam",
        "sportAssociation": "Sport._id",
        "stats":"",
        "scheduleOfGames":[new Date('2023-06-01'), new Date('2023-06-05')],
        "teamColors": ['Red', 'White'],
        "roster": users._id
    }
]
// matches
const matches = [
    {
        "date":new Date('2023-06-01'),
        "location": "Blackhoof Park",
        "teamsPlaying":[{"team":"teamA._id"},{"team":"teamB._id"}],
        "score":2
    }
]

module.exports = users;

