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
        "name":"Kansas City Recreation League",
        "sports":null,
        "location":["Blackhoof Park", "Gezer Park", "Leawood City Park"]
    }
]
// sports
const sports = [
    {
        "sportName":"Basketball",
        "sportDescription":"5v5 Indoor Co-Ed League",
        "startDate":new Date('2023-05-30'),
        "registeredTeams":null,
        "matchesPlayed":null
    },
    {
        "sportName":"Soccer",
        "sportDescription":"8v8 Outdoor Men's League",
        "startDate":new Date('2023-05-30'),
        "registeredTeams":null,
        "matchesPlayed":null
    }
]

// teams
const teams = [ //teamName, sportAssociation, stats, schedule of games, teamColors, roster
    {
        "teamName":"Space Jam",
        "sportAssociation": '64698fce58b163fd8ddb8900',
        "stats":"",
        "scheduleOfGames":[new Date('2023-06-01'), new Date('2023-06-05')],
        "teamColors": ['Red', 'White'],
        "roster": null
    }
]
// matches
const matches = [
    {
        "date":new Date('2023-06-01'),
        "location": "Blackhoof Park",
        "teamsPlaying":["teamA", "teamB"],
        "score":"2-0"
    }
]

module.exports = {users, organizations, sports, teams , matches};

