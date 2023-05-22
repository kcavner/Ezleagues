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
    },
    {
        "firstName":"Pepe",
        "lastName": "Le Pew",
        "userName": "pepeftw",
        "email": "plepew@garbage.org",
        "password": "smelly",
        "birthDate": "1990-01-01",
        "organizationName": "Kansas City Recreation League",
        "teams": "646ad02f80f96f3ea9dba011",
        "isCommissioner": false,
        "isPlayer": true,
        "isCaptain": false,
        "isLeagueWorker": false
    },
    {
        "firstName":"Sylvester",
        "lastName": "The Cat",
        "userName": "kittyhawk",
        "email": "mewmew@yahoo.com",
        "password": "whiskers",
        "birthDate": "1990-01-01",
        "organizationName": "Kansas City Recreation League",
        "teams": "646ad02f80f96f3ea9dba011",
        "isCommissioner": false,
        "isPlayer": true,
        "isCaptain": false,
        "isLeagueWorker": false
    },
    {
        "firstName":"Wile E",
        "lastName": "Coyote",
        "userName": "roadkill",
        "email": "wcoyote@acnme.com",
        "password": "dynamite",
        "birthDate": "1990-01-01",
        "organizationName": "Kansas City Recreation League",
        "teams": "646ad02f80f96f3ea9dba011",
        "isCommissioner": false,
        "isPlayer": true,
        "isCaptain": false,
        "isLeagueWorker": false
    },
    {
        "firstName":"Nikola",
        "lastName": "Jokic",
        "userName": "nikoJ",
        "email": "njokic@nuggets.com",
        "password": "ballsdeep",
        "birthDate": "1990-01-01",
        "organizationName": "Kansas City Recreation League",
        "teams": "646ad838b11ac0f5eeedbd99",
        "isCommissioner": false,
        "isPlayer": true,
        "isCaptain": true,
        "isLeagueWorker": false
    },
    {
        "firstName":"Jamal",
        "lastName": "Murray",
        "userName": "jamalmurr",
        "email": "jmurray@nuggets.com",
        "password": "winwinwin",
        "birthDate": "1990-01-01",
        "organizationName": "Kansas City Recreation League",
        "teams": "646ad838b11ac0f5eeedbd99",
        "isCommissioner": false,
        "isPlayer": true,
        "isCaptain": false,
        "isLeagueWorker": false
    },
    {
        "firstName":"Michael",
        "lastName": "Porter",
        "userName": "likemikep",
        "email": "mporter@nuggets.com",
        "password": "three4days",
        "birthDate": "1990-01-01",
        "organizationName": "Kansas City Recreation League",
        "teams": "646ad838b11ac0f5eeedbd99",
        "isCommissioner": false,
        "isPlayer": true,
        "isCaptain": false,
        "isLeagueWorker": false
    },
    {
        "firstName":"Aaron",
        "lastName": "Gordon",
        "userName": "aarongman",
        "email": "agordon@nuggets.com",
        "password": "churlish",
        "birthDate": "1990-01-01",
        "organizationName": "Kansas City Recreation League",
        "teams": "646ad838b11ac0f5eeedbd99",
        "isCommissioner": false,
        "isPlayer": true,
        "isCaptain": false,
        "isLeagueWorker": false
    },
    {
        "firstName":"Kentavious",
        "lastName": "Caldwell-Pope",
        "userName": "swinginpopestick",
        "email": "kcaldwell-pope@nuggets.com",
        "password": "blessings",
        "birthDate": "1990-01-01",
        "organizationName": "Kansas City Recreation League",
        "teams": "646ad838b11ac0f5eeedbd99",
        "isCommissioner": false,
        "isPlayer": true,
        "isCaptain": false,
        "isLeagueWorker": false
    }
]
// orgs
const organizations = [ //name, sports list, locations list
    {
        "name":"Kansas City Recreation League",
        "sports":['646ad3ea392415cb577f993d', '646adbd050c735eabbe16783'],
        "location":["Blackhoof Park", "Gezer Park", "Leawood City Park"]
    }
]
// sports
const sports = [
    {
        "sportName":"Basketball",
        "sportDescription":"5v5 Indoor Co-Ed League",
        "startDate":new Date('2023-05-30'),
        "registeredTeams" : ["646ad02f80f96f3ea9dba011",'646ad838b11ac0f5eeedbd99'],
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
        "roster": ['646ad838b11ac0f5eeedbd8e', '646ad838b11ac0f5eeedbd9c', '646ad838b11ac0f5eeedbda0', '646ad838b11ac0f5eeedbda2', '646ad838b11ac0f5eeedbda4',]
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
        "date":new Date('2023-05-20'),
        "location": "Blackhoof Park",
        "teamsPlaying":['646ad2fe8145805eb85eaea8', '646ad3d869e4957012411758'], //need another basketball team
        "score":"85-105"
    },
    {
        "date":new Date('2023-05-25'),
        "location": "Blackhoof Park",
        "teamsPlaying":['646ad2fe8145805eb85eaea8', '646ad3d869e4957012411758'], //need another basketball team
        "score":"0-0"
    }
]

module.exports = {users, organizations, sports, teams , matches};

