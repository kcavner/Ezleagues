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
        "teams": "646ad02f80f96f3ea9dba011",
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
        "teams": "646ad02f80f96f3ea9dba011",
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
        "teams": "646ad02f80f96f3ea9dba011",
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
        "registeredTeams" : "646ad02f80f96f3ea9dba011",
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
        "roster": ['646ad244e99bdd9498bd2ff0', '646ad244e99bdd9498bd2ffc', '646ad244e99bdd9498bd2ffe']
    },
    {
        "teamName":"Nuggets",
        "sportAssociation": '64698fce58b163fd8ddb8900',
        "stats":"",
        "scheduleOfGames":[new Date('2023-06-01'), new Date('2023-06-05')],
        "teamColors": ['Blue', 'Yellow'],
        "roster": ['646ad244e99bdd9498bd2ff0', '646ad244e99bdd9498bd2ffc', '646ad244e99bdd9498bd2ffe']
    }
]
// matches
const matches = [
    {
        "date":new Date('2023-06-01'),
        "location": "Blackhoof Park",
        "teamsPlaying":['646ad2fe8145805eb85eaea8', '646ad3d869e4957012411758'], //need another basketball team
        "score":"2-0"
    }
]

module.exports = {users, organizations, sports, teams , matches};

